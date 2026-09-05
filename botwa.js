export default function bot({ history = [], memory }) {
    try {
        const t = history.length;
        const men = memory ?? {
            olivesSent: 0,
            dStreak: 0,
            probed: false,
            armed: false,
            siphoning: false,
        };
        
        if (t === 0) return ["C", mem];
        const last =history[t - 1];
        const prev = t >=2 ? history[t - 2] : null;

        mem.dStreak = (last.you === "D" && last.opponent === "D") ? mem.dStreak + 1 : 0;
        
        // bot gives D up to 5 rounds to see if opponent is conditional
        const allOurMovesC = history.every(r => r.you === "C");
        if (history[0].opponent === "D" && allOurMovesC) {
            if(last.opponent === "C" || t < 5) return ["C", mem];
        }

        //to shut down alternat moves exploit bot
        if (t >= 14 && isRigidPattern(history)) {
            return ["D", mem];
        }

        //round 7 to see TF2T & other nice and simple bots
        const oppEverD = history.some(r => r.opponent === "D");
        if (t === 7 && !oppEverD && !mem.probed) {
            return ["D", mem];
        }

        
    }

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