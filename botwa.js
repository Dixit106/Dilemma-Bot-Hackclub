export default function bot({ history, memory }) {

    memory = memory ?? { opStrikes: 0, state: "normal" };

    if (history.length === 0) return ["C", memory];

    const opLast = history.at(-1).opponent;
    if (opLast === "D") memory.opStrikes++;

    if (memory.state === "testing" && opLast === "D") {
        memory.state = "respect";
        return ["C", memory];
    }

     if (history.length > 1){
        const opPrev = history.at(-2).opponent;
        const myPrev = history.at(-2).you;
        if (myPrev === "D" && opPrev === "D" && opLast === "C") {
            return ["C", memory];
        }
    }

    if (opLast === "D") {
        const provoked = history.length > 1 && history.at(-2).you === "D";

        if (provoked) {
            return ["C", memory];
        }

        return ["D", memory];
    }

    if (memory.state === "farming") {
        if (opLast === "D") {
            memory.state = "respect";
            return ["C", memory];
        }
        const len = history.length;
        if (len === 23 || len === 27 || len === 53 || len === 71 || len === 89 || len === 107) {
            return ["D", memory];
        }
        return ["C", memory];
    }

    if (memory.state === "normal" && history.length === 15 && memory.opStrikes === 0) {
        memory.state = "testing";
        return ["D", memory];
    }

    if (memory.state === "testing" && opLast === "C") {
        memory.state = "farming";
    }

    return ["C", memory];
}