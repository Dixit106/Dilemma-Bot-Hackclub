export default function bot({ history, memory }) {

    memory = memory ?? { strikes: 0, exploitMode: false };

    if (history.length === 0) return ["C", memory];

    const opMove = history.at(-1).opponent;

    if (opMove === "D") memory.strikes++;

    if (memory.exploitMode) return ["D", memory];

    if (history.length === 15 && memory.strikes === 0) {
        memory.exploitMode = true;
        return ["D", memory];
    }

    const myMove = memory.strikes >= 3 ? "D" : opMove;

    return [myMove, memory];
}