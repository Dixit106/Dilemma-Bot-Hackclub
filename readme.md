# Dilemma-Bot-Hackclub


# What even is this 

**Prisoner's Dilemma:**
In this game, you have to decide whether to cooperate or defect to get points. The hardest part is figuring out how the other bots will act. Here is the story of the three bots I made for the tournament.

1. **Dilemma-Bot-Hackclub**
This was my very first bot. It was simple and made by reading the starter guide and doing a little research on the "Tit-for-Tat" strategy. It performed very well on the first day with an average score of about 1.6, but that was not good enough for me.
**Link:-** https://defector.hackclub.com/bot/ffud06li3hxnz0ovmddi

2. **Mystic**
I watched some videos on Game Theory and made my next bot, Mystic. It completely failed my expectations and was actually worse than my first bot. This taught me that the environment (the other bots you play against) plays a huge role.
**Link:-** https://defector.hackclub.com/bot/ahua7qdi8a1zupwd43pm


3. **Poseidon**
After Mystic failed, I looked at the code of the best bots on the leaderboard. I found out they were using math, predictions, and really good logic. My early bots were just too simple to beat them.

So, I built Poseidon using strong logic and math (I used AI to help with the complex math parts, but I did not just copy-paste code).
**Link:-** https://defector.hackclub.com/bot/40gszsmjba20m09gprz8

# Explanation:-
1. **Poseidon Code:-**
You can see code by going to link I have provided above or you can see it on github.
**Explanation:-**
(Starting Lines):- Every Round, Poseidon will open it's notebook(memory). It remembers if it has sent "olive branches" (peace offerings), how long a mutual war has been going on (dStreak), and whether it has tested the opponent yet.


(5-Round Handshake) (Lines 20-24 aprox):- If opponent bot playes "D" on the very first turn. Poseidon have to judge if they are dumb bully or a smart bot testing my bot's reaction. Poseidon will play "C" for 5 rounds. If opponent switches to "C", great! We have understanding to be good bot. If they keep up with their "D", Poseidon stops and start's playing "D" so that opponent won't get anymore free points.

(Round 7 Poke) (Lines 31-48 aprox):- In round 7 opponent and my bot is playing only "C". Now my bot has to do a pushover check to see if they are nice but strong or nice and dumb. To check poseidon plays a sudden "D"(Poke). Then Poseidon see the reaction to get a feedback and to do so it plays "C" on round 8 and on round 8 and 9 it also see the reaction for the poke. If they hit back, Poseidon tags them as armed(conclusion:- respect them and play nice).But if opponent kept playing "C" even after our Poke(conclusion:- tag them as siphoning which means a pushover so we can get some extra points out of it).

(Harvesting) (Lines 50-57):- In a pushover case Poseidon will alternate between "D" and "C".Logic is to get extra points and without triggering the defensess of opponent bot and if defenses get activated we go back to playing "C" as a sorry.

(Maths and The Peace Treaty) (Lines 61-78 aprox):- 
The Nasty Play: Poseidon uses the getRecentState function to calculate exactly how often the opponent punishes bad behavior. If the math shows they rarely punish a "D", Poseidon turns into a bully and just defects.

If the opponent is mostly cooperative, Poseidon copies their moves. But here is the genius part: if the opponent plays "D" because Poseidon provoked them first, Poseidon forgives them and plays "C". It knows it started the fight, so it apologizes to prevent a revenge cycle.

The Olive Branch Ladder: If both bots get stuck in a "Death Spiral" of mutual destruction (D, D, D, D...), Poseidon doesn't stay stubborn forever. On rounds 4, 15, and 35 of the war, it throws out a "C" to say, "Can we stop fighting?"



2. **Mystic:-**
You can see code by going to link I have provided above or you can see it on github.
**Explanation:-**
(Peacekeeper):- Basic code is same for this as poseidon. Mystic plays standard "TIT FOR TAT" for the most part but it also see the reaction if it chooses "D" and if things don't go well it will play "C" to apologize.

(Mutual Forgiveness)(Lines 15-21 aprox):- If both bots get into a fight and play "D", but on the very next turn the opponent plays "C" to offer peace, Mystic immediately accepts the peace and plays "C" too.

(Round 15 test) (Lines 45-48 aprox):- Mystic test it's opponent on Round 15 to see if opponent is a pushover who only plays "C" or a bully which only plays "D" or a smart bot with different reaction.

(Scheduled Harvest) (Lines 33-43 aprox):- Instead of farming aggressively like Poseidon (alternating every single round), Mystic only steals points on very specific, hardcoded rounds: 23, 27, 53, 71, 89, and 107. If the opponent ever wakes up and plays "D", Mystic gets scared, switches to "respect" mode, and never tries to farm again.



2. **Dilemma-Bot-Hackclub:-**
You can see code by going to link I have provided above or you can see it on github.
**Explanation:-**
(Copycat):- return [lastOpponentMove, memory], Plays Tit-for-Tat so it just do what opponent did on last round. If opponent punch my bot punch if opponent bot is kind my bot is kind this is the basic bot in game theory which mostly Wins although environment is a big factor.

(Betrayal Count):- (memory.betryals += 1). It keeps how many times opponent betryed in it's memory.

(Lock In):- Betryal counter is used to see if opponent betryas 3 times then my Bot locks into Only "D" mode.


# The Result: 
**Poseidon performed amazingly, reaching an average score of almost 1.9. It was so strong that it actually dragged the top bot's score down from 1.9 to around 1.88! Even though my first two bots were not the best, making them played a big role in helping me learn how to make Poseidon this good.**
