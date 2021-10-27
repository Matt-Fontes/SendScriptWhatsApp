function enviarScript(scriptText) {
  const lines = scriptText.split("\n");

  let i = 0;

  setInterval(() => {
    if (i >= lines.length) return;

    if (lines[i].trim() != "") {
      console.log(lines[i]);

      window.InputEvent = window.Event || window.InputEvent;

      const event = new InputEvent("input", { bubbles: true });

      const textbox = document.querySelector("#main div._13NKt");

      textbox.textContent = lines[i];

      textbox.dispatchEvent(event);

      document.querySelector("#main span[data-testid=send]").click();
    }
    i++;
  }, 250);
}

enviarScript(`How to Train your Dragon

[Opening credits are shown. A silhouette of a Night Fury flies behind the Dreamworks logo.]

[We pan up and glide across the ocean to see an island surrounded by fog. The moment the island is shown, a boy speaks.]

Hiccup (v.o.): This is Berk. It's twelve days north of Hopeless, and a few degrees south of Freezing to Death.

[We glide through the fog to see two giant Viking statues with fires burning in their mouths.]

Hiccup (v.o): It's located solidly on the Meridian of Misery.

[We go past the statues only to dive through a crashing wave and jump to a closer shot of the island. As we pan in a circular motion, we see several structures, houses, and a sheep farm.]

Hiccup (v.o): My village. In a word, sturdy. And it's been here for seven generations, but, every single building is new. We have fishing, hunting, and a charming view of the sunsets.

[We land on two sheep grazing in the grass.]

Hiccup (v.o): The only problems are the pests. (A dragon carries one sheep away. The other resumes grazing.) You see, most places have mice or mosquitoes. We have...

[A dragon fires at the screen as a door slams shut, a boy cowering behind it]

Hiccup (v.o.): -dragons. Most people would leave. Not us. We're Vikings. We have, stubbornness issues. (Hiccup runs outdoors, where all the houses are on fire and Vikings are tussling with dragons all around) My name's Hiccup. Great name, I know. But, it's not the worst. Parents believe a hideous name will frighten off gnomes and trolls. Like our charming Viking demeanor wouldn't do that.

[Hiccup is seen dodging several Vikings. A nearby explosion from the blast of a teal Gronckle causes him to trip and a male Viking roars in his face.]

Ack: ARGGGHHHHH! Mornin'!

Hoark: What are you doing here?!

Viking: Get inside!

Viking: What are you doin' out?"

Phlegma: Get back inside!

[Stoick grabs Hiccup by the collar of his shirt]

Stoick: Hiccup?! What is he doing out aga--?! What are you doing out?! Get inside!

Hiccup (v.o.): That's Stoick the Vast. Chief of the tribe. They say that when he was a baby, he popped a dragon's head clean off of its shoulders. (Stoick throws a wooden cart at a dragon, knocking it out mid-air) Do I believe it? Yes, I do.

Stoick: What have we got?

Starkard: Gronckles, Nadders, Zipplebacks. Oh, and Hoark saw a Monstrous Nightmare.

Stoick: Any Night Furies?

Starkard: None so far.

[Burning embers land on Stoick's shoulder. He casually brushes it off.]

Stoick: Good.

Viking: Hoist the torches!

[Two enormous torches are raised and lit. The dragons swarm around them.]

[Hiccup runs into a blacksmith shop and puts on an apron]

Gobber: Ah! Nice of you to join the party! I thought you'd been carried off!

Hiccup: What, who me? Nah, come on! I'm waaaay too muscular for their taste. They wouldn't know what to do with all... (gestures to his skinny body) ...this.

Gobber: Well, they need toothpicks, don't they?

Hiccup (v.o.): The meat-head with attitude and interchangeable hands is Gobber. I've been his apprentice ever since I was little. Well... littler.

[scene cuts to Stoick on the watch-tower]

Stoick: We move to the lower defenses. We'll counter-attack with the catapults.

[A dragon swoops down and sets another house on fire.]

Hiccup (v.o.): See? Old village, lots and lots of new houses.

Viking: FIRE!

Astrid: Alright, let's go!

[The Viking teens are seen carrying buckets of water as Hiccup in the voiceover introduces them one by one]

Hiccup (v.o.): Oh, and that's Fishlegs, Snotlout, the Twins, Ruffnut and Tuffnut, and... (dreamily) Astrid. Oh, their job is so much cooler. (Slow motion shot of the teens walking away from an explosion)

[Hiccup leans out of the smithing window to get a better look. Gobber lifts him up and back into the shop.]

Hiccup: Oh, come on. Let me out, please? I need to make my mark!

Gobber: Oh, you've made plenty of marks. All in the wrong places!

Hiccup: Please, two minutes. I'll kill a dragon. My life will get infinitely better. I might even get a date.

Gobber: You can't lift a hammer, you can't swing an axe, you can't even throw one of these!

[Gobber holds up a bola and a Viking grabs it and uses it to bring down a dragon]

Hiccup: Okay, fine, but this will throw it for me.

[Hiccup pats a wooden machine, which opens and shoots a bola randomly, hitting a Viking standing in the background.]

Viking: Arggh!

Gobber: See, now this right here is what I'm talking about!

Hiccup: Mild calibration issue--

Gobber: Don't you-- no-- Hiccup. If you ever want to get out there to fight dragons, you need to stop all... this.

Hiccup: But, you just pointed to all of me!

Gobber: Yes! That's it! Stop being all of you!

Hiccup: Ohhhh...

Gobber: Ohhhh, yes.

Hiccup: You sir, are playing a dangerous game. Keeping this much, raw... Viking-ness... contained? THERE WILL BE CONSEQUENCES!

Gobber: I'll take my chances. Sword. Sharpen. Now.

Hiccup (v.o.): One day, I'll get out there. Because, killing a dragon is everything around here.

[The camera pans over various dragons as they are described. Nadders are shown attacking sheep, Gronckles are stealing racks of fish, and a Zippleback ignites a house and blows it up.]

Hiccup (v.o.): A Nadder head is sure to get me at least noticed. Gronckles are tough. Taking down one of those would definitely get me a girlfriend. A Zippleback? Exotic. Two heads, twice the status.

Catapult Operator: They found the sheep!

Stoick: Concentrate fire over the lower bank!

Catapult Operator: Fire!

Hiccup (v.o.): And then, there's the Monstrous Nightmare. Only the best Vikings go after those. They have this nasty habit of setting themselves on fire.

[A Monstrous Nightmare growls and alights itself as it climbs up the catapult]

Stoick: Reload! I'll take care of this.

[Stoick fights the Nightmare, which takes a few hits before retreating]

Hiccup (v.o.): But the ultimate prize is the dragon no one has ever seen. We call it the--

[A high-pitched whistle is heard from the sky. The Vikings panic.]

Viking: NIGHT FURY! GET DOWN!

[From out of nowhere, an explosion tears the catapult apart]

Stoick: JUMP!

Hiccup (v.o.): This thing never steals food, never shows itself, and... never misses. No one has ever killed a Night Fury. That's why I'm going to be the first.

Gobber: Man the fort, Hiccup. They need me out there!

[He attaches an axe to his arm and begins to run out, but turns around at the doorway.]

Gobber (cont.): Stay. Put. There. You know what I mean.

[Hiccup runs outside the fort, bringing his bolas launcher]

Viking #6: Hiccup, where are you going?!

Viking #7: Come back here!

Hiccup: Yeah, I know! Be right back!

[Hiccup is pushing a cart with the automated catapult on it]

[Stoick captures several Nadders in a net and wrestles them. One tries to blast him with fire.]

Stoick: Mind yourselves! The devils still have some juice in them!

[Hiccup sets up his bola catapult on an empty hill and looks around.]

Hiccup: Come on. Gimme something to shoot at, gimme something to shoot at.

[The camera pans around the night sky, and catches on a shadow, visibly blotting out the stars. It fires, and an explosion illuminates it, showing a visible shadow. Hiccup shoots, and a loud cry is heard as the shadow is seen plummeting down into a forest]

Hiccup (cont.): Oh, I hit it! YES! I HIT IT! Did anybody see that?

[A Monstrous Nightmare shows up and crushes Hiccup's bola launcher.]

Hiccup (cont.): Except for you.

[A shrill cry sounds from the hill, and catches Stoick's attention. He turns to see the Monstrous Nightmare chasing Hiccup, and gets up to go help him.]

Stoick: DO NOT let them escape!

Spitelout: Right!

[Hiccup runs behind a torch pole and hides, just as flames reach around the corner. He looks behind it and on the other side, the Nightmare reaches to get Hiccup. Stoick punches the beast and jumps back to defend himself. The dragon tries to breathe fire, but coughs up only a few drops of flaming liquid instead, having exhausted its shots]

Stoick: You're all out.

[Stoick promptly defeats the Nightmare, which quickly flees. The torch pole collapses, the torch tumbles down into the village, leaving ruins in its wake.]

Hiccup (v.o.): Oh, and there's one more thing you need to know...

[The torch rolls onto the Nadders Stoick netted earlier, freeing them. The dragons manage to escape, hauling off most of Berk's food and livestock.]

Hiccup: Sorry, Dad. Okay, but I hit a Night Fury.

[Stoick grabs Hiccup by the back of his shirt and drags him towards his house.]

Hiccup (cont.): It's not like the last few times, Dad! I mean, I really actually hit it! You guys were busy and I had a very clear shot. It went down, just off Raven Point. Let's get a search party out there, before it--

Stoick: STOP! Just... stop. Every time you step outside, disaster follows. Can you not see that I have bigger problems? Winter's almost here and I have an entire village to feed!

Hiccup: Between you and me, the village could do with a little less feeding, don't ya think? (A viking at the back rubs his stomach as if to say "Are you calling me fat?")

Stoick: This isn't a joke, Hiccup! Why can't you follow the simplest orders?

Hiccup: I can't stop myself. I see a dragon and I have to just... kill it, you know? It's who I am, Dad.

Stoick: You are many things, Hiccup. But a dragon killer is not one of them. Get back to the house. [To Gobber] Make sure he gets there. I have his mess to clean up.

Tuffnut: Quite the performance.

Snotlout: I've never seen anyone mess up that badly. That helped!

Hiccup: Thank you, thank you. I was trying, so...I really did hit one.

Gobber: Sure, Hiccup.

Hiccup: He never listens.

Gobber: Well, it runs in the family.

Hiccup: And when he does, it's always with this... disappointed scowl. Like someone skimped on the meat in his sandwich. [Imitating Stoick] Excuse me, barmaid! I'm afraid you brought me the wrong offspring. I ordered an extra large boy with beefy arms. Extra guts and glory on the side. This here, this is a talking fish bone!

Gobber: Now, you're thinking about this all wrong. It's not so much what you look like, it's what's inside that he can't stand.

Hiccup: [Sarcastically] Thank you for summing that up.

Gobber: Look, the point is, stop trying so hard to be something you're not.

Hiccup: I just want to be one of you guys.

[Hiccup exits through the back of the house and runs into the forest. The scene cuts to the Meade hall, where everyone is gathered]

Stoick: Either we finish them, or they'll finish us! It's the only way we'll be rid of them! If we find the nest and destroy it, the dragons will leave. They'll find another home! One more search. Before the ice sets in.

Viking: Those ships never come back.

Stoick: We're Vikings! It's an occupational hazard! Now who's with me?

Viking: Today's not good for me. I've gotta do my axe returns.

Stoick: Alright. Those who stay will look after Hiccup.

Phlegma: To the ships!

Spitelout: I'm with you, Stoick!

Stoick: That's more like it.

Gobber: Right, I'll pack my undies.

Stoick: No, I need you to stay and train some new recruits.

Gobber: [Sarcastically] Oh, perfect. And while I'm busy, Hiccup can cover the stall. Molten steel, razor sharp blades, lots of time to himself... what could possibly go wrong?

Stoick: What am I going to do with him, Gobber?

Gobber: Put him in training with the others.

Stoick: No, I'm serious.

Gobber: So am I.

Stoick: He'd be killed before you let the first dragon out of its cage.

Gobber: Oh, you don't know that.

Stoick: I do know that, actually.

Gobber: No, you don't.

Stoick: No, actually, I do.

Gobber: No, you don't!

Stoick: Listen, you know what he's like. From the time he could crawl he's been... different. He doesn't listen, he has the attention span of a sparrow... I take him fishing and he goes hunting for... for trolls!

Gobber: Trolls exist! They steal your socks. But only the left ones. What's with that?

Stoick: When I was a boy...

Gobber: Oh, here we go.

Stoick: My father told me to bang my head against a rock, and I did it. I thought it was crazy, but I didn't question him. And you know what happened?

Gobber: You got a headache.

Stoick: That rock split in two. It taught me what a Viking could do, Gobber. He could-- He could crush mountains, level forests, tame seas! Even as a boy, I knew what I was, what I had to become. Hiccup is not that boy.

Gobber: You can't stop him, Stoick. You can only prepare him. Look, I know it seems hopeless. But the truth is you won't always be around to protect him. He's going to get out there again. He's probably out there now.

[Scene cuts to Hiccup trekking through the forest]

Hiccup: Oh, the gods hate me. Some people lose their knife or their mug. No, not me. I manage to lose an ENTIRE DRAGON?!

[Hiccup encounters the Night Fury, bounded by his bola and takes out his knife. He is frightened and hides behind a rock, slowly approaching the fallen dragon.]

Hiccup (cont.): Oh, wow. I did it. Oh, I did it! This fixes everything! Yes! I have brought down this mighty beast!

[Hiccup steps on the seemingly dead dragon's face but it is still alive and shoves him away]

Hiccup (cont.): Whoa!


Hiccup (cont.): I'm going to kill you, dragon. I'm gonna cut out your heart and take it to my father. I'm a Viking. I am a VIKING!

[He hesitates, looking at the dragon's frightened eyes. The Night Fury, while visibly scared, makes no sound and lays still. Hiccup, unable to kill the defenseless creature, finally gives in.]

Hiccup (cont.): I did this.

[Hiccup begins cutting the ropes that bind the Night Fury.]

[The dragon stirs, opening its eyes. It rolls Hiccup over, roars in Hiccup's face, and lopsidedly flies away, leaving him unharmed.]

[Hiccup whimpers and faints.]

[Scene cuts to the Haddock household. Hiccup runs past Stoick and quickly and quietly crawls up the stairs, but Stoick notices him ]

Stoick: Hiccup.

Hiccup: (stops halfway up the stairs) Dad! Uh... I have to talk to you, Dad.

Stoick: I need to speak with you too, son.

Hiccup and Stoick: (simultaneously) I've decided I don't want / I think it's time you learn / to fight dragons. What?

Stoick: You go first.

Hiccup: No, no, you go first.

Stoick: Alright. You get your wish. Dragon Training. You start in the morning.

Hiccup: [Panicking] Oh, man, I should've gone first! Uh, 'cause I was thinking, you know, we have a surplus of dragon-fighting Vikings, but do we have enough... bread-making Vikings, or small home repair Vikings--?

Stoick: You'll need this. [passes Hiccup an axe]

Hiccup: I don't want to fight dragons.

Stoick: Come on. Yes, you do.

Hiccup: Rephrase: Dad, I can't kill dragons.

Stoick: But you will kill dragons.

Hiccup: No, I'm really very extra sure that I won't.

Stoick: It's time, Hiccup.

Hiccup: Can you not hear me?!

Stoick: This is serious, son! When you carry this axe, you carry all of us with you. Which means you walk like us. You talk like us. You think like us. No more of... this.

Hiccup: You just gestured to all of me.

Stoick: Deal?

Hiccup: This conversation is feeling very one-sided.

Stoick: DEAL?!

Hiccup: Deal.

Stoick: Good. Train hard. I'll be back. Probably.

Hiccup: And I'll be here. Maybe.

[Scene cuts to a pan around the Dragon Training Arena]

Gobber: Welcome to Dragon Training!

Astrid: No turning back.

Tuffnut: I hope I get some serious burns!

Ruffnut: I'm hoping for some mauling, like on my shoulder or lower back.

Astrid: Yeah, it's only fun if you get a scar out of it.

Hiccup: [Sarcastically] Yeah, no kidding, right? Pain. Love it.

Tuffnut: Oh, great. Who let him in?

Gobber: Let's get started! The recruit who does best will win the honor of killing his first dragon in front of the entire village.

Snotlout: Hiccup already killed a Night Fury, so, does that disqualify him or...?

Tuffnut: Can I transfer to the class with the cool Vikings?

Gobber: [to Hiccup] Don't worry. You're small and you're weak. That'll make you less of a target! They'll see you as sick or insane and go after the more Viking-like teens instead.

Gobber (cont.): Behind these doors are just a few of the many species you will learn to fight! The Deadly Nadder!

Fishlegs: Speed: eight; Armor: sixteen.

Gobber: The Hideous Zippleback!

Fishlegs: Plus eleven stealth times two.

Gobber: The Monstrous Nightmare!

Fishlegs: Firepower: fifteen.

Gobber: The Terrible Terror!

Fishlegs: Attack: eight; Venom: twelve!

Gobber: CAN YOU STOP THAT?! And... the Gronckle!

Fishlegs: [whispering] Jaw strength: eight.

Snotlout: Whoa, whoa, wait! Aren't you gonna teach us first?!

Gobber: I believe in learning on the job. [releases Gronckle, which promptly swallows rocks and starts blasting the teens]

Gobber (cont.): Today is about survival. If you get blasted... you're dead! Quick! What's the first thing you're going to need?

Hiccup: A doctor?!

Fishlegs: Plus five speed?!

Astrid: A shield!

Gobber: Shields! Go! Your most important piece of equipment is your shield! If you must make a choice between a sword or a shield, take the shield!

[All the recruits head for the shields]

Tuffnut: Get your hands off my shield!

Ruffnut: There's like a million shields!

Tuffnut: Take that one, it has a flower on it. Girls like flowers.

[Ruffnut takes the shield and slams it onto Tuffnut's head.]

Ruffnut: Oops, now this one has blood on it.

[The Gronckle flies towards the Twins and blasts their shield with a fireball, leaving them dazed on the ground.]

Gobber: Tuffnut, Ruffnut, you're out!

Ruffnut and Tuffnut: [Dazed] What?

Gobber: Those shields are good for another thing: noise! Make lots of it to throw off a dragon's aim!

[The remaining teens begin hitting their weapons against their shields, making the Gronckle shake its head, confused.]

Gobber (cont.): All dragons have a limited number of shots. How many does a Gronckle have?

Snotlout: Five?

Fishlegs: No, six!

Gobber: Correct, six! That's one for each of you!

[Fishlegs' shield gets blasted out of his hand. He runs away screaming.]

Gobber (cont.): Fishlegs, out. [to Hiccup hiding behind a plank] Hiccup, get in there!

Snotlout: [to Astrid] So, anyway I'm moving into my parents' basement. You should come by sometime to work out. You look like you work out!

[The Gronckle fires at Snotlout]

Gobber: Snotlout! You're done!

Hiccup: So, I guess it's just you and me, huh?

Astrid: Nope, just you. (runs away, leaving Hiccup)

[The Gronckle fires at them, but misses. Hiccup loses his shield and runs after it, the dragon hot on his heels]'

Gobber: One shot left! Hiccup!

[The Gronckle corners Hiccup, taking its aim. Gobber quickly tugs it away, causing it to misfire its last shot, and locks it up back in its cage]

Gobber (cont.): And that's six! Go back to bed, ya overgrown sausage! You'll get another chance, don't you worry. [to Hiccup] Remember: a dragon will always -- always -- go for the kill.

[Scene cuts to Hiccup trekking through the forest again]

Hiccup: [weighing the bola with his hands] So, why didn't you?

[Hiccup enters a cove, surveying its emptiness]

Hiccup (cont.): Well, this was stupid. (He finds some shiny black dragon scales on the floor. He picks one up.)

[The Night Fury swoops past him, but falls back onto the ground, trying to settle down on the cove. Hiccup hides at the entrance and tries to make a sketch of it]

Hiccup (cont.)Why don't you just... fly away?

[As he makes a sketch, he notices the Night Fury is missing one of its tail fins. He erases the fin on his drawing but he slips and drops his pencil, drawing the Night Fury's attention. It stares up at him in recognition.]

[Scene cuts to the Meade Hall]

Gobber (o.s.): Alright. Where did Astrid go wrong in the ring today?

Astrid: I mistimed my somersault dive. It was sloppy. It threw off my reverse tumble.

Ruffnut: [Sarcastically] Yeah, we noticed.

Snotlout: No, no, you were great. That was so "Astrid".

Gobber: She's right, you have to be tough on yourselves. Where did Hiccup go wrong?

Ruffnut: Uh, he showed up?

Tuffnut: He didn't get eaten.

Astrid: He's never where he should be.

Gobber: Thank you, Astrid. You need to live and breathe this stuff. The Dragon Manual. Everything we know about every dragon we know of.

[Thunder roars]

Gobber (cont.): No attacks tonight. Study up.

Tuffnut: Wait, you mean, read?

Ruffnut: While we're still alive?

Snotlout: Why read words when you can just kill the stuff the words tell you stuff about?

Fishlegs: Oh! I've read it like, seven times. There's this water dragon that sprays boiling water at your face. And--And there's this other one that buries itself for like a week--

Tuffnut: Yeah, that sounds great. See, there was a chance I was going to read that...

Ruffnut: ...But, now...

Snotlout: You guys read, I'll go kill stuff.

Fishlegs: Oh, and there's this other one that has these spines that look like trees...

Hiccup: So I guess we'll share?

Astrid: Read it.

[The teens leave Hiccup alone in the hall.]

Hiccup: All mine then. Wow, okay. So, I'll see you, uh... [Door slams] tomorrow.

[He flips open the book, reading its contents]

Hiccup: Dragon classifications. Strike Class, Fear Class, Mystery Class.

Hiccup (cont.): Thunderdrum: This reclusive dragon inhabits sea caves and dark tide pools. When startled, the Thunderdrum produces a concussive sound that can kill a man at close range. Extremely dangerous, kill on sight. Timberjack: This gigantic creature has razor sharp wings that can slice through full grown trees. Extremely dangerous, kill on sight. Scauldron: Sprays scalding water at its victim. Extremely dangerous. Changewing: Even newly hatched dragons can spray acid. Kill on sight. Gronckle, Zippleback, The Skrill, Boneknapper, Whispering Death. Burns its victims, buries its victims, chokes its victims, turns its victims inside-out. Extremely dangerous, extremely dangerous, kill on sight, kill on sight, kill on sight... [flips to the Night Fury page. No picture or information is shown on the page.] Night Fury: Speed, unknown. Size, unknown. The unholy offspring of lightning and death itself. Never engage this dragon. Your only chance: Hide and pray it does not find you.

[Scene cuts to several longships gliding through fog]

Stoick: I can almost smell them. They're close. Steady.

Stoick (cont.): Take us in.

Viking: Hard to port... for Helheim's gate.

[The boats disappear in the fog. A sudden jumpscare shows dragons attacking.]

[Scene cuts to the Arena, in the middle of a training session]

Hiccup: You know, I just happened to notice the book had nothing on Night Furies. Is there another book? Or a sequel? Maybe a little Night Fury pamphlet?

[A Nadder fires at him]

Hicup: WHOA!

Gobber: Focus, Hiccup! You're not even trying!

Gobber (cont.): Today is all about ATTACK! Nadders are quick and light on their feet! Your job is to be quicker and lighter!

Fishlegs: AAAAAH! I'm really beginning to question your teaching methods!

Gobber: Look for its blind spot. Every dragon has one. Find it, hide in it, and strike!

Ruffnut: Ugh! Do you ever bathe?

Tuffnut: If you don't like it, then just get your own blind spot!

Ruffnut: How about I give you one?!

[The Nadder attacks the twins]

Gobber: Blind spot, yes. Deaf spot? Not so much. Heh, heh, heh.

Hiccup: Hey, so how would one sneak up on a Night Fury?

Gobber: No one's ever met one and lived to tell the tale. [Snapping] NOW, GET IN THERE!

Hiccup: I know, I know, but hypothetically--

Astrid: [Whispering] Hiccup! Get down!

Snotlout: Watch out, babe. I'll take care of this. [tosses hammer at Nadder, but misses]

Astrid: Hey!

Snotlout: The sun was in my eyes, Astrid! What do you want me to do, block out the sun? I could do that, but I don't have time right now!

Hiccup: They probably take the daytime off. You know, like a cat. Has anyone ever seen one napping?

Gobber: Hiccup!

[The walls start toppling as Astrid starts leaping from wall to wall, the Nadder behind her. Astrid jumps off the last collapsing wall, right onto Hiccup]

Astrid: HICCUP!

Tuffnut: Oooh! Love on the battlefield!

Ruffnut: She could do better.

Hiccup: Just... let me... why don't you...

[Astrid yanks the axe off Hiccup's shield and swings it at the Nadder]

Gobber: Well done, Astrid.

Astrid: [to Hiccup] Is this some kind of a joke to you?! Our parents' war is about to become ours! Figure out which side you're on.

[Scene cuts to at the cove.]

[Hiccup approaches with a fish, leaving his shield behind]

[The Night Fury creeps out from behind rock. Sniffs at Hiccup and the fish, slowly approaches, then retreats upon seeing Hiccup's knife. Realizing the dragon feels threatened, Hiccup kicks his knife into water. The Night Fury relaxes and quickly acts friendly, and slowly takes the fish from Hiccup's hand, revealing a toothless mouth]

Hiccup: Huh. Toothless. I could've sworn you had...

[Toothless' teeth suddenly pop out of his gums and he snatches the fish, chomping it in half]

Hiccup (cont.): ...teeth. (Toothless approaches, sniffing Hiccup) Uh, uh, no, no, no. I-I don't have any more.

[Toothless regurgitates half of the fish, and proceeds to direct Hiccup through biting and swallowing it. Toothless then tries to return Hiccup's smile. He then snarls and flies away when Hiccup reaches towards him. He ignites a small patch of dirt and sleeps on top of it.]

[After some time, Toothless sleeps, hanging upside down like a bat, and wakes up to find Hiccup drawing Toothless in the sand, Toothless then use a branch to 'draw' Hiccup in the dirt and becomes angry when Hiccup steps on his lines. Hiccup steps over the lines to finally reach Toothless. Hiccup offers his hand to Toothless while looking away, Toothless finally trusts Hiccup enough to touch his nose to Hiccup's hand. Toothless snorts and runs away.]

[Scene cuts to on top the watch tower at night]

Gobber: ...And with one twist, he took my hand, and swallowed it whole. And I saw the look on his face: I was delicious. He must have passed the word, because it wasn't a month before another one of them took my leg.

Fishlegs: Isn't it weird to think that your hand was inside a dragon? Like if your mind was still in control of it, you could have killed the dragon from the inside by... crushing his heart, or something.

Snotlout: I swear, I'm so angry right now! I'll avenge your beautiful hand and your beautiful foot. I'll chop off the legs of every dragon I fight. With my face!

Gobber: Un-unh. It's the wings and the tails you really want. If it can't fly, it can't get away. A downed dragon is a dead dragon. Alright. I'm off to bed. You should be, too. Tomorrow we get to the big boys. Slowly but surely making our way up to the Monstrous Nightmare. But who'll win the honor of killing it?

Tuffnut: It's gonna be me. It's my destiny. See?

Fishlegs: [Gasp] Your Mom let you get a tattoo?

Tuffnut: It's not a tattoo. It's a birthmark.

Ruffnut: Okay, I've been stuck with you since birth, and that was never there before.

Tuffnut: Yes, it was. You've just never seen me from the left side until now.

[After hearing what Gobber said about how a dragon is unable to fly with injured tail or wings, Hiccup heads to the forge late at night, and makes a new tail-fin for Toothless to replace the one the Night Fury lost.]

[Hiccup is back at the cove, with a basket of fish and the prosthetic fin.]

Hiccup: Hey, Toothless. I brought breakfast. I hope you're hungry. Okay, that's disgusting. Uh... we've got some salmon, some nice Icelandic cod, and a whole smoked eel.

[Toothless roars in fear at the sight of the eel.]

Hiccup (cont.): No, no, no, no! It's okay. (throws the eel aside) Yeah, I don't really like eel much either.

[Toothless starts to eat the fish. While he's distracted, Hiccup sneaks toward his tail.]

Hiccup (cont.): Okay. That's it. That's it, just stick with good stuff. And don't you mind me. I'll just be back here... minding my own business.

[Hiccup tries to attach the new tail-fin.]

Hiccup (cont.): It's okay. Okay... okay... There. That's not too bad. It works.

[Toothless stops eating and perks up, seemingly realizing he might be able to fly again]

[Toothless takes off with Hiccup literally on his tail. They head towards a rock wall]

Hiccup (cont.): Whoa! No! No! No!

[Hiccup quickly adjusts the tail fin and they dodge the wall]

Hiccup (cont.)
OH, MY-- IT'S WORKING! YES! YES, I DID IT!

[Toothless realizes Hiccup is on his tail and throws him off. Unable to steer the fin on his own, he then crashes into the lake.]

Hiccup: AAAAAGGGGHHHHH! Yeah!

[Scene cuts to Arena, in amiddle of another training session. The arena fills with a greenish fog, obscuring the dragon.]

Gobber: Today is about teamwork. Now, a wet dragon head can't light its fire. The Hideous Zippleback is extra tricky. One head breathes gas, the other head lights it. Your job is to know which is which.

Fishlegs: Razor sharp, serrated teeth that inject venom for pre-digestion. Prefers ambush attack, by crushing its victims--

Hiccup: [On edge] Will you please stop that?!

Snotlout: If that dragon shows either of his faces, I'm gonna-- there!

[Snotlout and Tuffnut drench Astrid and Ruffnut, thinking they were the Zippleback.]

Ruffnut: Hey! It's us, idiots!

Tuffnut: Your butts are getting bigger. We thought you were a dragon.

Snotlout: Not that there's anything wrong with a dragon-esque figure-- Ow!

[Astrid punches Snotlout in the face, and Ruffnut throws her bucket at Tuffnut, who is then dragged into the wall of smoke.]

Astrid: Wait. [A tail knocks them off their feet]

Tuffnut: (running out of the mist, screaming) OH, I'M HURT! I AM VERY MUCH HURT!

Fishlegs: Chances of survival are dwindling into single-digits now. [One of the Zippleback heads emerges from the mist. Fishlegs throws water at its face, and it angrily spews out some green gas.]

Fishlegs (cont.): Oh. Wrong head.

[The head sprays a large stream of green gas, and Fishlegs runs off screaming. The head turns its attention to Hiccup and the other head comes into view, spitting electrical sparks]

Gobber: Fishlegs! Now, Hiccup!

[Hiccup throws the bucket of water at the spark-spitting head, but misses]

Hiccup: Oh, come on!

[The Zippleback pounces, both heads snarling at Hiccup]

Gobber: Hiccup!

[Hiccup reverses the Hideous Zippleback with a hidden eel.]

Hiccup: Back! Back! Back! BACK! Now, don't you make me tell you again! Yes, that's right! Back into your cage. Now think about what you've done.

[Hiccup shuts the door of the enclosure. He throws the eel inside, and the Zippleback cowers in terror. The teens and Gobber are shocked, and Fishlegs drops his bucket.]

Hiccup (cont.): Okay! So, are we done? Because I've got some things I need to, uh... Yep. I'll... see-see you tomorrow!

[Scene cuts to at the forge, Hiccup making a saddle]

[Scene cuts to at the cove, Hiccup presenting Toothless with the saddle]

Hiccup: Hey!

[Toothless playfully runs away from Hiccup.]

[Hiccup rides Toothless, tugging the prosthetic tail fin with a rope to change its position. The wind blows at them and they tumble backwards]

[Toothless crashes into a field of Dragon Nip and rolls in it comfortably.]

Hiccup (cont.): Whoa! [holds up Dragon Nip]

[Scene cuts to Hiccup still holding up the Dragon Nip, but at the Arena]

[Hiccup grounds a Gronckle during training by rubbing Dragon Nip on its nose.]

Fishlegs: What was that? Some kind of trick? What did you do?

Tuffnut: How'd you do that?

Ruffnut: It was really cool.

Fishlegs: Hey, Hiccup!

Snotlout: Hey, Hiccup, I've never seen a Gronckle do that before!

Hiccup: I left my axe back in the ring. You guys go on ahead. I'll catch up with you.

[Scene cuts to back at the cove]

[Hiccup puts Toothless to sleep by scratching him just below the chin.]

[Scene cuts back to at the Arena]

[Hiccup the puts the Deadly Nadder to sleep the same way during training.]

Tuffnut: Hiccup, you're totally going to come in first, there's no question.

[Scen cuts to back at the cove]

[Toothless chases a shiny light that Hiccup creates using the sun and a hammer.]

[Scene cuts to back at the Arena]

Gobber: Meet the Terrible Terror.

[The cage is opened and the Terrible Terror is revealed to be only the size of a chihuahua. The teens laugh at the tiny dragon.]

Tuffnut: Ha! That's like the size of my--

[The dragon attacks Tuffnut.]

Tuffnut (cont.): AH! GET IT OFF! OH, I'M HURT! I AM VERY MUCH HURT!

[The Terrible Terror chases a shiny light created by Hiccup's shield back into the enclosure]

Tuffnut (cont.): [to Astrid] Wow, he's better than you ever were.

[Scene cuts to at the forest]

[Astrid sees Hiccup holding a harness while throwing her axe at the trees in the forest. Hiccup runs away and loses a furious Astrid.]

[Scene cuts to at the cove]

[Hiccup practices new tail positions with Toothless, when the rope snaps and bends the safety hook, leaving rider and dragon attached.]

Hiccup: Oh, great.

[Hiccup sneaks Toothless into the blacksmith shop to remove the connecting cord.]

Viking: Hiccup.

[Toothless throws a bucket and Astrid hears the noise.]

Astrid (o.s.): Hiccup? Are you in there?

Hiccup: Astrid. Hey! Hi, Astrid. Hi, Astrid. Hi, Astrid.

Astrid: I normally don't care what people do, but you're acting weird. Well, weirder.

[Hiccup is pulled through the shutter doors. Astrid tries to see what happened, but doesn't notice Hiccup flying away with Toothless.]

[Scene cuts to at the pier, the destroyed longships from the expedition heading back]

Gobber: Well, I trust you found the nest at least?

Stoick: Not even close.

Gobber: Ah. Excellent.

Stoick: I hope you had a little more success than me.

Gobber: Well, if by success, you mean that your parenting troubles are over with, then... yes.

Phlegma: Congratulations, Stoick! Everyone is so relieved.

Starkard: Out with the old and in with the new, right?!

Hoark the Haggard: No one will miss that old nuisance!

Ack: The village is throwing a party to celebrate!

Stoick: He's gone?

Gobber: Yeah... most afternoons. But who can blame him? I mean the life of a celebrity's very rough. He can barely walk through the village without being swarmed by his new fans.

Stoick: Hiccup?

Gobber: Who would've thought, eh? He has this way with the beasts.

[Scene cuts to Toothless soaring across the ocean, Hiccup on his back]

Hiccup: Okay there, bud, we're gonna take this nice and slow. Here we go. Here we go... position three, no, four. Alright, it's go time. It's go time. Come on, buddy, come on, buddy! [changes tail fin position] Yes, it worked!

[Hiccup accidentally flies Toothless into one of the sea stacks.]

Hiccup (cont.): Sorry!

[Hiccup flies Toothless into another sea stack]

Hiccup (cont.): That was my fault.

[Toothless hits him with his ear]

Hiccup (cont.): Yeah, yeah, I'm on it. Position four, uh, three. Yeah! Go baby! Yes! Oh, this is amazing! The wind in my...

[The wind blows his cheat sheet out of his hand]

Hiccup (cont.): ... CHEAT SHEET! STOP!!

[Hiccup's diagram flies away and he tries to catch it, but unhooks the safety cord and falls. He tries to get back on the saddle, getting smacked with Toothless' tail in the process.]

Hiccup (cont.): NOOOOOO!!! Oh, gosh! Oh, gods! Oh, no! Alright! You gotta kind angle yourself! Okay, no, no, no... come back down towards me! Come back down-- YOW!

[Finally reattaching, the cheat sheet smacks into his face. Hiccup tries to memorize the sheet before smoothly swerving through rocks, swiftly changing tail positions.]

Hiccup (cont.): YEEAHHH! (Toothless shoots a blast of fire and flies through it) Ah, come on!

[Scene cuts to on a sea stack where Hiccup and Toothless are resting. Hiccup looks slightly singed by the fire earlier.]

[Toothless regurgitates a fish head for hiccup]

Hiccup: Uh... no thanks. I'm good.

[A flock of Terrible Terrors try to steal fish and Toothless tries to chase them away. One of them fights Toothless over a fish and loses. It tries to attack, only to be blasted in the mouth by Toothless, causing it to briefly inflate.]

Hiccup (cont.): Not so fireproof on the inside, are you? (He tosses the Terror a fish, which it swallows whole) There you go. Everything we know about you guys is wrong... (the Terror curls up next to Hiccup like a kitten, purring softly)

[Scene cuts to Hiccup's workshop.]

Hiccup: [sketching Toothless] Dad! You're back! Gobber's not here, so...

Stoick: I know. I came looking for you.

Hiccup: You did?

Stoick: You've been keeping secrets.

Hiccup: I... have?

Stoick: Just how long did you think you could hide it from me?

Hiccup: I don't know what you're...

Stoick: Nothing happens on this island without me hearing about it.

Hiccup: Oh?

Stoick; So. Let's talk about that dragon.

Hiccup: Oh, gods. Dad I'm so sorry. I was going to tell you. I just didn't know how to--

Hiccup (cont.): You're not... upset?

Stoick: What?! I was hoping for this!

Hiccup:Uh... you were?

Stoick: And believe me, it only gets better! Just wait 'till you spill a Nadder's guts for the first time! And mount your first Gronckle head on a spear! WHAT A FEELING! You really had me going there, son! All those years of the worst Viking Berk has ever seen! Odin, it was rough! I almost gave up on you! And all the while, you were holding out on me! OH, THOR ALMIGHTY! Ah. With you doing so well in the ring, we finally have something to talk about.

Stoick (cont.): Oh, I... brought you something. To keep you safe in the ring.

[Stoick holds up a Viking helmet and gives it to Hiccup]

Hiccup: [Sincerely] Wow. Thanks.

Stoick: Your mother would've wanted you to have it. It's half of her breast plate.

Stoick (cont.): Matching set. Keeps her close, y'know?

Stoick (cont.): Wear it proudly. You deserve it. You've held up your end of the deal.

Hiccup: I should really get to bed.

Hiccup and Stoick: Yes! Good! Okay. Good talk. See you back at the house. We should do this again. I'm great. Thanks for stopping by. Glad I stopped by, I hope you uh, like the hat. And for the... the breast hat.

Stoick: Well, uh... good night.

[Scene cuts to at the Arena]

Astrid: Stay out of my way! I'm winning this thing.


Hiccup; Good. Please, by all means.
Viking: You got it Astrid!
Astrid: This time! This time, for sure! AAAAAAAAAAAAAAAAAUGGGGGHHHHHHHH!

[Astrid sees the Gronckle on the ground, Hiccup standing beside it]
Astrid (cont.): NO! NO! SON OF HALF-TROLL, RAT-EATING MUNGE BUCKET!
Stoick: Wait! Wait!

Hiccup: So, later.

Gobber: Not so fast!
Hiccup: I'm kinda late for--
Astrid: What?! Late for what, exactly?!
Stoick: Okay, quiet down. The Elder has decided.
Gobber: You've done it! You've done it, Hiccup! You get to kill the dragon!
Stoick: Ha, ha! That's my boy!


Hiccup: [Sarcastically] Heh. Oh, yeah! Yes! I can't wait. I am so...

[Scene cuts to at the cove]

Hiccup: ...LEAVING! We're leaving. Let's pack up. Looks like you and me are taking a little vacation, forever. Ah, man... Aggh! What the-- What are you doing here?


Astrid: I want to know what's going on. No one just gets as good as you do. Especially you. Start talking! Are you training with someone?
Hiccup: Uh... training?
Astrid: It better not involve this!
Hiccup: I know this looks really bad, but you see...this is, uh... You're right! You're right! You're right. I'm through with the lies. I've been making... outfits. So, you got me. It's time everyone knew. Drag me back. Go ahead. Here we go.

[Astrid bends his arm backward, making an audible cracking noise, forcing him to the ground.]

Hiccup (cont.): OW! Why would you DO that?!
Astrid: That's for the lies.
[Astrid drops her axe handle on his gut]

Astrid (cont.): And THAT'S for everything else.

Hiccup: [In pain] Oh, man.
[Toothless comes from behind a rock, growling]

Astrid: Get down! RUN! RUN!
Hiccup: NO! No. It's okay! It's okay... she's a friend. It's okay. You just scared him.
Astrid: I scared him?! Who is "him"?
Hiccup: Astrid, Toothless. Toothless, Astrid.

[Astrid runs away, threatening to expose them]

Hiccup: Da, da-da! We're dead!

[Toothless leaves]

Hiccup (cont.): Whoa, whoa, whoa, whoa! Where do you think you're going?!

[Astrid's running through the forest, Toothless suddenly swoops down and picks her up]

Astrid: AH! Oh, Great Odin's ghost! Oh, this is it!

[Toothless deposits her in a pine tree]


Astrid (cont.): Hiccup, get me down from here!
Hiccup: You have to give me a chance to explain.
Astrid: I am not listening to ANYTHING you have to say!
Hiccup: Then I won't speak. Just let me show you. Please, Astrid.
Astrid: Now, get me down.
Hiccup: Toothless, down. Gently. See? Nothing to be afraid of.

[Toothless blasts off the tree, Astrid sliding off his back]


Hiccup (cont.): WHOA!! TOOTHLESS! WHAT IS WRONG WITH YOU?! BAD DRAGON! He's not usually like this. Oh, no...Toothless, what are you doing?! We need her to like us. And now the spinning. Thank you for nothing, you useless reptile.
Astrid: Okay! I am sorry! I'm sorry! Just get me off of this thing!

[Toothless slows down and glides above the clouds slowly]


Astrid (cont.): Alright, I admit it. This is pretty cool. It's... amazing. He's amazing. So what now? Hiccup, your final exam is tomorrow. You know you're going to have to kill a... [Whispers to Hiccup so Toothless doesn't hear] kill a dragon.


Hiccup: Don't remind me.

[Toothless suddenly dodges]

Hiccup (cont.): Toothless, what's happening? Whoa, what is it?

[They find themselves in a middle of a flock of dragons. They are carrying food en masse toward the island.]


Hiccup (cont.): Get down!
Astrid: What's going on?
Hiccup: I don't know. Toothless. You've got to get us out of here, bud.

[Toothless ignores them]
Hiccup (cont.): It looks like they're hauling in their kill.


Astrid: Uh, what does that make us?
Hiccup: What my dad wouldn't give to find this.

[They approach the Dragon's Nest in a Volcano. Swarms of dragons throw their offerings into the lava below.]

Hiccup: [Sarcastically] It's satisfying to know that all of our food has been dumped down a hole.


Astrid: They're not eating any of it.

[A Gronckle delivers only a single tiny fish. A roar is heard from below and the Gronckle squeals in terror as something big seizes it]


Astrid What... is that?

[A colossal dragon emerges from the lava pit and eats the Gronckle alive. All the other dragons cower in terror before the giant creature.]


Hiccup: Alright, buddy, we gotta get out of here. Now!

[Toothless escapes and all the dragons flee. The Red Death lunges at Toothless but grabs a Zippleback instead. Toothless and his riders fly off to a beach and land.]

Astrid: No, it totally makes sense. It's like a giant beehive. They're the workers, and that's their queen. It controls them. Let's find your Dad.


Hiccup: No, no! Not yet. They'll... kill Toothless. Astrid, we have to think this through carefully.
Astrid: Hiccup, we just discovered the Dragons' Nest. The thing we've been after since Vikings first sailed here. And you want to keep it a secret?! To protect your pet dragon?! Are you serious?!
Hiccup: Yes.
Astrid: Okay. Then what do we do?
Hiccup: Just give me until tomorrow. I'll figure something out.
Astrid: Okay.


Astrid (cont.): [punches him] That's for kidnapping me.
Astrid (cont.): [kisses him] That's for... everything else.
Hiccup: What are you looking at?

[Scene cuts to at the Arena]

Stoick: Well, I can show my face in public again! If someone had told me that in just few short weeks, Hiccup would go from being, well... Hiccup, to placing first in Dragon Training... Well, I would've tied him to a mast and shipped him off for fear he'd gone mad. Yes! And you know it! But here we are. And no one's more surprised...or more proud than I am. Today, my boy becomes a Viking. TODAY, HE BECOMES ONE OF US!


Astrid: Be careful with that dragon.
Hiccup: (Glances at Stoick) It's not the dragon I'm worried about.
Astrid: What are you gonna do?
Hiccup: Put an end to this.


[She eyes him, dubious.]

Hiccup (cont.): I have to try. Astrid, if something goes wrong... just make sure they don't find Toothless.
Astrid: I will. Just... promise me it won't go wrong.
Gobber: It's time, Hiccup. Knock him dead.
Tuffnut: Show 'em how it's done, my man!
[Hiccup enters the Arena and picks a dagger from the weapons stand]

Stoick: Hrmph. I would've gone for the hammer.


Hiccup: I'm ready.

[They release the Monstrous Nightmare. Hiccup approaches the Nightmare slowly, raising his hand like how he did to Toothless]
Stoick: What is he doing?
Hiccup: It's okay. It's okay. [throws helmet onto floor] I'm not one of them.
Stoick: Stop the fight.
Hiccup: No! I need you all to see this. They're not what we think they are. We don't have to kill them.
Stoick: I SAID STOP THE FIGHT! [slams hammer against the Arena railings, agitating the Nightmare] Out of my way!

[Frightened, the Nightmare attacks]


Astrid: Hiccup! HICCUP! [enters the ring]

[Meanwhile, at the cove, Toothless hears Hiccup's screams and races to the Arena]


Stoick: This way!

[Astrid escapes, but Hiccup is pinned under the Nightmare's claws. Suddenly, a resonating blast fires at the Arena's railing. Toothless jumps into the Arena. The smoke clears up, revealing the two dragons fighting]
Gobber: Night Fury!


Hiccup: Alright, Toothless, go. Get out of here!


Vikings: Night Fury!
Hiccup: Go! GO!
Viking: Take it alive!
Astrid: Stoick, no!
Hiccup: No, Dad, he won't hurt you!
Hiccup (cont.): No, don't! You're only making it worse! Toothless, STOP!
Hiccup (cont.): No! NOOOOO!
Viking: Get him!
Hiccup: No! Please, jus-- just don't hurt him! Please don't hurt him.
Stoick: Put it with the others!

Stoick: I should have known. I should have seen the signs.
Hiccup: Dad--
Stoick: We had a deal!
Hiccup: I know we did... But that was before... Ugh, it's all so messed up!
Stoick: So everything in the ring... A trick?! A lie?
Hiccup: I screwed up. I should have told you before now. Take this out on me, be mad at me, but please... just don't hurt Toothless.
Stoick: The dragon? That's what you're worried about? Not the people you almost killed?!
Hiccup: He was just protecting me! He's not dangerous.
Stoick: They've killed HUNDREDS OF US!
Hiccup: AND WE'VE KILLED THOUSANDS OF THEM! They defend themselves, that's all! They raid us because they have to! If they don't bring enough food back, they'll be eaten themselves. There's something else on their island, Dad... it's a dragon like--
Stoick: --Their island? So you've been to the nest.
Hiccup: Did I say nest?
Stoick: How did you find it?!
Hiccup: No... I didn't. Toothless did. Only a dragon can find the island.
Hiccup (cont.): Oh, no, no. Dad, no! Dad! It's not what you think! You don't know what you're up against! It's like nothing you've ever seen! Dad, please! I promise you that you can't win this one! No! Dad, no! FOR ONCE IN YOUR LIFE, WOULD YOU PLEASE JUST LISTEN TO ME!
Stoick: You've thrown your lot in with them. You're not a Viking. You're not my son.
Stoick (cont.): READY THE SHIPS!

[Before walking to the docks, Stoick staggers back, realizing the mistake he just made.]

Stoick: Set sail! We head for Helheim's Gate.
Stoick (cont.):  (to a chained Toothless) Lead us home, Devil.


Astrid: It's a mess. You must feel horrible. You've lost everything. Your father, your tribe, your best friend...
Hiccup: Thank you for summing that up. Why couldn't I have killed that dragon when I found him in the woods? It would have been better for everyone.
Astrid: Yep. The rest of us would have done it. So why didn't you?... Why didn't you?
Hiccup: I don't know. I couldn't.
Astrid: That's not an answer.
Hiccup: Why is this so important to you all of a sudden?
Astrid: Because I want to remember what you say, right now.
Hiccup: Oh, for the love of-- I was a coward! I was weak! I wouldn't kill a dragon!
Astrid: You said "wouldn't" that time.
Hiccup: Whatever! I wouldn't! Three hundred years, and I'm the first Viking who wouldn't kill a dragon!
Astrid: First to ride one, though. So...?
Hiccup: ...I wouldn't kill him because he looked as frightened as I was. I looked at him, and I saw myself.
Astrid: I bet he's really frightened now. What are you going to do about it?
Hiccup: Eh, probably something stupid.
Astrid: Good. But you've already done that.
Hiccup: Then something crazy!
Astrid: That's more like it!

Stoick: Sound your positions. Stay within earshot.
Viking #1: Here.
Viking #2: One length to your stern.
Viking #3: On your starboard flank.
Viking #4: Three widths to port.
Viking #5: Ahead, at your bow.
Viking #6: Haven't a clue.
Gobber: Listen... Stoick... I was overhearing some of the men just now and, well, some of them are wondering what it is we're up to here-- not me of course, I know you're always the man with the plan-- but some, not me, are wondering if there is in fact a plan at all, what it might be?
Stoick: Find the nest and take it.
Gobber: Ah. Of course. Send them running. The old Viking fallback. Nice and simple.
Stoick: Shhh.
Stoick (cont.): Step aside.
Viking: Bear to port.

Fishlegs (o.s.): If you're planning on getting eaten, I'd definitely go with the Gronckle.
Tuffnut: You were wise to seek help from the world's most deadly weapon. That's me.
Hiccup: Uh...
Snotlout: I love this plan!
Hiccup: I didn't...
Ruffnut: You're crazy! I like that...
Astrid: So? What is the plan?

Gobber: Ah. I was wondering where that went.
Stoick: Stay low and ready your weapons. We're here.

[At the arena, Hiccup has released the Monstrous Nightmare. He gently guides it toward Snotlout, who is scared and grabs a knife.]

Astrid: Uh-uh.
Snotlout: Wait! What are you--?!
Hiccup: Relax. It's okay... it's okay. [Snotlout bonds with the Nightmare]
Snotlout: Where are you going?!
Hiccup: You're going to need something to help you hold on.

[The teens glance at the three other dragons, all out of their cages]

Stoick: When we crack this mountain open, all hell is going to break loose.
Gobber: In my undies. Good thing I brought extras.
Stoick: No matter how this ends, it ends today.

[Catapults break a hole into the side of the mountain, and a flaming ball of straw reveals thousands of dragons inside. Stoick charges in screaming loudly, and all the dragons flee in terror, not a single one attacking.]


Gobber: Is that it?
Spitelout: We've done it! [A loud roar is heard and the mountain starts to crack]
Stoick: This isn't over. Form your ranks! Hold together!
Stoick (cont.): Get clear!
Gobber: Beard of Thor... what is that? [The Red Death, a dragon more that five times the size of the Vikings' ships, breaks out of the mountain, roaring furiously]


Stoick: Odin, help us. Catapults!
Viking #3: Get to the ships!
Stoick: No! NO!
Gobber: Heh. Smart, that one.
Stoick: I was a fool. [To Spitelout] Lead the men to the far side of the island.
Spitelout: Right. Everybody to the far side of the island!
Stoick: Gobber, go with the men.
Gobber: I think I'll stay, just in case you're thinking of doing something crazy.
Stoick: I can buy them a few minutes if I give that thing someone to hunt.
Gobber: Then I can double that time.
Stoick: HERE!
Gobber: Oh, no, HERE!
Gobber (cont.): Come on! Bite me!
Stoick: No, me!
Hiccup: Ruff, Tuff, watch your backs! Move, Fishlegs!
Tuffnut: LOOK AT US! WE'RE ON A DRAGON! WE'RE ON DRAGONS! ALL OF US!
Hiccup: Up, let's move it!
Gobber: Every bit the boar-headed, stubborn Viking you ever were!
Hiccup: Fishlegs, break it down!
Fishlegs: Okay! Heavily armored skull and tail made for bashing and crushing! Steer clear of both! Small eyes, large nostrils! Relies on hearing and smell!
Hiccup: Okay! Lout, Legs, hang in its blind spot! Make some noise, keep it confused! Ruff, Tuff, find out if it has a shot limit! Make it mad!
Ruffnut: That's my specialty!
Tuffnut: Since when?! Everyone knows I'm more irritating! See?!
Hiccup: Just do what I told you! I'll be back as soon as I can!
Snotlout: Don't worry, we got it covered!
Fishlegs: Yeah!

Tuffnut: Troll!
Ruffnut: Butt-Elf!
Tuffnut: Bride of Grendel!
Fishlegs: Uh, this thing doesn't have a blind spot!

Hiccup: There!
Hiccup (cont.): Go help the others!
Hiccup (cont.): Okay, hold on. Hold on.

Snotlout: It's working!
Fishlegs: Yeah! It's working!
Snotlout: Agghh!
Fishlegs: I've lost power on the Gronckle! SNOTLOUT! DO SOMETHING!
Fishlegs (cont.): I'm okay! Less okay...!
Snotlout: I can't miss! What's wrong buddy? Got something in your eye?
Astrid: Yeah! You're the Viking!
Snotlout: Whoa!

Hiccup: Dad?
Hiccup (cont.): You got it, bud.
Stoick: Hiccup. I'm sorry... for-- for everything.
Hiccup: Yeah, me too.
Stoick: You don't have to go up there.
Hiccup: We're Vikings. It's an occupational hazard.
Stoick: I'm proud to call you my son.
Hiccup: Thanks, Dad.

Astrid: He's up! Get Snotlout out of there!
Twins: I'm on it!
Tuffnut: I'm on it first! I'm ahead of you!
Ruffnut: Hey! Let me drive!
Tuffnut: I can't believe that worked!
Gobber: Night Fury! Get down!
Hiccup: Did you get her?
Astrid: Go.

Hiccup: That thing has wings! Okay, let's see if it can use them!
Hiccup (cont.): Do you think that did it?
Hiccup (cont.): Well, he can fly.
Hiccup: Okay, Toothless, time to disappear! Come on, bud!
Hiccup (cont.): Here it comes!
Hiccup (cont.): Watch out! Okay, time's up! Let's see if this works.
Hiccup (cont.): COME ON! IS THAT THE BEST YOU CAN DO?!
Hiccup (cont.): Stay with me, buddy. We're good. Just a little bit longer.
Hiccup (cont.): Hold, Toothless... NOW!
Hiccup (cont.): No! NO!

Stoick: Hiccup! Hiccup! Son!
Stoick (cont.): Hiccup.
Stoick (cont.): Oh, son... I did this...
Stoick (cont.): I'm so...I'm so sorry...
Stoick (cont.): Hiccup! Oh, he's alive! You brought him back alive!
Stoick (cont.): Thank you... for saving my son.
Gobber: Well, you know... most of him.

Hiccup: Oh, hey, Toothless. I'm happy to see you too, buddy. [Toothless steps on his groin] OW! What-- Uh, I'm in my house. You're in my house! Uh... does my dad know you're in here?!
Hiccup (cont.): Okay, okay-- no, Toothless! Aw, come on...
Hiccup (cont.): Okay... okay... Thanks, bud.
Hiccup (cont.): Toothless, stay here.
Snotlout: Come on, guys, get ready! Hold on tight! Here we go!
Hiccup: I knew it. I'm dead.
Stoick: No, but you gave it your best shot. So? What do you think?
Viking #1: Hey, look! It's Hiccup!
Viking #2: Hiccup, how you doin' mate?
Viking #3: It's great to see you up and about.
Stoick: Turns out all we needed was a little more of... this.
Hiccup: You just gestured to all of me.
Gobber (o.s.): Well, most of you. [Gestures to his metal leg] That bit's my handiwork. With a little "Hiccup Flair" thrown in. You think it'll do?
Hiccup: I might make a few tweaks.
Astrid: [Punches Hiccup] That's for scaring me.
Hiccup: What, is it always going to be this way? Cause...

[Astrid kisses Hiccup.]

Hiccup (cont.): ...I could get used to it.
Gobber: Welcome home.
Viking: Night Fury! Get down!

Hiccup: You ready?
Hiccup (v.o.): This... is Berk. It snows nine months of the year, and hails the other three. Any food that grows here is tough and tasteless. The people that grow here are even more so. The only upsides are the pets. While other places have...ponies or parrots, we have... dragons!
`);
