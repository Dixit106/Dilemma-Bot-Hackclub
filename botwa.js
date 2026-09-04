export default function bot({ history, memory }) {

    memory = memory ?? { opStrikes: 0, weTested: false, doNotTest: false };

    if (history.length === 0) return ["C", memory];

    const opLast = history.at(-1).opponent;
    if (opLast === "D") memory.opStrikes++;

    if (memory.weTested && opLast === "D") {
        memory.weTested = false;
        memory.doNotTest = true;
        return ["C", memory];
    }

    memory.weTested = false;

    if (history.length > 1){
        const myLast = history.at(-1).you;
        const opPrev = history.at(-2).opponent;
        const myPrev = history.at(-2).you;
        if (myLast === "D" && opLast === "D" && myPrev === "D" && opPrev === "D") {
            return ["C", memory];
        }
    }

    if (opLast === "D") return ["D", memory];

    if (!memory.doNotTest && history.length % 10 === 0 && memory.opStrikes === 0) {
        memory.weTested = true;
        return ["D", memory];
    }

    return ["C", memory];
}