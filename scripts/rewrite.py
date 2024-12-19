import json
import re
from pathlib import Path

natives = {}
functions = {}

for path in [Path("common.j"), Path("blizzard.j")]:
    with path.open(encoding="utf-8") as f:
        text = f.read()

        # match all "native          SetUnitLookAt       takes unit whichUnit, string whichBone, unit lookAtTarget, real offsetX, real offsetY, real offsetZ returns nothing"
        for match in re.finditer(r"native\s+(\w+)\s+takes\s+(.*?)\s+returns\s+(\w+)\s*\n", text):
            name, args, ret = match.groups()
            natives[name] = {}

            if args == "nothing":
                continue
            for i, arg in enumerate(args.split(",")):
                t, v = arg.strip().split()
                if t == "real":
                    natives[name][i] = "real"
                elif t == "integer":
                    natives[name][i] = "integer"

        for match in re.finditer(r"function\s+(\w+)\s+takes\s+(.*?)\s+returns\s+(\w+)\s*\n", text):
            name, args, ret = match.groups()
            functions[name] = {}

            if args == "nothing":
                continue
            for i, arg in enumerate(args.split(",")):
                t, v = arg.strip().split()
                if t == "real":
                    functions[name][i] = "real"
                elif t == "integer":
                    functions[name][i] = "integer"

with Path("natives.json").open("w") as f:
    json.dump(natives, f, indent=2)
with Path("functions.json").open("w") as f:
    json.dump(functions, f, indent=2)

for path in Path("natives").glob("*.json"):
    with path.open() as f:
        data = json.load(f)
        native = natives.get(path.stem)
        if native is None:
            print(f"missing {path.stem}")
        for i, t in native.items():
            data["takes"][i]["type"] = t
    with path.open("w") as f:
        json.dump(data, f, indent=2)
