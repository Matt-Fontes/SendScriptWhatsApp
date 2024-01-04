async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("There's no open conversation")
	if(textarea) console.log("Textarea found")
	
	for(const line of lines){
		console.log(line)
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
[A kingdom of snow and ice is seen in the distance. Suddenly, magma drops upon the ice. A floating castle constructed of rock and lava with a monstrous figurehead in front flies toward the ice kingdom. It drops anchor and lands, opening its gates to release an army of turtle-like Koopas. A blue-robed Koopa magician, Kamek, appears from thin air.]

KAMEK: Behold! The King of the Koopas!

[Kamek strikes his wand upon the ground, signaling the Koopa army to turn in attention as their monstrous leader, Bowser, emerges. Bowser walks toward the ice castle.]

BOWSER: Open the gates! ...Or die.

[Large shadows loom within the ice palace. The gates open to reveal an army of much smaller but still determined penguins, whose king directs them. "Battle Without Honor or Humanity" begins to play.]

PENGUIN KING: Attack!

PENGUINS: (battle cries)

[The penguins charge forward and begin pelting the Koopas with snowballs and ice chunks, to little effect. The Penguin King signals them to hold their attack. "Battle Without Honor or Humanity" stops playing.]

PENGUIN KING: That is but a taste of our fury. Do you yield?

BOWSER: (chuckles) I do not.

[Kamek magically lifts up the penguins and tosses them aside. Bowser uses his fire breath to destroy the ice castle.]

PENGUIN KING: No...

BOWSER: Oh...

[Within the castle ruins shines a bright light. Kamek levitates ice blocks for Bowser to walk up toward the light. He reaches a shining Question Block, which he breaks open to reveal the Super Star.]

BOWSER: (laughs) I've finally found it. And now, no one can stop me!

[Scene cuts to a commercial for Super Mario Bros. Plumbing. Two men appear, Mario in a red hat and shirt and Luigi in green, both with large mustaches and wearing denim overalls and white gloves. They ride in a yellow van and demonstrate their plumbing skills.]

COMMERCIAL SINGER: ♪ Uh, we're the Mario Brothers, and plumbing's our game. We're not like the others who get all the fame. When your sink is in trouble, you can call us on the double. We're faster than the others, you'll be hooked on the brothers, huh! ♪

MARIO: (Italian accent) It's-a-me, a-Mario!

LUIGI: (Italian accent) And-a Luigi!

MARIO: Are you tired of-a paying too much for plumbing?

MARIO & LUIGI: Mamma mia!

MARIO: That's-a why the Super Mario Brothers are here. To-a save Brooklyn.

LUIGI: And-a Queens...

MARIO: And-a your wallet.

COMMERCIAL ACTRESS: Thank you, Super Mario Bros.! It seems like the only thing you haven't drained is my bank account...

MARIO: Forget-a the expensive plumbing companies where you're-a just a face. With the Super Mario Brothers, you're family!

COMMERCIAL SINGER: ♪ Hooked on the brothers! ♪ (fading echoes)

[The commercial ends as the real Mario and Luigi celebrate in Punch-Out Pizzeria.]

LUIGI: (laughs)

MARIO: (Brooklyn accent) Wow! You were great.

LUIGI: (Brooklyn accent) I was great? Are you kidding me? YOU were great!

MARIO: I am so glad we spent our life savings on this commercial.

LUIGI: That is not a commercial. That is cinema.

MARIO: Eh, what about the accents? Is it... Is it too much?

[A man dressed similarly to the brothers, Giuseppe, turns to them.]

GIUSEPPE: (Italian accent) Too much? It's-a perfect! Wahoo!

MARIO: Okay, I'm gonna trust you.

[He returns to playing a Jumpman arcade game. Spike, a large bearded man in a Wrecking Crew uniform and sunglasses, speaks out.]

SPIKE: Well, well, well. If it isn't Brooklyn's favorite failures, the Stupid Mario Brothers.

LUIGI: (as he and Mario indignantly walk over to Spike) Oh great... Spike's here.

MARIO: Hey, Spike.

SPIKE: Yeah, (in a comically high-pitched voice) it's-a me! (cackles) Wooo yeah… Tell me: have you even gotten one call since you left me to start your dumb company?

LUIGI: (holds up his phone) As a matter of fact, Spike, we have.

MARIO: Wow. Really?

Luigi: Uh, Yeah. Our mom called, and she said, "Aw, boys, that's the best commercial I've ever seen." And I said, "Thank you very much, mother. We're very proud of it." So, boom! (accidentally drops his phone as Mario looks embarrassed)

SPIKE: (laughs) Good luck running a business with this idiot. (throws a napkin at Luigi, which Mario catches)

MARIO: Say that again about my brother, and you're gonna regret it. (tosses the napkin back at Spike)

SPIKE: (gets up and grabs Mario by the overalls) Oh yeah? Get this through your tiny brain, Mario! You're a joke — and you always will be. (leaves while chuckling)

LUIGI: Are you insane? He's three times your size!

MARIO: Luigi, c'mon... y'know, you can't be scared all the time.

LUIGI: Mmm, you'd be surprised...

[Luigi's cracked phone begins to ring. Luigi picks it up off the floor and answers.]

LUIGI: Hello, Super Mario Brothers. Uh-huh? A drip in your faucet? That's great! I mean, that's... That's great you called us because we can be there and we can fix it right away. Okay. Mario, We got one!

[Mario and Luigi hug and jump around.]

MARIO: (laughs)

LUIGI: The Super Mario Brothers are in business!

MARIO: Woo-hoo!

[Mario and Luigi get into their van, but it fails to start.]

LUIGI: Oh, no. We're gonna be late.

MARIO: No, we're not. Come on, let's go.

[Mario and Luigi start running through the Brooklyn neighborhood. "No Sleep till Brooklyn" begins to play.]

LUIGI: Hey, wait up!

MARIO: This way.

[Mario hits a trash can containing one alley cat from "The Secret Life of Pets", which leaps out at Luigi.]

CAT: (shrieks)

LUIGI: Ah!

MARIO: Come on, Lu. Step on it.

[Mario deftly jumps through an open cab window and around grocery store customers, while Luigi struggles with bumping into them.]

WOMAN: Excuse you!

[Luigi puts the cat into a paper bag and hands it to a grocery clerk.]

LUIGI: Here you go.

CAT: (meows)

[Mario and Luigi come to a road closed for construction.]

LUIGI: (sighs)

[Mario runs toward the construction zone.]

LUIGI: Oh, Mario, what are you doing?

[Mario and Luigi enter the construction zone, leaping on and around railings, girders and construction workers.]

CONSTRUCTION WORKER: Hey! Get offa there!

CONSTRUCTION WORKER: You can’t be in-Whoa!

LUIGI: My bad!

CONSTRUCTION WORKER: Move it up!

Luigi: Ah! I’m so sorry.

CONSTRUCTION WORKER: Hey, we’re workin' here!

LUIGI: So sorry.

[Mario makes it out of the construction zone and opens the gate for Luigi.]

MARIO: Come on, Luigi! Pump those legs.

LUIGI: (pants) Oh, I'm trying. I’m trying. I got bad knees.

["No Sleep till Brooklyn" stops playing. Mario and Luigi arrive at a towering townhouse.]

MARIO: (whistles)

LUIGI: Oh, wow. We have hit the big time.

MARIO: (chuckles)

[Inside, a couple leads Mario and Luigi up a flight of stairs.]

HOMEOWNER WOMAN: The drip is right upstairs at the end of the hall.

HOMEOWNER MAN: Can you fix it?

MARIO: Very confident, sir.

HOMEOWNER WOMAN: You'll be careful about makin' a mess?

LUIGI: Ma'am, I assure you; We don't make messes, we fix them. (laughs, gasps)

[A large dog, Francis, sits in the upstairs hallway.]

HOMEOWNER WOMAN: That's Francis. (gasps) He likes you!

[Francis licks the woman's face. Luigi walks by and steps on something.]

LUIGI: (gasp)

[Luigi lifts his foot off a broken chew bone. Francis stares at him.]

LUIGI: (nervous chuckle) Hey…

[Luigi continues walking to the bathroom. Francis glares at him while licking he woman's face.]

FRANCIS: (growls)

HOMEOWNER WOMAN: (baby talk) Mama, mama, mama love ya, baby!

MARIO: (chuckles)

[Mario pulls Luigi into the bathroom. They begin to examine the dripping sink, Luigi getting sprayed by water in the process.]

MARIO: Wrench?

[Mario uses two wrenches to tighten the pipes, stopping the leak.]

MARIO: Mm-hmm. And our first job complete.

[Mario and Luigi do a clapping ritual.]

MARIO & LUIGI: Ay!

[As they begin to leave, they see Francis sitting in the bathroom doorway.]

MARIO & LUIGI: (shriek)

LUIGI: Francis is here.

[Francis spits the broken bone at them, enters and kicks the door shut behind him.]

FRANCIS: (growls)

LUIGI: Hey there, pal. (chuckles nervously)

[Francis lunges at them and hits the sink. Mario falls into the shower while Francis turns toward Luigi.]

LUIGI: (screams) Mario, Do something!

[Mario throws a shampoo bottle at Francis, who turns and bites at him. Mario dodges and backflips over Francis.]

MARIO: (slow motion) Mamma mia!

[Mario closes the shower door, trapping Francis inside.]

MARIO: (relieved sigh)

LUIGI: Uh, Mario?

[The pipes in the sink, as well as those throughout the bathroom, begin to burst. The water jets out from various points that Mario and Luigi attempt to plug up. "L'Amour Est Un Oiseau Rebelle (Habanera)" begins to play]

MARIO: (cries out, grunts)

LUIGI: Ah! (grunts)

[Water fills the shower and Francis begins to float to the top.]

LUIGI: (shrieks) That hellhound is gonna escape!

MARIO: No, he won't.

[Mario wrenches a valve connected to the toilet and flushes it, causing the flooding water to drain.]

MARIO: (relieved sigh)

LUIGI: Hey, uh... Mario?

[Francis has reached the top of the shower and prepares to jump.]

MARIO: Uh... Who's a good puppy? (nervous laugh) Who's a good boy?

[Francis leaps toward Mario and Luigi.]

FRANCIS: (snarling)

MARIO & LUIGI: (scream)

[Mario and Luigi duck as Francis sails over them and out the window. "L'Amour Est Un Oiseau Rebelle (Habanera)" stops playing. The homeowner couple sit in their living room as outside their window, Mario and Luigi catch Francis with a plunger.]

HOMEOWNER WOMAN & HOMEOWNER MAN: Hm? Hm.

MARIO & LUIGI: (grunting)

["L'Amour Est Un Oiseau Rebelle (Habanera)" stops playing. Mario and Luigi manage to pull Francis back into the bathroom. The homeowner couple enter.]

HOMEOWNER WOMAN & HOMEOWNER MAN: (gasp)

[Luigi attempts to put the sink back in place while Mario pulls Francis out of the toilet.]

MARIO: Found the problem.

FRANCIS: (barks weakly)

[Arriving home, Mario and Luigi hang up their hats as their family talks in the dining room]

UNCLE ARTHUR: Ma, did you make these?

MARIO & LUIGI'S MOTHER: Ah, good batch, eh?

UNCLE ARTHUR: Why don’t you make it like this?

[Mario and Luigi enter their family's dining room.]

MARIO & LUIGI'S FAMILY: Hey-yo!

MARIO & LUIGI: Hey-yo!

UNCLE TONY: Oh-ho, it's the Super Mario Brothers from the TV.

[Uncle Tony, Uncle Arthur, and Grandpa laugh]

UNCLE ARTHUR: They give an Oscar for worst actors?

AUNT MARIE: Hey! (smacks him in the head)

UNCLE ARTHUR: What'd I do?

MARIO: (chuckles) So, uh... So everybody saw the commercial, then?

UNCLE TONY: Uh-huh. We seen it. (winks to Uncle Arthur)

MARIO: And?

UNCLE ARTHUR: I wouldn't quit your day job.

UNCLE TONY: Oops! He already did.

[Uncle Tony, Uncle Arthur and Mario and Luigi's grandfather laugh again]

MARIO & LUIGI'S MOTHER: Well, I thought it was incredible. It belongs in a movie theater.

[Mario and Luigi's dad puts spaghetti with mushrooms onto Mario's plate.]

MARIO: Ugh, mushrooms?

MARIO & LUIGI'S FATHER: Everybody loves mushrooms, right?

LUIGI: I like mushrooms, I'll take it.

MARIO & LUIGI'S FATHER: (laughs) Yeah.

UNCLE TONY: Mario, seriously. What were your thinkin' with that commercial?

[Mario begins placing his mushrooms onto Luigi's plate.]

MARIO: (as he places mushrooms on Luigi's plate) What? It's supposed to be funny.

LUIGI: Can someone pass the bread?

UNCLE TONY: Yeah, but... What's with the outfits? Plumbers wearin' white gloves?

MARIO: That's right. You gotta have a trademark. Gotta stand out.

MARIO & LUIGI'S MOTHER: Don't listen to them. The world laughed at Da Vinci, too.

LUIGI: Mm, I'm not sure they did, Ma.

MARIO: Dad... What did you think?

MARIO & LUIGI'S FATHER: I think you're nuts. You don't leave a steady job for some crazy dream. And the worst part? You're bringing your brother down with you.

MARIO: (grimly) Well, thanks, Dad. (leaves the table) Thanks for your 'support'.

[The family looks at Mario and Luigi's dad with disapproval.]

MARIO & LUIGI'S FATHER: What'd I say?

[Mario sits in his room playing Kid Icarus. After losing, he turns on the news.]

NEWS REPORTER: Thanks for tuning in to News Channel 4...

[Luigi enters, bringing Mario a plate of spaghetti.]

LUIGI: Hey. (sits besides him) Nah, you're not bringing me down. You know what? What do they know, huh?

MARIO: It's not just them. Our whole lives, everyone's telling us, 'We can't do this', 'We can't do that'. I'm just sick and tired of feelin' so small...

[The news catches Mario's attention.]

NEWS REPORTER: A water main burst underground today, stopping subway service and flooding Downtown Brooklyn.

[Mario turns up the volume as the news report shows the water main spilling water onto the street. The mayor, Pauline, speaks with reporters.]

PAULINE: Everything is under control, I promise you. We are very close to fixing this.

[A citizen runs in, shakes Pauline and grabs a reporter's microphone as a manhole cover shoots high into the air.]

CITIZEN: Out of the way!

OTHER CITIZEN: Go back!

CITIZEN: Somebody help! Somebody save Brooklyn!

MARIO: "Save Brooklyn"? Luigi, this is our chance! Destiny is calling!

LUIGI: Destiny Del Vecchio from high school?

MARIO: What? No! Just come on!

[Mario pulls Luigi out of the room after he puts down the plate of spaghetti.]

LUIGI: (cries out)

[Downtown, construction workers investigate the flooding as Mario and Luigi arrive.]

CONSTRUCTION WORKERS: (yelling)

CONSTRUCTION WORKER: It’s more than the storm drains can handle!

CONSTRUCTION WORKER: Come on, we gotta pump it!

[One worker attempts to hold a manhole cover over the leak, but is sent shooting upward by the spray.]

CONSTRUCTION WORKER: I got this. (shrieks)

MARIO: (chuckles) They're not even looking in the right place. C'mon, Lu.

[Mario finds another manhole cover and lifts it up with a crowbar.]

MARIO: (grunts)

[The water drains into the open manhole.]

LUIGI: You are not seriously considering--

MARIO: (breathes in)

[Mario jumps into the draining water.]

LUIGI: Mario! (cries out, laughs nervously, breathes in, screams, coughs)

[Inside the sewers, the brothers wade toward their destination]

MARIO: We gotta get to that pressure valve!

LUIGI: Mamma mia!

[Mario and Luigi climb across the pipe, as Mario tries to turn the valve, it snaps off]

MARIO: Uh…

[The pipe snaps off too and the brothers hang on to it until they crash into a brick wall]

LUIGI: I knew saving Brooklyn was a bad idea.

MARIO: Come on. (helps Luigi up, and notices something) Whoa! What is this place?

[Mario and Luigi look down and see they're in a utility tunnel, and go explore it, Luigi notices the mysterious Warp Pipe]

MARIO: Looks like nobody's been down here for years. (hears a noise) Luigi? (goes into the pipe) Luigi, are you in there? (picks up the wrench Luigi drops) Luigi! (The wrench is pulled further into the pipe, disappearing from sight) What?

[Mario notices that he's being pulled into the pipe as well, screaming as this happens, now he's in the Warp Zone, being carried along a series of clear passageways moving through brightly colored clouds.]

MARIO: (gasps) Wow! (hears Luigi screaming) Luigi!

LUIGI: Mario!

MARIO: (goes towards him) Gimme your hand!

[Mario and Luigi reach out, grab each other's hands and begin spinning.]

MARIO: It's all gonna be okay!

LUIGI: How is this gonna be okay?

MARIO: I'm telling you, Nothing can hurt us as long as we're together.

[Luigi is pulled away from Mario and enters a lava-covered portal.]

LUIGI: (cries out) Mario!

MARIO: Luigi!

[Mario is ejected from the pipe, lands on a giant mushroom and tumbles to the grass-covered ground.]

MARIO: (shouts, groans)

[Mario gets up and looks in amazement.]

MARIO: (gasps softly)

[Mario stares in awe at the Mushroom Forest. He then approaches a blue mushroom, only for Toad to suddenly pop up, causing Mario to scream and stumble back.]

TOAD: Do not touch that mushroom, You'll die! Oh, I'm sorry. (chuckles) That one's perfectly fine.

[Toad pats the blue mushroom. Mario backs away along the ground.]

MARIO: Th-that’s a little mushroom m-man. A little mushroom man talking to me.

TOAD: Pleased to meet ya. I'm Toad. (walks off)

MARIO: Uhh... Mario. ( gets up and follows Toad.) So this is, uh... This is, this is not a dream?

[Toad whacks Mario's arm with his walking stick, causing him to exclaim in pain]

TOAD: That hurt, right?

MARIO: Yes!

TOAD: Definitely not a dream.

MARIO: Then, it's... This place is...

TOAD: The Mushroom Kingdom!

MARIO: Mushrooms... really? Now that is a cruel twist of fate. (Suddenly, he hears something. He turns around and spots a Bramball stooping over his head.) ...Hello. (The Bramball continues walking.) Yeah, I'm actually looking for somebody, uh, my brother, in fact. He looks exactly like me, but tall, and skinny, and green. See, last time I saw him, he-he was falling through a pipe. It was foggy and-and I believe there was lava...

TOAD: (gasps) Uh, that... is not good. Umm... Your brother has landed in the Dark Lands. They're under… (whispers) Bowser's… (normal) control.

MARIO: Bowser?

TOAD: He's the most evil, wretched creature alive.

[Toad sticks his walking stick into a mushroom and pulls himself and Mario up.]

TOAD: I'm taking you to see the princess. She can help you. She can do anything.

MARIO: Princess? (gasps)

[In the distance, Mario sees a magnificent white and red castle surrounded by a large town.]

TOAD: Come on, Mario! Our big adventure begins now!

MARIO: Hang on, Luigi.

[Mario and Toad jump across mushrooms toward the castle. Scene cuts to a dark forest, where Luigi pulls himself up off the ground.]

LUIGI: (groans, gets the bag of tools) Mario? Mario? Where are you? Huh? (a branch snags him, then stumbles near a lava stream but runs across, he bumps into a tree, then gets attack by bats, grabs his flashlight then continues, he hears something, then sees and gets attacked by a Dry Bones, he hits a branch and flies toward the Dry Bones dismantling him) Oh. (notices the dismantled Dry Bones) Ha, ha! Yes! You just got a-Luigi'd! (Dry Bones gets reassembled as more arrive to get Luigi, Luigi escapes into a fortress, Just when he thought he was safe, a group of Shy Guys and a Snifit stands in the shadows, Luigi screams in the dark)

[Mario and Toad arrive at the Mushroom Kingdom's town of Toads.]

TOAD: This way, Mario! The princess lives right on that hill! (leads Mario through the city) Excuse me, everybody, coming through. Got a big adventure happening right now. Just clear a path for us. If I could just... Excuse me...

MARIO: Here you go.

TOAD: (loudly) Excuse me, everybody, coming through! This guy's brother is going to die imminently! Out of the way, please! (normally, to Mario) Just trying to clear a path. That's all I'm doing. He's gonna be fine. Chanterelle!

CHANTERELLE: Morning!

TOAD: Nice to see ya, bud! (clicks)

YELLOW TOAD: Does this thing work?

ANTIQUES TOAD: Yes, works great. Eh, you just have to blow into it.

TOAD: And, up we go.

MARIO: Wait, up? (grunts)

[Mario quickly gets on the platform, which takes them up. The gate opens in front of them, Mario follows Toad on a moving platform. Toad hops onto the next platform, Mario missed the jump but grabbed onto the edge. Mario gets up and breaths heavily, before running after Toad. Toad continues running through the kingdom, and whistles to Mario, who was waving at a toad, to get his attention. Mario gets of the rising platform and follows him onto bricks that float above. Mario tries not to fall]

MARIO: (pants) Whoa! Okay, so these bricks are just floatin' here? Uh...

TOAD: Just pop in this pipe and we're on our way!

MARIO: Oh.

TOAD: It's the only way to fly, man. (laughs) Woo!

MARIO: Oh, wow! Love these pipes-- (yelps)

(Mario gets sucked into it. He yells as he gets dragged across, hitting every corner, while Toad was having a smooth ride)

TOAD: Woo!

MARIO: (grunts)

[Toad gets out of the pipe and jumps in another. Mario comes out next but gets confused on which pipe Toad took. He gets in the wrong pipe and comes out of another.]

MARIO: Huh?

[He tries other pipes but repeatedly ends up in the same place. The camera zooms out to see even more pipes]

MARIO: Ah, come on!

(Mario finally comes out of the correct pipe at the top of the hill. He looks completely worn out)

MARIO: Ohh... (tumbles onto the ground)

TOAD: Here we are. Palace doors. Bing bang boom! (Mario gets up, and straightens his hat while staring in awe at the Castle) Come on! (laughs) Woo!

MARIO: (quietly) Whoa. (He follows Toad to the castle entrance)

TOAD: Pretty impressive, am I right? (The two get stopped by two guards at the palace doors)

BLUE TOAD GUARD: Hold it right there, you two!

MARIO: Oh, hey. I need to see... the princess. It's an emergency.

BLUE TOAD GUARD: (beat) What princess?

YELLOW TOAD GUARD: I've never heard of any princess.

BLUE TOAD GUARD: Oh, wait, I did. Our princess, though, is in another castle.

YELLOW TOAD GUARD: Oh, yeah, that's right.

BLUE TOAD GUARD: You should try another castle, maybe. She ain't in this one.

MARIO: Huh?

TOAD: Okay, so they're messing with you. And... I don't like it. (takes out his frying pan, screaming a battle cry, places his camping equipment down, and makes food for them, much to Mario's confusion) What do you guys, um... What do you wanna eat? Anything, anything your hearts desire. (whispers to Mario) Go! (to the guards) I am ready to scramble it up. (Mario sneaks in through the palace doors. He stops to notice some more guards)

TOAD GUARDS: (laughing)

[Mario pretends to be stoic and salutes the guards while walking by them; the guards salute him back. But just as he drops the look and runs, the guards realize there's an intruder and start chasing Mario.]

PURPLE TOAD GUARD: (gasp)

GREEN TOAD GUARD: Hey! Intruder!

MARIO: (panting)

GREEN TOAD GUARD: Stop him!

TOAD GUARDS: Intruder! Stop him! Stop him! Now! Stop him!

[In a large room, a council of Toads are gathered around a hologram that opens from the ground. The hologram shows a world map, displaying all the islands, including Bowser's ship]

TOAD GENERAL: Council, your attention. Bowser has found the Super Star and is headed toward our kingdom. Its power will make him invincible. We will be destroyed.

[All the toads gasp, a green toad faints.]

YELLOW COUNCIL TOAD: Princess, What are we gonna do?

PEACH: I will not let him hurt you. (Gets off her throne and walk down the stairs) We are going to stop Bowser.

YELLOW COUNCIL TOAD: How? Look at us. We're adorable. (makes a puppy face, followed by others)

PEACH: I'm going to convince the great Kong army to help us. Together, we'll annihilate that monster.

TOAD GENERAL: Their mad king doesn't make alliances. The Kongs will never agree.

PEACH: I can convince him. I'll leave for the Jungle Kingdom in the morning. (leaves the room)

TOAD GENERAL: Good luck, princess. For all our sakes.

[Princess Peach walks through the halls, thinking to herself, until she hears foot steps. From her point of view, Mario appears, making another sloppy turn, and dashes towards her. Everything goes in slow-motion as Mario becomes glad to have found her. Peach stares at him in awe]

MARIO: (slow motion, reaches out his hand) Princess! (He is suddenly flipped onto his back by Peach; normal ) Princess! Hi- (Several Toad guards restrain Mario, causing him to scream and cry in agony.)

PEACH: Wait! Release him.

(The guards back away from him, before one of them gives him another kick)

MARIO: Ah! (gets up from the ground)

PEACH: Whoa... (looks closely at Mario) Are you...? (gasps) He's a human! I mean, you are a human, right? (starts inspecting him) It's just, you're so small and... (looks under the hat)

MARIO: (tries reaching for it) Hey!

PEACH: Wait, wait, wait. L-Let's go back. (places the hat on his head incorrectly) Where did you come from?

MARIO: (stammers, fixes his hat) Uh, me and my little brother, Luigi... we-we fell down this pipe, and now he's lost... s-somewhere in the Dark Lands!

PEACH: Then it's only a matter of time until he's captured by Bowser. But you're in luck — I'm on my way to stop him.

MARIO: Well, take me with you.

PEACH: This guy's a lunatic. A psycho. He will eat you for breakfast. He won't even notice it probably because you're very, very small.

MARIO: You know what? Make fun of me all you want. But you are gonna help me find my brother! (Princess Peach gives a stern look) ...Please?

PEACH: (expression changes) Well, okay. Let's see what you're made of. (walks off)

MARIO: Is that a "yes"? (follows Peach)

PEACH: No. That's a "Let's see what you're made of."

[Princess Peach leads Mario to the balcony where it floats over to a middle of a lake, where a giant ? block appears, and as it opens, the Training Course appears, filled with many replicas of items appearing in the game]

PEACH: If you can finish this, you're coming with me. Watch and learn. (goes through the Training Course, kicks a cardboard Bowser) Hi-yah! (Finishes the Training Course without any issue)

MARIO: That was amazing. Wait... How-how am I supposed to do that?

PEACH: With the power-ups. They give us special abilities.

[Peach hits a ? Block with a Super Mushroom inside. It lands on Mario's hands]

MARIO: Ugh! Really?

PEACH: Go on. Eat it.

MARIO: Ugh... (brings the mushroom up to his mouth trying to eat it.) Now this has to be a mushroom? 'Cause I just...hate mushrooms, and... (Peach glares at Mario.) Okay, okay. (determined grunt; Mario again brings the mushroom up to his mouth.) Are you sure there's not like a--

PEACH: (grabs the Super Mushroom and force-feeds Mario) Down the hatch!

MARIO: (huffs) Ow!

PEACH: Yup, there it is and all gone.

MARIO: (gags, huffs) Oh, not cool! Uh... (Mario's body begins to shimmer) Huh? (Mario's hand suddenly grows large and hits him in the nose) Oh! (Mario's feet grow as well) Whoa! (The rest of Mario's body grows, retaining his proportions but now standing as tall as Peach.)

MARIO: Whoa! I'm tall.

PEACH: And strong. (Mario jumps and breaks a Brick Block) And you can jump.

MARIO: (chuckles) Oh, I got this. No problem. (runs onto the Training Course and jumps) Woo-hoo! (Suddenly, he falls, crashing into multiple brick platforms and landing in the water. A Warp Pipe pulls him back to the platform.)

PEACH: Oh, yeah... When you get hit, you...lose the power. (hits the ? Block again, producing another Super Mushroom)

MARIO: Great. (With a sigh, Mario eats the Super Mushroom and becomes big again)

PEACH: Come on. Try again.

["Holding Out for a Hero" plays, Mario tries again but hits a block]

PEACH: (winces) Ooh…

[Mario gets hit by a fake Fire Bar after attempting to dodge it, then misses a moving Lift, jumps and falls off the Lift, then gets past it the third time]

MARIO: Yes! (stands on the Donut Block for too long and falls while screaming)

PEACH: (groans while faceplanting on the platform railing)

[Mario fails the Training Course repeatedly, regurgitating a Super Mushroom at one point. The scene cuts to morning and Mario almost finishes the Training Course, Peach wakes up and sees Mario jumping on several fake Bomber Bills to the Goal Pole, Peach watches in excitement, Mario poses and smiles at Peach, but gets chomped by a fake Piranha Plant before he can reach the Goal Pole]

PEACH: Well... We have a long journey ahead of us, moustache.

MARIO: But I didn't make it.

PEACH: You almost did. No one gets it right away.

MARIO: How many tries did it take you?

PEACH: Oh! (chuckles) So many. I was not good at it. Worse than you. (grin)

MARIO: (not buying it) You got it right away, didn't you?

PEACH: I got it right away, but I grew up here.

MARIO: Okay, now you're just trying to make me feel better.

PEACH: No, No... Is it working?

MARIO: A little bit, yeah.

[Scene cuts to Bowser's castle, where the various minions are celebrating and a Koopa rock band is performing "Attack! Fury Bowser".]

BOWSER: My army! Koopas...

KOOPAS: Yeah!

BOWSER: Goombas...

GOOMBAS: (snarling)

BOWSER: Whatever those things are.

SPINYS: (dejected sighs)

BOWSER: After years of searching for the Super Star, it is finally ours!

BOWSER'S ARMY: Yeah!

BOWSER: I am now the most powerful turtle in the world!

BOWSER'S ARMY: YEAH!!

BOWSER: Soon, we will arrive at the Mushroom Kingdom.

BOWSER'S ARMY: YEAH!!!

BOWSER: Where after years of being sworn enemies... I will ask their princess to marry me in a fairy tale wedding!

BOWSER'S ARMY: YEA-

[The troops pause in place and the rock band stops playing]

KOOPA BAND LEAD: Uh…

KOOPA TROOPA WITH SPEAR: Yeah...

KOOPA: Did he say 'marry...their princess'?

MINION: (distant) Doesn't she hate you?

BOWSER: Of course she hates me. But that makes me love her all the more. Her heart-shaped bangs, the way she floats in the breeze, her immovable tiara... And when she sees this Star... Oh ho ho ho. WEDDING BELLS!

KOOPA TROOPA WITH SPEAR: Well, what if she says no?

[The speaking Koopa is engulfed in Bowser's flame and turns into a Dry Bones.]

BOWSER: Then I will power up with this star and destroy the Mushroom Kingdom!

[Koopa rock band continues playing again]

BOWSER'S ARMY: YEAH!!!

BOWSER: Prepare yourselves for the best wedding ever. It's gonna rock!

[The scene transcends to the Dark Lands where Luigi gets captured by Shy Guys and a Snifit, they take Luigi to a hot air balloon. During the flight, Luigi remembers his childhood where he is frightened by a bully then Mario (as a baby) stops him. The scene again cuts to Peach's castle. Horns play a fanfare as Mario and Peach exit the castle to a crowd of Toads.]

MARIO: (gasps)

TOADS: (cheering)

PEACH: They're all counting on us. No pressure.

[Mario and Peach pass through the crowd, who give Mario curious looks.]

TOADS: (cheering) Huh?

MARIO: (nervous chuckle)

[Mario and Peach stand next to the Warp Pipe.]

PEACH: My Toads! Our days of terror are almost over. With the help of the Kong army, we will stop--

[A blue Toad raises his hand, causing Peach to stop mid-movement.]

BLUE TOAD: Uh... Who's he?

MARIO: (nervous chuckle)

PEACH: (beat) He's not important!

[The Toads start cheering again as Peach enters the pipe. Mario weakly waves goodbye and is also pulled in. They both start walking through the Mushroom Forest.]

PEACH: Nervous?

MARIO: Who, me? (scoffs) Yes. A little.

PEACH: (giggles)

[Toad dances up behind them.]

TOAD: ♪ We're goin' on an adventure! ♪ (normal) Come on, guys! (scatting) Hey, Mario.

[Peach turns to Mario.]

PEACH: You know this guy?

MARIO: Uh--

TOAD: We're best friends.

MARIO: But are we?

[Toad hold up his finger to Mario and turns to Peach.]

TOAD: Don't worry. (emphatically) I...will...protect you.

PEACH: A Toad brave enough to join me.

TOAD: I fear nothing.

PEACH: Well that settles it. You're coming with us. Let's move.

[Peach and Mario run off. Toad grabs a Biddybud and spins it around.]

TOAD: Ha-ha-ha! ♪ I said we're goin' on an adventure, woo! ♪

[Toad tosses the Biddybud behind him and runs after Peach and Mario.]

BIDDYBUD: (squeals)

[Mario, Peach and Toad travel through various lands. They end up looking over a mist-covered mountain range.]

PEACH: Pretty incredible, huh?

MARIO: Mamma mia.

PEACH: I'll never let anyone ruin this.

[Stars appear as Bowser plays a piano on a floating rock platform.]


♪ Peach

♪ You're so cool

♪ And with my star, we're gonna rule

♪ Peach, understand

♪ I'm gonna love you 'til the very end

♪ Peaches, Peaches, Peaches, Peaches, Peaches

♪ Peaches, Peaches, Peaches, Peaches, Peaches

♪ I love you

♪ Oh-oh

♪ Peaches

♪ Peaches---

[Kamek teleports in.]

KAMEK: Sire?

BOWSER: (breathes in) What?

KAMEK: A report from our intelligence. A mustachioed human has arrived in the Mushroom Kingdom. (Bowser huffs in anger) The princess has been training him. They are up to something, sire!

[Bowser sits in silence, then pats the bench seat next to him.]

BOWSER: Sit. Jam with me. (Bowser plays the Underground Theme while Kamek plays the Coin sound effect) This, uh, human. Where did he come from?

KAMEK: We...aren't sure?

BOWSER: Does the princess...like him?

KAMEK: (gasps) Sire! Look in the mirror! You have nothing to worry about.

BOWSER: I know that. I'm not threatened. (promptly slams the piano lid on Kamek's fingers, causing Kamek to scream in pain) FIND OUT WHO HE IS AND WHAT THEY’RE PLANNING!!!

KAMEK: (whimpering) I'm on it, sire! May I lift the cover?

BOWSER: Not yet, pain is the best teacher!

KAMEK: (whines)

[Scene cuts to the Fire Flower Fields, a field of glowing Fire Flowers surrounding a large tree. Peach and Toad set up camp while Mario sits forlornly.]

MARIO: (sighs)

PEACH: Thinking about your brother?

MARIO: We've never been apart this long.

PEACH: Don't worry. We're going to save him. (Mario beams. Peach touches a Fire Flower and transforms into Fire Peach. She sets up a campfire with a fireball.)

MARIO: (puts his hat on) You don't seem like you're from here.

PEACH: I don't know where I'm from.

MARIO: Really?

PEACH: Yep. My earliest memory is arriving. (flashback of Peach as a baby coming out of a Warp Pipe) I was so lucky they found me. They took me in, (flashbacks of Peach growing up with the Toads) raised me like one of their own, and, when I was ready, (the Toad General puts a crown on her head) They made me their princess. (end of flashback)

MARIO: Hey, maybe you're from my world.

PEACH: There's a huge universe out there...with a lot of galaxies.

[Mario and Peach look at the sky as Toad plays a flute; the scene cuts to inside Bowser's castle, where Luigi is led in front of Bowser's throne.]

SNIFIT: We found him in the Dark Lands.

BOWSER: (growls)

LUIGI: (yelps)

BOWSER: Leave him to me. (Kamek undoes Luigi's restraints with his magic and forces him to Bowser.) What is your name?

LUIGI: Uh... Luigi. (shudders)

BOWSER: Not sure if you know who I am, but I'm about to marry a princess and rule the world. (he sharpens the claws on his hands a little in front of Luigi)

LUIGI: Wow, uh… (chuckles, flatly) Yay...

BOWSER: But there's one problem, Luigi: there's a human traveling with my fiancée. Has a mustache, just like you. Do you know him...?

LUIGI: (stammers) No! No!

BOWSER: Ah, a tough one, I see. Maybe this will get you to talk. (Pulls on a strand of Luigi's mustache)

LUIGI: (sharp gasp, panting, rapidly) Do you think I know every human being with a mustache wearing an identical outfit with a hat with the letter of his first name on it? Because I don't.

[Bowser pulls out the hair.]

LUIGI: (shriek)

[Bowser grabs Luigi and tugs on his whole mustache.]

BOWSER: DO YOU KNOW HIM?!

LUIGI: Gah! STOP, STOP, STOP, STOP, STOP! I know him. Yes, I know him. Yeah, he's my brother, Mario, and he's the best guy in the world. (starts crying)

BOWSER: Do princesses find him attractive?

LUIGI: They do if they have good taste. (Bowser furiously yanks a chunk of Luigi's mustache, causing him to shriek in agony)

BOWSER: Get him outta my sight! (tosses Luigi aside) We'll see how tough this Mario is when he watches me kill his brother!

[Luigi, now trapped in a cage, is dropped down into a dungeon where other prisoners hang suspended over a pool of lava.]

LUIGI: (screams, pants, whimpers, quavers) Where am I?

LUMALEE: (laughs)

LUIGI: (gasps)

[In another cage, a blue star creature, Lumalee, spins the cage around.]

LUMALEE: Home.

[The Penguin King sits in yet another cage with two other penguins.]

PENGUIN KING: Pay him no heed. He is cute, but he is... (cuckoo whistle)

LUMALEE: In an insane world, it is the sane who is called crazy.

[Lumalee pulls out a pinwheel and blows it. The propeller pops off and floats away.]

LUIGI: How long you guys been in here?

[Lumalee begins swinging the cage back and forth.]

LUMALEE: Time, like hope, is an illusion.

PENGUIN KING: Please! We are depressed enough!

LUIGI: There's gotta be a way outta here.

LUMALEE: There is no escape. The only hope is the sweet relief of death.

[The prisoners moan in agony]

PENGUIN KING: Oh, you've got to be kidding me.

LUIGI: (groans)

[Scene cuts to Mario, Peach and Toad approaching the Jungle Kingdom gates.]

PEACH: You ready?

MARIO: Eh...sure.

[Peach knocks the door, door opens then a Kong roars, causing Mario and Toad to scream in fear, and Peach to lean back]

TOAD: (quietly) What?

MARIO: How you doin'?

PEACH: We are here to see the king.

SPORTS COAT KONG: (snorts) Follow me.

MARIO: That gorilla's wearin' a sports coat.

TOAD: Feel underdressed. (chuckles)

["Take on Me" begins to play, as the Kong prepares his kart]

SPORTS COAT KONG: Hop in.

[Mario, Peach and Toad get in the kart, and are driven through the Jungle Kingdom]

TOAD: Whoo!

[They are driven to a mountain palace. Inside, Kong soldiers line the hallway leading to the throne of Cranky Kong; "Take on Me" stops playing]

CRANKY KONG: Oh, by all means, come in.

PEACH: Great and mighty Cranky Kong

CRANKY KONG: So, I heard you want my army.

PEACH: Yes, your Highness. Without your help, the Mushroom Kingdom will be annihilated.

CRANKY KONG: What makes you think you're worthy of fighting alongside the greatest army in the world?

PEACH: Because we have heart. And with your strength... we can win.

CRANKY KONG: Okay, fine.

PEACH: That's it?

CRANKY KONG: No, that's not it. The answer is no. Goodbye.

PEACH: If the Mushroom Kingdom falls, the Jungle Kingdom is next!

MARIO: We're not leavin'... without YOUR ARMY!

CRANKY KONG: (beat, laughs) Who is this guy? Oh, he makes me laugh! (laughs) All right, tough guy... You want my army so badly? Defeat my son, in the Great Ring of Kong!

PEACH: Give us a second. (pulls Mario aside, whispers) This is a really, really bad idea!

MARIO: (whispering) Well, do you have another way to save my brother?

[Cranky Kong steps in between them.]

CRANKY KONG: Are you two done whispering? It's a little rude.

MARIO: You, sir, have a deal. I'll fight your son and WIN!

CRANKY KONG: I'm sure you will. (laughs)

[Cranky Kong is lifted onto a motorcycle by his guards and drives off as Mario glares at him. Scene cuts to Mario walking down a dark corridor.]

MARIO: (exhales)

[Mario enters the ring, full of cheering Kongs, who then boo at Mario's presence. Suddenly, Donkey Kong emerges, much to the adoration of the crowd. The "DK Rap" begins to play. He crushes two barrels that come out of nowhere.]

DONKEY KONG: (rhythmically) I'm DK! I'm Donkey Kong!

FANGIRL KONG: YEAH! WE LOVE YOU!

DONKEY KONG: Oh, yeah! (waving to Cranky) Hi, Dad! Hi!

CRANKY KONG: (embarrassed) No, don't... Don't do that!

DONKEY KONG: (dancing) Dad, wave back.

CRANKY KONG: Enough with the showboating!

DONKEY KONG: What do you mean?! They like it! It's what they came here for! Dancing pecs! (does a pec flex as the crowd continues to cheer wildly)

CRANKY KONG: Okay, simmer down. (The crowd continues to chant) I said, "SIMMER DOWN!" (The crowd except Diddy Kong stops cheering)

DIDDY KONG: DK! DK! DK!

CRANKY KONG: That means you, Diddy Kong!

DIDDY KONG: D-- Sorry.

CRANKY KONG: Now, since I want this fight to last more than five seconds, I put power-ups around the arena. You're welcome, Mario.

DONKEY KONG: I don't need anything special to break every bone in your tiny body!

DONKEY KONG: (growls as the crowd cheers again)

MARIO: (laughs nervously then exhales) Alright.

[Mario charges at Donkey Kong as the crowd roars. Suddenly, Mario is slammed on the girder and slapped repeatedly. Peach and Toad cringe.]

PEACH: Oh!

TOAD: Oh, my-- Okay.

CRANKY KONG: Guess you're not getting my army.

DONKEY KONG: Is this what you came for?!

FANBOY KONG: WE LOVE YOU DK!!!! (sobs)

DONKEY KONG: Hi, Dad! Love you!

DONKEY KONG: It is on like Donkey Kong!

MARIO: [gets a Mini Mushroom, which lands on his hand] You're about to pick on someone your own size. [eats it, and the audience gasps] YEA-! [shrinks] Oh…

CRANKY KONG: I guess he got the wrong mushroom.

DONKEY KONG: (laughs)

MARIO: (chuckles nervously, then starts running screaming)

[Donkey Kong starts trying to smash Mario with his fists, then slams him into the air]

MARIO: Whoa!

[Donkey Kong catches Mario, flicks him at the door, returning him to normal, then starts rapidly rolling towards Mario]

PEACH: Get up, Mario!

[Mario gets up and dodges Donkey Kong. As the fight continues, Donkey Kong continues to beat down Mario to near-exhaustion]

DONKEY KONG: Had enough?

MARIO: Not...even...close.

[Donkey Kong uppercuts Mario in an attempt to finish him off. The scene slows down]

PEACH: (slowed) Mario!

MARIO: (slowed) It's-a-me...

PEACH: (slowed) The box!

(Mario grabs and climbs a ledge, then hits a ? Block. He gets the Super Bell)

KONGS: Awww!

TOAD: He looks adorable.

PEACH: (chuckles) He really does.

MARIO: Oh, wha-- I'm a cat?

DONKEY KONG: (Laughs) You got the cat box! Oh, my-- Ah! Oh, I'm sorry... I'm sorry. Okay... Now you die.

[Mario uses his new cat reflexes to dodge a punch from Donkey Kong]

MARIO: I'm a cat!

[After dodging a series of blows from Donkey Kong, Mario counterattacks and scratches him]

MARIO: Meow.

[Donkey Kong gives Mario a weird look before continuing to fight him. Donkey Kong continues to struggle against Cat Mario]

TOAD: Woo-hoo!

[Mario claw-dives Donkey Kong, breaking several floors]

MARIO: Had enough?

DONKEY KONG: Not...even...close.

[Donkey Kong begins to topple back into space, but Mario grabs him by the tie.]

MARIO: I'll take that as a yes.

[Donkey Kong falls forward and Mario leaps onto him. The crowd cheers for Mario.]

KONGS: Mario! Mario!

TOAD: Yes! That's my best friend!

KONGS: Mario! Mario! Mario! Mario! Mario!

[Peach smirks at Cranky Kong.]

CRANKY KONG: Yeah, yeah...

[Cranky Kong returns the grin.]

KONGS: Mario! Mario!

[Later, Peach gives Mario an ice pack for his bruises.]

PEACH: That was incredible! He kept beating you senseless… (lightly punches Mario’s arm repeatedly)

MARIO: Hey!

PEACH: (continued) …and you just kept getting back up?! You just don't know when to quit!

MARIO: Huh, well, never thought of that as a good thing.

PEACH: It's a great thing.

MARIO: (touched) Thanks. I--

DONKEY KONG: (interrupting) I let him win, just for the record.

MARIO: Really, though? Why would you do that?

DONKEY KONG: You want to know why? It's (throws a barrel at Mario) MIND YOUR OWN BUSINESS, that's why!

MARIO: All right, giant monkey! (attempts to fight back)

CRANKY KONG: Enough! (hits both Donkey Kong and Mario with his staff) Get inside.

[Inside a hut, Cranky Kong has a world map displayed on the wall.]

CRANKY KONG: We've located Bowser's ship. He's gonna arrive at the Mushroom Kingdom by sundown! Lucky for you guys, I got a shortcut!

PEACH: We beat him there and ambush him!

CRANKY KONG: (beat) Yeah, I know. That's why, we're gonna need karts!

[Mario, Peach, Toad, Donkey Kong, and Cranky Kong ride an elevator down to a garage where many karts are being built by the Kong army]

CRANKY KONG: Well, what are you waiting for? Pick your karts!

["Thunderstruck" begins to play as Mario, Peach and Toad select differing vehicles: Mario a standard kart, Peach a motorcycle, and Toad a large SUV. Mario pulls up to Donkey Kong in a kart with two large rockets.]

DONKEY KONG: (whispers to Mario) I hate you.

PEACH: To the Mushroom Kingdom, and the biggest fight of our lives.

PEACH: Here...we...go!

[The group speeds off in their karts.]

KONG: YEAH!

[Scene cuts to Bowser in a white top hat and holding a bouquet of Piranha Plants.]

BOWSER: Princess Peach... Here we are... (chuckles) I guess...love really makes a guy come out of his shell. (chuckles)

[The Piranha Plants begin to snap fiercely. Bowser throws them to the ground and stomps them to silence.]

BOWSER: (sucks in breath) Let's rule the world. Together. Forever. Will you marry me?

[Bowser is shown to be practicing his proposal with Kamek in a Peach costume.]

KAMEK: Oh, yes!

[A Koopa general with a blue, winged and spiked shell enters.]

KOOPA GENERAL: Ahem.

BOWSER & KAMEK: What?!

KOOPA GENERAL: We have found the princess and the mustachioed human. He has defeated Donkey Kong and won the Kong army.

BOWSER: So, like, Peach was super impressed?

KOOPA GENERAL: It appears so, yes. They are heading towards their secret passage!

BOWSER: Oh, they think they can surprise me, huh? Two can play at that game.

[Scene cuts to Mario, Peach, Toad and the Kongs racing through the jungle. Mario sees the road up ahead leads to a ramp.]

MARIO: Um... No one panic, but the road is about to end.

CRANKY KONG: Well then, you better step on the gas and buckle up! (laughs)

[Mario does what Cranky says, causing him to be pulled to the front of the other Kongs. The group rides up the ramp and soars through the clouds, landing on the Rainbow Road.]

MARIO: (laughs) Wahoo!

PEACH: Is there anything like this in your world?

MARIO: (shouts) What?

PEACH: (shouts) Is there anything like this in your world?

MARIO: (laughs) No... We don't drive on rainbows.

PEACH: What are you gonna tell me next? That the turtles aren't evil?

MARIO: No, no. They're usually pets.

PEACH: No way!

MARIO: Ah, come to Brooklyn, I'll buy you a turtle.

PEACH: (giggles) Maybe I will.

DONKEY KONG: Dude, is this you flirting? This is painful!

MARIO: Just-I was trying to be nice.

DONKEY KONG: You are so embarrassing! A princess would never go out with you!

TOAD: Yes, she would! I guarantee she would!

PEACH: (laughing) Guys, Enough.

DONKEY KONG: All right, all right.

[The Koopa army in their own karts watches from a cliff overlooking the Rainbow Road.]

KOOPA: Attack!

[The Koopa army rides their karts off of the cliff and onto Rainbow Road to ambush the Kong army. A Koopa fires a shell from his kart that recoils off of and knocks out several Kong karts.]

PEACH: It's an ambush!

[A Koopa holding a lit Bob-omb approaches Mario, but is knocked aside by Cranky Kong.]

CRANKY KONG: Defensive positions!

[A Kong fires several shells from his kart at Koopas approaching them from the cliffs. Another Kong fires banana peels onto Rainbow Road, spinning out several Koopa karts. The Koopa General plows through several karts in a massive kart equipped with jaws at the front and gains on Mario and co.]

KOOPA GENERAL: Mario! You're a dead man!

[Mario sees several paths ahead on Rainbow Road and gets an idea.]

MARIO: Split up!

[Mario, Peach, Toad, and Donkey Kong split up with the Koopa General chasing Mario.]

PEACH: Mario!

[After repeatedly dodging the jaws of the Koopa General's kart, Mario sees another path or Rainbow Road below him and ultra drift-boosts onto it, much to the Koopa General's frustration.]

MARIO: Ha-ha! (gasps)

[Mario's new Rainbow Road path starts to go upside down.]

MARIO: (panicked) Whoaaaaa!

[Mario's kart shifts into anti-gravity mode.]

MARIO: (amazed) Whoa-ho-ho!

[The Koopa General fires two Bullet Bills and destroys Mario's kart. Mario jumps out of the kart and falls onto another Rainbow Road path below him. Mario grabs onto a Koopa's motorcycle and crashes it into another Koopa's kart. Mario jumps on the Koopa driving the kart, causing the Koopa to retract into his shell. Mario jumps into the kart while holding the shell. Mario dodges three Bullet Bills shot at him from another Koopa kart behind him and counters the Koopa by throwing the shell he was holding behind him. The shell hits the Koopa kart, much to Mario's relief, while the Koopa General approaches him again from behind. Toad frantically dodges bullet and shell-fire from behind him. Two Koopas surround Peach, who proceeds to kick the Koopa on her right and ram the back of her motorcycle into the Koopa on her left. The Koopa on her left fires a Bullet Bill which breaks off the bottom half of a floating landmass above Toad's Rainbow Road path, which falls and breaks off the path ahead of Toad.]

TOAD: (scream) I'm too cute to die!

[Peach disables anti-gravity mode on her motorcycle, falling off of the Rainbow Road path she was on. Peach catches Toad and activates her glider.]

TOAD: That is how you princess!

[Mario fights off Koopa karts in front of him, but the Koopa General catches up to Mario and catches Mario's kart into his kart's jaws. Mario gets out of the kart and holds onto the outside of the jaws in an attempt to avoid getting chomped.]

KOOPA GENERAL: Time to die, Mario!

[The Koopa General pushes a lever on his kart, closing the kart's jaws and destroying Mario's kart]

KOOPA GENERAL: (cackling)

[Mario, alive but clinging to the kart's jaw in fear, moves to the outer edge of the jaw and sees Donkey Kong chasing the Koopa General. Mario climbs to the top of the jaw where the Koopa General can see his head.]

KOOPA GENERAL: Huh?

[Mario jumps on and bounces off the Koopa General's head and onto Donkey Kong's kart.]

DONKEY KONG: See ya!

[Donkey Kong fires the first rocket barrel from his kart at the Koopa General.]

KOOPA GENERAL: No!

[The rocket barrel destroy's the Koopa General's kart.]

MARIO: Woo-hoo! Ha-ha!

TOAD: Yeah!

[The Koopa General emerges from the flames of his destroyed kart.]

KOOPA GENERAL: You...can't...escape ME!

MARIO: What!?

KOOPA GENERAL: BLUE SHELL!

[The Koopa general tucks in his body and flies toward Mario and Donkey Kong's kart. He spins around them and slams straight down, exploding, and shattering the kart and the Rainbow Road beneath them. Mario and Donkey Kong plummet as Peach and Toad escape.]

PEACH: No! No, Mario...

[The Kongs stop at the broken section of the road.]

CRANKY KONG: Ah! No! No...

[More Koopas arrive in flying Koopa Clown Cars and carry the Kongs toward Bowser's castle.]

CRANKY KONG: Whoa! Get your clown claws off of me!

BOWSER: (laughs) Goodbye, Mario.

PEACH: We have to get home!

[Peach and Toad continue driving. As Mario and Donkey Kong fall, Donkey Kong throws debris at Mario.]

DONKEY KONG: Hey! This is your fault!

MARIO: My fault? You're the one who--

DONKEY KONG: Stop talking! I don't want the last thing I hear before I die to be your--

[Mario and Donkey Kong crash into the ocean. Donkey Kong is knocked unconscious, but Mario manages to bring him up to the surface. A large creature closes its jaws beneath them.]

DONKEY KONG: Mario... You saved my life.

MARIO: Yeah, well... I won't tell anyone.

DONKEY KONG: Good, please don't.

MARIO: Okay...

[Mario hears bubbling below him.]

MARIO: Uh... Did you just...feel something?

[The creature, an eel-like Maw-Ray, rises up out of the water behind them.]

DONKEY KONG: Swim!

[The Maw-Ray closes its jaws around them. Peach and Toad arrive back in the Mushroom Kingdom and race through the town.]

PEACH: Bowser's on his way! You have to evacuate!

PEACH: Hurry! Get out of the city!

[Peach races back to her castle and crashes into the throne room.]

TOAD GENERAL: Princess?

PEACH: We lost the army, and Mario's gone.

TOADS: (gasps)

PEACH: Bowser is coming. Head into the forest. I'll buy you some time.

TOAD GENERAL: You heard her! Evacuate the city!

PEACH: Go with the others.

TOAD: I said I wouldn't let anyone hurt you.

[The Toads frantically evacuate the Mushroom Kingdom.]

YELLOW TOAD: Run!

[A Purple Toad in an apron drops a box of apples and tries to gather the apples.]

RED TOAD: Just leave it! There's no time!

[Peach grabs a halberd left behind by one of her Toad guards and Toad takes a frying pan out of his backpack, intending to use it as a weapon. Peach and Toad step outside the castle gates as Bowser's Castle approaches the front yard of Peach's Castle where Peach and Toad are standing. The "mouth" of Bowser's Castle opens up and several Koopa Troopas wielding spears surround Peach and Toad. Bowser shows himself.]

BOWSER: Princess Peach! Brave as ever. As you can see, I have the Super Star.

PEACH: If you're going to use it...

[Peach points her halberd at Bowser as the surrounding Koopas point theirs at her.]

PEACH: ...Use it now.

[Bowser points the tip of the halberd away.]

BOWSER: (clears throat) No, Princess... I stole this star for us. I guess...love really makes a guy come out of his shell. (chuckles)

[Peach stares at Bowser with a confused expression on her face.]

BOWSER: (whispers) I told you that line wouldn't work!

KAMEK: You're doing great!

BOWSER: Peaches, with this star, we will be invincible. We can rule the world together, forever. Will you marry me?

PEACH: Marry you? Are you insane? I would never marry you.

BOWSER: Maybe you should reconsider.

[Kamek uses his magic to constrict Toad and cause him pain.]

TOAD: (pained groaning)

PEACH: No! Stop! Please, stop! I'll...I'll-I'll marry you, just don't hurt my Toads.

[Bowser motions his hand to Kamek, who ceases his torture of Toad. Peach holds Toad in concern.]

BOWSER: You have my word.

PEACH: (sighs in despair)

BOWSER: Ha-ha! Time for a wedding!

[Bowser, Peach and Kamek walk into Bowser's castle. Koopa soldiers hold Toad and bring him in as well. Scene cuts to the dungeon where Lumalee is singing.]

LUMALEE: ♪ Life is sad. Prison is sad. Life in prison is very, very sad. ♪

[The caged Kongs are dropped into the dungeon.]

CRANKY KONG: (grunts)

LUMALEE: Ooh! Fresh meat for the grinder.

CRANKY KONG: (sarcastically) Who's this ray of sunshine?

LUMALEE: There's no sunshine. Only darkness.

PENGUIN KING: Shut up, shut up, shut up!

[Kamek teleports in and floats by on a broom.]

KAMEK: Hello, prisoners! You don't deserve this, but you're invited to the royal wedding!

PENGUIN: Yay!

KAMEK: Where you will all be ritualistically sacrificed!

[The prisoners scream and shake their cages in panic.]

CRANKY KONG: Oh, no, no, no!

LUMALEE: Finally! Mercy...

LUIGI: (whimpers) Mario...

[The scene cuts to the Maw-Ray yawning and accidentally swallowing a Blooper before the camera pans to Mario and Donkey Kong inside the Maw-Ray.]

DONKEY KONG: So this is the end. Being slowly digested by an eel next to an idiot in overalls.

MARIO: Well, at least your brother isn't gonna die because of you.

DONKEY KONG: At least you're not gonna die with your dad thinking you're a joke.

MARIO: Yeah, well, my dad thinks I'm a joke, too.

DONKEY KONG: Yeah, well... Your dad's right!

MARIO: You know what? I feel bad enough. Just-just leave me alone.

DONKEY KONG: I've never met your dad, but he sounds brilliant.

MARIO: Just go in a corner and SMASH some stuff, SMASH MONKEY!

DONKEY KONG: I...AM...MORE...THAN A GUY...WHO SMASHES THINGS!!!!!

MAW-RAY: (burps)

[The force of the Maw-Ray's burp knocks Mario and Donkey Kong into Donkey Kong's kart which still has its second rocket barrel left. Mario and Donkey Kong smugly grin at each other as they get the idea to use the rocket barrel to escape the Maw-Ray.]

MARIO: That was amazing!

DONKEY KONG: Now we're even!

[The scene cuts to Bowser's army and Peach getting ready for the wedding.]

PEACH: (sighs)

[Toad comes into Peach's room]

TOAD: Princess... I got it!

PEACH: (sighs in relief) Great job.

TOAD: Couldn't have you going out there without your bouquet.

PEACH: (mischievously) It's perfect.

[The doors open with Felix Mendelssohn's "Wedding March" playing and Peach walks up to the altar where Bowser is waiting for her.]

PEACH: (gasps)

LUIGI: (whimpers)

[Peach sees Luigi, Cranky Kong, and Bowser's other caged prisoners being carried forward by a mechanism above a huge pool of lava below the altar]

BOWSER: I'll be sacrificing them in your honor. Lower the prisoners!

[The mechanism starts lowering the prisoners closer to the lava pool]

LUIGI: (trembles)

KAMEK: Dearly belove--

[Peach punches Kamek.]

BOWSER: Huh?!

DRY BONES: Draaaaamaaaaa...

PEACH: You really thought I'd marry you?

BOWSER: (beat) Kinda!

PEACH: I'd never marry a monster.

[Peach powers up with an Ice Flower hidden in her bouquet.]

BOWSER: Then we are breaking up. Right now!

[Bowser tries to shoot his fire breath at Peach, but Peach dodges and freezes Bowser. Peach throws an ice ball at the gear lowering the prisoners, temporarily saving the prisoners from the lava. Bowser's army furiously gangs up on Peach as Peach fights back. Mario and Donkey Kong ride the rocket barrel up to Bowser's Castle.]

MARIO: They gotta be up there.

[A Koopa readies a Bill Blaster and aims it at the rocket barrel.]

KOOPA: Fire!

[The Koopa fires the Bullet Bill at the rocket barrel, disabling it. Mario and Donkey Kong are knocked to the ground. They look up to see a bunch of ? Blocks being gathered by Bowser's Army. Bowser's army gives worried looks to Mario and Donkey Kong.]

MARIO: You wanna do this?

DONKEY KONG: Yes, I do.

[Donkey Kong rolls the disabled rocket barrel at the ? Block pile. The rocket barrel explodes, knocking out several troops and scattering the ? Blocks. Mario, after stomping several Goombas and a Koopa Troopa, punches a ? Block bouncing above him and kicks another ? Block on the ground. The one he punches gives Donkey Kong a Fire Flower and transforms him into Fire Donkey Kong, while the one Mario kicked gives him a Super Mushroom and transforms him into Super Mario.]

DONKEY KONG: Yes! Fire!

MARIO: Wah-ha!

[Mario and Donkey Kong platform and fight their way through Bowser's army.]

MARIO: Wahoo!

DONKEY KONG: This is fun!

[Mario kicks a shell at several of Bowser's troops, but the shell recoils and hits Mario, powering him down.]

DONKEY KONG: Ha! Loser!

[The shell then recoils at Donkey Kong, powering him down too. Mario punches a ? Block floating above him, which gives Mario a Super Leaf and transforms him into Tanooki Mario.]

MARIO: Hey, what does this do? Woah!

[Mario starts flying out of control as a Koopa in a Clown Car fires at Mario.]

MARIO: Whoa! Yah!

[Mario smacks the Clown Car away with his tail and gets his flight under control.]

MARIO: Whoa-ah-hahahaha!

[Donkey Kong climbs the spike ball anchor up to Bowser's Castle with Mario flying close by.]

DONKEY KONG: Cool raccoon suit!

MARIO: Really?

DONKEY KONG: Not at all!

[Peach continues to fight off Bowser's army. A Koopa Paratroopa throws a spear at Peach. Peach catches the spear, dips the end of it in a nearby lava pool, and throw it at King Bob-omb's fuse.]

KING BOB-OMB: (panics)

PEACH: (grunts)

[Peach sees the ice on the mechanism's gear break and readies another ice ball to freeze it again.]

KING BOB-OMB: (moans, sighs)

[King Bob-omb explodes and powers down Peach before she can throw another ice ball at the gear. The mechanism starts lowering the prisoners again.]

PEACH: Ah!

CRANKY KONG: Ah!

LUIGI: (panics as he comes dangerously close to being burned in lava, dodging the lava by clinging to the top of the cage with his hands and feet)

LUMALEE: Whee! (laughs)

[Luigi comes dangerously close to being burned in the lava as almost the entire cage is submerged into the lava, but the cage suddenly stops.]

LUIGI: Huh?

DONKEY KONG: (grunts as he turns the mechanism's gears backwards, raising the prisoners away from the lava)

CRANKY KONG: Phew!

LUMALEE: Boo...

[Luigi tries to climb to the top of the cage, but his hand slips and he starts falling towards the lava.]

LUIGI: (screams)

[Tanooki Mario swoops down and catches Luigi before he can drop into the lava.]

LUIGI: Huh?

MARIO: Lu!

LUIGI: Mario?! (laughs)

MARIO: I told ya! See? As long as we're together, everything is gonna be okay!

LUIGI: (laughs) Mario, why do you look like a bear? What is this?

[Donkey Kong frees Cranky Kong from his cage.]

CRANKY KONG: Ya did good, kid. Make your pecs dance, you deserve it.

DONKEY KONG: No time now! Definitely later!

[Bowser, still trapped in ice, regains consciousness and sees Mario, Luigi, Peach, Toad, and Donkey Kong together, which infuriates him to the point that he breathes fire and sets his head free.]

BOWSER: Launch the Bomber Bill and DESTROY THE MUSHROOM KINGDOM!!

[A Bomber Bill explosively shoots out of the volcano-like opening in Bowser's Castle and speeds downward targeted at Peach's Castle.]

PEACH: No...

[Tanooki Mario quickly takes flight and speeds beside the Bomber Bill, trying to get its attention.]

MARIO: Hey, hey... Hey, over here!

[Tanooki Mario tries hitting the Bomber Bill's side repeatedly, but to no effect. Mario tries pushing against the Bomber Bill's front, but ends up with his back against its tip. Mario frantically looks around as the Bomber Bill gets closer to Peach's Castle, but gets an idea after looking at its eye.]

MARIO: You asked for it!

[Tanooki Mario smacks the Bomber Bill's eye with his tail. The Bomber Bill stops dead in its tracks, bending the flagpole on top of Peach's Castle before angrily glaring at Mario.]

MARIO: Heh. Hello.

[The Bomber Bill chases Tanooki Mario through the Mushroom Kingdom. Mario crashes through a large mushroom.]

MARIO: Ow!

[Tanooki crashes into two more large mushrooms, getting some of the last one in his mouth before spitting it out.]

MARIO: Really?!

[Tanooki Mario spots the same Warp Pipe that first took him to the Mushroom Kingdom and gets an idea.]

MARIO: Follow me!

[Tanooki Mario starts leading the Bomber Bill to the Warp Pipe.]

MARIO: Come on...

[Tanooki Mario gets the Bomber Bill flying straight into the Warp Pipe's direction and speeds up.]

MARIO: Little closer...

[Tanooki Mario gets as close as possible to the Warp Pipe without going in it and flies upward at the last second.]

MARIO: (slow motion) Mamma Mia!

[The Bomber Bill is sucked into the Warp Pipe with great force, but it explodes after floating into the Warp Zone, creating a visible disturbance on the outside of the Mushroom Kingdom's Warp Pipe.]

MARIO: Huh?

[The Warp Pipe creates an explosion that throws Tanooki Mario against the wall of Bowser's Castle and powers him down. Mario falls before grabbing onto a ledge of Bowser's Castle. The Warp Pipe's significantly increased suction range starts sucking everything in the Mushroom Kingdom's vicinity into the Warp Pipe with Luigi, Peach, Toad, and Donkey Kong grabbing onto objects to try to prevent getting sucked in. Mario loses his grip on the ledge and gets sucked into the Warp Pipe while screaming in horror. The scene cuts to Mario & Luigi's family in their dining room.]

MARIO & LUIGI'S FAMILY: That's beautiful. You made these, right?

[The dining room starts earthquaking as Mario & Luigi's family alertly watch.]

MARIO & LUIGI'S FAMILY: Huh? Whoa?

[The Warp Pipe in the underground sewer shoots Mario out of a manhole and Mario crash-lands onto the ground before getting up.]

MARIO: Huh?

[Mario realizes he's back in Brooklyn.]

MARIO: Brooklyn?

[Foreman Spike almost hits Mario with his truck before hitting the brakes.]

SPIKE: Mario?

[Foreman Spike gets out of his truck and lifts Mario by his overall straps.]

SPIKE: You almost dented my-

[Bowser’s Castle emerges from the pipe, as do several Mushroom Kingdom debris. Peach, Toad, and Donkey Kong get trapped under debris while Luigi frantically takes cover inside a dumpster. The Super Star is launched from Bowser's Castle and lands a short distance in front of Mario. Bowser furiously gets up.]

BOWSER: Mario!

[Mario races toward the Super Star but Bowser blocks him.]

BOWSER: You want this?

[He brutally grabs Mario by the arm and holds him up. Mario exclaims fearfully. Bowser snarls and gives him a massive sucker punch, sending him flying backwards into a car's windshield. Bowser breathes fire at Mario who dodges the flames.]

BOWSER: (growls) You ruined my wedding! I WAS FINALLY GONNA BE HAPPY! NOW YOU WILL SUFFER — LIKE ME!!!!

[With a mighty whack of his tail, Bowser blasts Mario into the Punch-Out Pizzeria.]

BOWSER: You really thought you could stop me? You worthless, weak little nothing. COME OUT AND FIGHT! Or are you too scared? (no response; cackles) Just what I thought.

[Princess Peach rushes over, jumps into the air in a spinning kick at Bowser, who grunts. Then Donkey Kong bodyslams into Bowser with a punch, knocking Bowser over. This angered Bowser even more. With an enraged bellow, he turns his attention to his attackers and fights back. He knocks Princess Peach, Donkey Kong and Toad off with his arm, then he roars at them before charging at them]

BOWSER: (roars)

[Mario is on the brink of losing hope after being pummeled by Bowser. He sighs in despondence. Just then, the TV flickers on, showing the commercial from the beginning of the movie.]

MARIO & LUIGI: (commercial audio) Mamma mia!

MARIO: (commercial audio) That's-a why the Sup-Super Mario Brothers are here. To-a save Brooklyn-- Save Brooklyn-- Brooklyn-- Save Brooklyn--

[The TV shuts off completely. Mario's face changes to determination, realizing that it's up to him to save Brooklyn. Mario gets out from hiding, stretches his right arm and adjusts his hat.]

MARIO: (quietly) Let's-a go.

[Mario comes outside just as Bowser was overpowering Donkey Kong. Bowser punches the ape, grabs him by the throat and lifts him up. He lashes his claws out, preparing to finish him off. But...]

MARIO: Hey! Leave him alone!

LUIGI: Mario...

BOWSER: [releasing Donkey Kong] You just don't know when to quit!

MARIO: Yeah. I've been told that before.

[Peach smiles, remembering that same conversation she and Mario had after the latter defeated Donkey Kong. Just then, she sees Kamek with the Super Star and gets an idea.]

PEACH: Mario!

[Peach respectively shoves and pushes two Koopa Troopas to the ground and kicks a Green Shell over to the Super Star, sending it flying]

PEACH: The star!

BOWSER: NO! THAT'S MINE!! [breaths fire at Mario, but Luigi blocks it with a manhole]

MARIO: Lu...

LUIGI: Nothing can hurt us as long as we're together.

[As the manhole starts to bend, Mario reaches a hand to Luigi, who takes it as the two leap towards the Star, just when it looks like Bowser's Fire Breath hits them.]

PEACH: No!

BOWSER: (laughs)

[As the smoke clears, it's revealed Mario and Luigi have become invincible.]

BOWSER: [tries to stomp the brothers to no avail.] Huh?! [Mario and Luigi then send Bowser flying with an uppercut.]

BOWSER: RIP THEM TO PIECES!

[The Koopas, Spinies, Shy Guys, Hammer Bros, Sledge Bros, Goombas, Buzzy Beatles, Koopa Paratroopas and Piranha Plants follow Bowser's orders and rush towards the Mario Bros. Invincible Mario and Invincible Luigi nod at each other and split up. A Sledge Bro tries to hit Invincible Mario but the hammer gets destroyed and Invincible Mario throws the Sledge Bro at the Koopas, while Donkey Kong jumps with Peach and Toad in his arms. A Shy Guy is jumping on a whimpering Spike as the Dry Bones, Snifit and Hammer Bro watch. Invincible Luigi defeats Dry Bones, uses its shell as a shield to block Hammer Bro's hammers and defeats both the Hammer Bro and Snifit. Invincible Luigi grabs on a Shy Guy's strap, before letting it go, sending the Shy Guy flying.]

LUIGI: Oh, hey, Spike! [zooms off as Spike looks up in surprise]

SPIKE: Luigi?!

[Invincible Mario and Invincible Luigi run side by side and zoom into the Koopa Army, defeating them, the Spinies, Hammer Bros, Piranha Plant, Shy Guys, Buzzy Beetles and Goombas. Invincible Mario and Invincible Luigi jump on the Bullet Bills and Paratroopas, defeating them. The scene goes into slow motion as the Mario Brothers' parents are awed by Invincible Mario and Invincible Luigi. Time goes back to normal speed as the Piranha Plant traps them both with its jaws, much to the parents' horror...]

MARIO & LUIGI'S FATHER: No!

[...but Invincible Mario and Invincible Luigi break free from the Piranha Plant as the Mario Brothers' parents are more awed than ever.]

MARIO & LUIGI'S FATHER: Mamma mia!

[Bowser throws a car at them, once again to no avail, as Invincible Mario and Invincible Luigi grab a power line like a trapeze and kick him. Bowser tries to crush them, but Invincible Mario slides underneath him and throws him on the ground. Invincible Luigi headbutts Bowser and uses a mushroom as a trampoline. Invincible Mario uppercuts and bicycle-kicks Bowser as Invincible Luigi throws a block at him, causing the Koopa King to collapse. Invincible Mario and Invincible Luigi grab Bowser by his tail, spins him around, and tosses him up in the air. Invincible Mario and Invincible Luigi jump up high and punch Bowser, sending him to the ground, causing a giant crack on his castle. Invincible Mario and Invincible Luigi front-flip and prepare the finishing double-curb stomp. Bowser attempts to scorch them to death but Invincible Mario and Invincible Luigi break through the fire breath and strike Bowser, destroying his castle in the process. The five main characters (including Mario and Luigi in their normal state after the Super Star's effect wears off) loom over Bowser.]

BOWSER: (groans) Peaches... (chuckles) Uh, listen, this is not the way I pictured it, but give me one more chance.

PEACH: Ew. No.

BOWSER: No, no, no, no, no-- (Peach force-feeds Bowser a Mini Mushroom causing him to shrink; in a high-pitched voice) Hey! Hey! That is not cool!

DONKEY KONG: Ha! He got the Blue Mushroom!

MARIO: (to Peach) See? Told ya I'd get you a pet turtle.

PEACH: (giggles) Not bad, mustache. And Luigi, you're so brave.

LUIGI: Oh, thanks, uh, yeah, it's kind of my thing.

MARIO & LUIGI'S MOTHER: (she and Mario and Luigi's father arrive) Ah, my boys! My heroes! (embraces the brothers)

MARIO & LUIGI'S FATHER: Wahoo! Mario! You were amazing! (laughs)

MARIO: Thanks, Dad.

DONKEY KONG: Ah, bring it in!

(Donkey Kong pulls everyone for a back-breaking hug. Suddenly, the sound of applause sounds out. Everyone turns to see the entire populace, including Mario and Luigi's family, Francis, his owners, and even Spike cheering for Mario and Luigi.]

SPIKE: Let's hear it for the Super Mario Brothers!

[The populace continues to cheer the brothers on.]

MARIO & LUIGI'S FATHER: These are my boys!

MARIO: Ha-hey!

GIUSEPPE: Wahoo!

[The brothers do their handshake.]

MARIO & LUIGI: Ay!

[Mario, Luigi, Peach, Toad, and Donkey Kong strike a pose.]

TOAD: Yes!

[The five appear in a newspaper with the headline "BROOKLYN SAVED!", tacked onto a bulletin board in Mario's bedroom. Mario's alarm goes off, and Mario stops his alarm as "Mr. Blue Sky" begins to play.]

MARIO: (yawns, stretches)

[Mario and Luigi get dressed, collect their tools and walk out a door into the Mushroom Kingdom, where they now live.]

GREEN TOAD: Morning!

YELLOW TOAD: Hello!

[Mario and Luigi race each other to a Warp Pipe and jump in.]

MARIO: Wahoo!

["The Super Mario Bros. Movie" title appears and cuts to black. Lumalee drifts into view.]

LUMALEE: Now that's a happy ending. Or is it? Because everything's over now. And all that's left is you and the infinite void. (beat) Kind of makes you want to play saxophone, huh?

[Lumalee pulls out a saxophone and begins to play as the credits roll. After the first half of the credits, a scene plays where Bowser is playing his piano again.]


♪ Mario, Luigi and a Donkey Kong, too

♪ A thousand troops of Koopas couldn't keep me from you

♪ Princess Peach, at the end of the line

♪ I'll make you mine

♪ Oh, Peaches, Peaches, Peaches, Peaches, Peaches

♪ Peaches, Peaches, Peaches, Peaches, Peaches

♪ I love you

♪ Oh-oh


[The lights come on and a blue Toad guard comes in, banging on the birdcage prison of the still tiny Bowser.]

BLUE TOAD GUARD: Hey! Quiet in there. Lights out, little guy.

BOWSER: (high-pitched voice) Hey! You can't treat me like this. Do you know who I am? I am Bow-

[The blue Toad guard shuts the door and the credits continue. After concluding, in a scene down in the Brooklyn sewers, an egg with green spots lays among the rubble and begins to hatch.]

YOSHI: Yoshi!
`).then(e => console.log(`Finished script. ${e} messages sent`)).catch(console.error)