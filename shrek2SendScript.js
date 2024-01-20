async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line),
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.textContent = line
		textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));

		(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250))
	}

	return lines.length
}

enviarScript(`
SHREK 2

A light shines down on a storybook. It opens, and a voice turns the pages and reads it. 

CHARMING: Once upon a time in a kingdom far far away, the king and queen were blessed with a beautiful baby girl. And throughout the land, everyone was happy. Until the sun went down and they saw that their daughter was cursed with a frightful enchantment that took hold each and every night. Desperate they sought the help of a fairy godmother who had them lock the young princess away in a tower, there to await the kiss of the handsome prince charming!

[[Prince Charming]], wearing a [[Knights|knight's armor]] and red cape, rides on horseback. He races through snowy mountains and barren desert.

CHARMING: It was he who would chance the perilous journey through blistering cold and scorching desert traveling for many days and nights, risking life and limb to reach the [[Dragon's Keep|Dragon’s Keep]]. 

'''EXT. - DRAGON'S KEEP'''

Prince Charming arrives at the Dragon's Keep, an ominous castle surrounded by a moat of lava, but sees that the bridge leading across the lava is destroyed. Charming uses his bow to shoot a roped arrow to a wooden post on the other side and uses it as a zipline. He looks up at a tower that rises above the rest of the castle, a light shining from its window. He enters the Dragon's Keep.

'''INT. - DRAGON'S KEEP'''

CHARMING: For he was the bravest...

Charming takes off his helmet, revealing himself to be the narrator's voice. He continues to speak aloud.

CHARMING: ...and most handsome… 

He takes off his hair net and dramatically swishes his hair.

CHARMING''':''' ...in all the land. And it was destiny that his kiss... 

He sprays air freshener in his mouth.

CHARMING: ...would break the dreaded curse. 

Charming continues through the abandoned castle and reaches the [[Princess Fiona's Tower|princess's tower]]. 

'''INT. - THE PRINCESS'S TOWER'''

He enters the princess's room and makes his way to her bed where a figure lays down, obscured by the bed's curtains.

CHARMING: He alone would climb to the highest room of the tallest tower to enter the princess’s chambers, cross the room to her sleeping silhouette, pull back the gossamer curtains to find her--

Charming pulls the curtain and gasps; the figure is no princess--its the [[Big Bad Wolf]]. The wolf, busy reading a magazine, is annoyed by the interruption.

WOLF: What?

CHARMING: [[Fiona|Princess…Fiona]]?

WOLF: No!

CHARMING: Oh, thank heavens. Where is she?

WOLF: She’s on her honeymoon.

CHARMING: Honeymoon? With whom?!

<nowiki>----</nowiki>

We see various scenes from [[Shrek (character)|Shrek]] and Fiona's honeymoon. They break into a giant gingerbread house and stay night. In the morning [[Little Red Riding Hood]] knocks on the door, fleeing in terror after Shrek and Fiona answer the door. They take the basket she left and have a picnic on the beach. A wave crashes over Shrek and Fiona as they makeout in the sand and the [[The Little Mermaid|Little Mermaid]] takes Fiona's place. Fiona drags the mermaid by the tail, and throws her into the sea into a group of sharks. Shrek has some [[dwarves]] forge Fiona's wedding ring. Fiona beats up an angry mob chasing after them. They take turns farting in a mud bath, used fairies trapped in jars for light. They kiss in the moonlight, transitioning to... 

'''EXT. - [[Swamp|SWAMP]]'''

...their arrival back at Shrek's swamp.

SHREK''':''' It’s so good to be home!

Shrek scoops Fiona about in his arms and walks to the door of his home.

SHREK''':''' Just you and me and…

Singing can be heard from inside. 

'''INT. - SHREK'S HOME'''

They open the door to find [[Donkey]] laying in Shrek's chair.

DONKEY: Two can be as bad as one…

SHREK: Donkey?

Shrek sets Fiona down.

DONKEY''':''' Shrek! Fiona! Well aren’t you two a sight for sore eyes! Give us a hug, Shrek, you old love machine. [chuckles] And look at you, Mrs. Shrek. How ‘bout a side of sugar for the steed?

SHREK: Donkey, what are you doing here?

DONKEY: Oh! I was just taking care of your love nest for you.

SHREK: Oh, you mean like… sorting the mail and watering the plants?

Shrek gestures to piles of mail stacked on a stool and potted plants that have withered away.

DONKEY: Yeah, and feeding the fish!

SHREK: I don’t have any fish.

DONKEY: You do now. I call that one Shrek and the other Fiona.

Donkey walks over to a fish bowl. The water is rancid and the two fish are clearly dead.

DONKEY: That Shrek is a rascally devil. Get your…[mumbling]

SHREK: Oh, will you look at the time! Well I guess you’d better be going.

Shrek opens the front door and beckons Donkey to head out.

DONKEY: Hey wait a minute, don’t you want to tell me all about your trip? Or how about a game of Parcheesi?

Donkey runs back over to the fireplace and Shrek groans in frustration.

FIONA: Um, actually--Donkey? Shouldn’t you be getting home to Dragon?

DONKEY: Oh, yeah, that. I don’t know. She’s been all moody and stuff lately...so I thought I’d move back in with you guys!

FIONA: Well you know we’re always happy to see you, Donkey.

Fiona kneels down to pat Donkey on the head, then Shrek puts his hands on her shoulders.

SHREK: But Fiona and I are married now. We need a little time, you know, to be together.

Donkey smiles and stares at Shrek, not taking the hint.

SHREK: Just with each other.

Donkey continues to stare.

SHREK: Alone.

DONKEY: Say no more, say no more. You don’t have to worry about a thing. I will always be here to make sure nobody bothers you!

SHREK: Donkey!

DONKEY: Yes, roomie?

SHREK: You’re bothering me.

DONKEY: Oh, OK. All right, cool. I guess uh… me and Pinocchio was going to catch a tournament, anyway, so uh.... maybe I’ll see y’all Sunday for a barbecue or something.

Donkey solemnly walks out the door and shuts it behind him.

SHREK: He’ll be fine. Now, where were we?

Fiona puts her hands on his arm.

SHREK: Oh. I think I remember.

The two giggle and Shrek takes her in his arms. He leans her over for a kiss, but they are interrupted by Donkey, who is suddenly standing next to them.

SHREK: Donkey!

In his surprise, Shrek drops Fiona to floor. He leans down to pick her up.

DONKEY: I know, I know! ''Alone''! I’m going! I’m going! Hey, but what do you want me to tell these other guys?

Donkey opens the door, and Shrek and Fiona look up, puzzled. 

'''EXT. - SHREK'S HOME'''

A group of uniformed men stand outside, playing a fanfare with their trumpets and drums. A page steps forth with a scroll in his hand. After the fanfare is over, one of the trumpeters begins play the Hawaii Five-0 Theme Song. The page smacks him on the head with his scroll. Shrek and Fiona step outside of the house.

PAGE: Enough, Reggie. [clears throat] "Dearest Princess Fiona. You are hereby summoned to the Kingdom of Far, Far Away for a royal ball in celebration of your marriage... 

Upon hearing this news Shrek looks uneasy, while Fiona is smiling.

PAGE: ...at which time the King will bestow his royal blessing… upon you and your…eh...

He looks up from the scroll and stares at Shrek.

PAGE: uh…Prince Charming. Love, the King and Queen of [[Far Far Away]]. A.K.A. Mum and Dad."

FIONA: Mum and Dad?

SHREK: Prince Charming?

DONKEY: Royal ball?! Can I come?

SHREK: We’re not going.

FIONA & DONKEY: What?!

SHREK: I mean, don’t you think they might be a bit… shocked to see you like this?

FIONA: Well, they might be a bit surprised. But they’re my parents, Shrek. They love me. And don’t worry, they're gonna love you too.

SHREK: Yeah, right. Somehow I don’t think I’ll be welcome at the country club.

FIONA: Will you Stop it? They’re not like that.

SHREK: Then how do you explain Sergeant Pompous and the Fancy Pants Club Band?

The page gives a huff, and walks off with the rest of the men.

FIONA: Oh, come on! You could at least give them a chance.

SHREK: To do what? Sharpen their pitchforks?

FIONA: No! They just want to give you their blessing.

SHREK: Oh, great. Now I need their blessing?

FIONA: well If you want to be a part of this family, yes!

SHREK: And who says I want to be part of this family?

FIONA: Uh, you did! When you married me?!

SHREK: Well, there’s some fine print for you!

FIONA: Ugh! So that’s it, you won’t come?

Shrek: Trust me. It’s a bad idea. We are not going! And that’s final!

After a silence, we cut to Fiona throwing the last of their luggage into the back of their carriage

DONKEY: Hey come on Shrek! We don’t want to hit traffic!

[[Gingerbread Man|GINGY]]: Don’t worry! We’ll take care of everything.

Shrek reluctantly leaves the house. Gingy, [[Pinocchio]], the [[Three Little Pigs]], the Big Bad Wolf, and the [[The Three Blind Mice|Three Blind Mice]] run inside. One of the mice is running to catch up.

MOUSE: Hey, wait for me! 

The door shuts and the mouse runs into it. Shrek groans as he hears sounds of glass breaking and music playing. Shrek, Fiona, and Donkey get in the carriage and set out for Far Far Away.

DONKEY: [singing]: Hit it! Move ‘em on! Head ‘em up! Head ‘em up, move ‘em on! Head ‘em up! Move ‘em down! Rawhide! Move 'em on! Head ‘em up! Head ‘em up! Move ‘em on! Move ‘em on! Head ‘em up! Rawhide! Ride ‘em up! Move ‘em on! 

'''COUNTRYSIDE'''

Donkey continues to sing.

DONKEY: Head ‘em up! Head ‘em up! Move ‘em on! Rawhide! Knock ‘em out! Pound ‘em dead! Make ‘em tea! Buy ‘em drinks! Meet their mamas! Milk ‘em hard! Rawhide! Yee-haw!

Later, they reach a sign that reads "700 miles to Far Away".

DONKEY: Are we there yet?

SHREK: No.

'''MOUNTAINS'''

They are now riding in the rain over rocky terrain.

DONKEY: Are we there yet?

FIONA: Not yet.

The are now in snowy mountains. A sign reads "200 miles to Away".

DONKEY: OK, are we there yet?

FIONA: No.

More time passes and they are riding through thick snow.

DONKEY: Are we there yet?

SHREK: ''No''!

They are riding out of the snowy area.

DONKEY: Are we there yet?

SHREK: Yes.

DONKEY: Really?

SHREK: No!

They pass by a waterfall and over a bridge.

DONKEY: Are we there yet?

FIONA: No!

'''FOREST'''

They pass a sign that reads "100 miles to Far Far Away".

DONKEY: Are we there yet?!

SHREK: ''No, we are not''!

Later as they pass through the forest, their dwarf driver is now covering his ears as he holds the reigns.

DONKEY: ''Are we there yet''?!

SHREK & FIONA: ''No''!!

Shrek begins mimicking Donkey.

DONKEY: Are we there yet?

SHREK: Are we there yet?

DONKEY: Hey that’s not funny. 

SHREK: Hey that’s not funny. 

DONKEY: Hey that’s really immature.

SHREK: Hey that’s really immature.

DONKEY: See this is why nobody likes ogres.

SHREK: See this is why nobody likes ogres.

DONKEY: Alright your loss!

SHREK: Alright your loss!

DONKEY: I’m gonna just stop talking!

SHREK: Finally!

DONKEY: But this is taking forever, Shrek. And there ain't no in-flight movie or nothing!

SHREK: The Kingdom of Far, Far Away, Donkey. That’s where we’re going. ''Far'', ''far''… [softly] away!

DONKEY: All right, all right, I get it. I’m just so darn bored!

SHREK: Well, find a way to entertain yourself!

Donkey sighs. After a pause he sighs heavily. Then he makes a popping sound with his mouth. Then pops again. And again.

SHREK: Oh! For five minutes. Could you not be yourself…''for five minutes''!

Fiona leans against the window and looks out. She looks back to see Donkey's mouth lean forward. She braces herself and Donkey makes the popping noise again.

SHREK: Ahhh! Are we there yet?!

FIONA: [chuckles] Yes!

DONKEY: Oh, finally!

Off in the distance they see the large kingdom of Far Far Away.

'''INT. - KINGDOM OF FAR FAR AWAY''' 

They pass through the front gates.

DONKEY: Wow! It’s going to be champagne wishes and caviar dreams from now on!

The streets are paved and there are buildings everywhere. People fill the sidewalks and carriages fill the road. 

DONKEY: Hey, good-looking! We’ll be back to pick you up later! Ooo, pantyhose!

Fiona looks out with excitement, while Shrek remains cautious. 

SHREK: We are definitely not in the swamp anymore.

A crossing guard dressed in full armor brings them to a halt as a limousine-esque carriage passes by. 

GUARD: Halt!

A man walks up to the horses and cleans them off, and the carriage driver tosses him a coin.

WOMAN: Hey, everyone, look!

Two women take note of their carriage and start following it. Soon, others take notice and join in. Fiona turns to Shrek, who is clearly not enjoying this. She gives him a reassuring smile, and he tries to return one back.

DONKEY: Hey, ladies! Nice day for a parade, huh? Yeah! You workin' that hat!

A loud crowd has now amassed behind them. They head up the avenue and towards the palace further up the road.

DONKEY: Swimming pools! Movie stars!

'''EXT. - [[Far Far Away Palace|FAR FAR AWAY PALACE]]'''

A cheering crowd is gathered in front of the palace, filling up the entirety of the square. Confetti rains and fanfare plays. The king and queen stand waiting in front of the palace doors. The carriage pulls and stops in front of the red carpet leading to the palace. An announcer pulls out a scroll and reads it aloud.

ANNOUNCER: Announcing the long-awaited return of the beautiful Princess Fiona and her new husband!

The crowd cheers.

FIONA: Well, this is it.

[[King Harold|KING HAROLD]]: This is it.

ANNOUNCER: This is it.

A man with a box of doves gets ready to open it.

MAN: This is it.

The birds are released and a fanfare is played as Shrek, Fiona, and Donkey step out of the carriage. The crowd gasps, the fanfare dies off, and one of the doves smacks into a wall and falls dead to the ground. The king and queen stand with mouths wide open. It is totally silent. A baby starts crying.

DONKEY: Uh… why don’t you guys go ahead? I’ll park the car.

Donkey jumps into the carriage and the driver starts riding off. Shrek takes takes Fiona's hand and starts walking forward.

SHREK: So…heh heh...you still think this was a good idea?

FIONA: Of course! Look! Mom and Dad look happy to see us.

The king and queen start walking forward and talk amongst themselves.

KING HAROLD: Who on earth are they?

[[Queen Lillian|QUEEN LILLIAN]]: I think that’s our little girl.

HAROLD: That’s not little! That’s a really big problem! Wasn’t she supposed to kiss Prince Charming and break the spell?

LILLIAN: Well, he’s no Prince Charming, but they do look--

SHREK: Happy now? We came. We saw them.

Shrek nervously chuckles as they pass by a few men carrying pitchforks.

SHREK: Now let’s go before they light the torches.

FIONA: They’re my parents!

SHREK: Hello? They locked you in a tower!

FIONA: Hey! That was for my ow--

HAROLD: Good! Now here’s our chance. Let’s go back inside and pretend we’re not home!

Harold tries to start walking back but Lillian urges him forward.

LILLIAN: Harold, we have to be--

SHREK: Quick! While they’re not looking we can make a run for it.

FIONA: Shrek! Stop it! Everything’s gonna be--

HAROLD: A disaster! There is no way--

FIONA: You can do this.

SHREK: I reall--

HAROLD: Really--

LILLIAN: Really--

SHREK: Don't--

LILLIAN: Want--

SHREK: To… 

LILLIAN: Be--

The four stand facing each other. After a brief silence, Fiona goes up to hug her Lillian and Harold.

FIONA: Mom, dad. I’d like you to meet my husband…Shrek.

Shrek stands nervously. Lillian tries to appear happy to meet him, while Harold doesn't even try to hide his disgusted look.

SHREK: Well, um… It’s easy to see where Fiona gets her good looks from.

Shrek chuckles nervously. Harold scowls, Lillian is apprehensive, and Fiona cringes.

'''INT. - FAR FAR AWAY PALACE. DINING ROOM.'''

We cut Shrek to gulping at the dinner table. To his sides sits Lillian and Fiona, and across from him sits Harold. Lillian looks around nervously and Harold angrily stares at Shrek. Shrek unsure of how to eat the food on his plate properly, plops it in his mouth, and grins with the food still stuck in his teeth. Lillian cringes. Fiona tries to sip her drink courteously, but accidentally lets out a loud belch and covers he mouth.

FIONA: Excuse me.

Shrek and Fiona laugh.

SHREK: Better out than in, I always say, eh, Fiona?

SHREK: That’s good...

They stop laughing after neither Harold nor Lillian  joins in.

SHREK: I guess not...

We hear Donkey yelling in another room.

DONKEY: What do you mean, "not on the list"? Don’t tell me you don’t know who I am.

Donkey comes bursting into the room from the kitchen.

DONKEY: Hey! What’s happening, everybody? Thanks for waiting. You know I had the hardest time finding this place.

Donkey pulls up a seat next to Harold.

HAROLD: No! No! Bad donkey! Bad! Down!

FIONA: No, no, no, Dad! It’s all right! It’s all right. He’s with us. He helped rescue me from the dragon.

DONKEY: Yup that's me. The noble steed. Hey taiter! How ‘bout a bowl for the steed?

SHREK: Oh, boy.

Shrek loudly slurps from his bowl.

FIONA: Um, Shrek?

SHREK: Yeah?..Oh! Sorry! Great soup, Mrs Q. Mmm!

FIONA: No, no. Darling.

Fiona demonstrates that the bowl he ate from is for washing his hands.

SHREK: Oh!

The rest of the dinner table does the same.

LILLIAN: So, Fiona, tell us about where you live.

FIONA: Well…Shrek owns his own land. Don’t you, honey?

SHREK: Oh, yes! It’s in an enchanted forest abundant in squirrels and...cute little duckies and--

DONKEY: What?! (laughing) I know you ain’t talking about the swamp!

HAROLD: An ogre from a swamp. Oh! How original.

Donkey loudly dunks his mouth into his bowl and starts drinking.

LILLIAN: Well, I suppose that would be a fine place to raise the children...

Harold starts choking on his drink and Shrek accidentally swallows his spoon. They both gag until Shrek spits his spoon out onto the table.

SHREK: (chuckling) It’s a bit early to be thinking about that, isn’t it?

HAROLD: Indeed...I just started ''eating''.

LILLIAN: Harold!

SHREK: What’s that supposed to mean?

FIONA: Dad. It’s great, OK?

HAROLD: Well for his type, yes.

SHREK: ''My'' type?!

DONKEY: Uhhh--I gotta go to the bathroom.

The chef and a host of servers enter the room with dinner, including a whole turkey , lobster, and a pig.

CHEF: Dinner is served!

DONKEY: Never mind. I can hold it.

The servers set the food on the table.

CHEF: Bon appetit!

DONKEY: Ohhh, mexican food! My favorite!

LILLIAN: Well, let’s not just sit here with our tummies rumbling. Everybody dig in!

DONKEY: Don’t mind if I do, Lillian.

HAROLD: So, I suppose any grandchildren I could expect from you would be--

SHREK: Ogres, yes!

Harold pulls the lobster towards himself and Shrek takes the whole turkey.

LILLIAN: Not that there’s anything wrong with that. ''Right'', Harold?

HAROLD: Oh, no! No! Of course, not! That is, assuming you don’t eat your own young!

Harold violently stabs into the lobster with a knife.

FIONA: Dad!

SHREK: Oh no, we usually prefer the ones who’ve been locked away in a tower!

Shrek rips off both drumsticks off the turkey and bites in.

FIONA: Shrek, please!

HAROLD: I only did that because I love her!

SHREK: Oh, aye! Daycare or dragon-guarded castle?!

HAROLD: You wouldn’t understand! You’re not her father!

Fiona sighs as Shrek and Harold continue to rip apart their food, sending bits and pieces flying over the table.

LILLAN: It’s so nice to have the family together for dinner.

Harold and Shrek tug over the pig in the middle of the table, accidentally sending it flying upwards.

LILLIAN: Harold!

FIONA: Shrek!

SHREK: Fiona?!

HAROLD: Fiona!

FIONA: Mom!

LILLIAN: Harold…

DONKEY: Donkey!

The pig lands on the table with a thud. Fiona looks at Harold and Shrek, and then runs out of the room.

'''INT. - FAR FAR AWAY PALACE. [[Fiona's Bedroom|FIONA'S BEDROOM]].'''

Fiona enters her room where she stayed as a child. She looks affectionately at a [[Princess Toy|doll of a princess]], then moves on. She goes out to her balcony and cries a single tear, then suddenly notices bubbles floating all around her. A woman in the distance floats inside of a bubble and begins to sing.

GODMOTHER: [singing] Your fallen tears have called to me / So, here comes my sweet remedy / I know what every princess needs / For her to live life happily…

The woman floats up to her and pops the bubble. She notices Fiona, and both gasp.

GODMOTHER: Oh! Oh my dear. Oooh, look at you, you're all um...grown up. [chuckles]

FIONA: Um, who are you?

GODMOTHER: Oh, sweet pea! I’m your [[Fairy Godmother]].

FIONA: I have a fairy godmother?

GODMOTHER: Shu-shu-shu--shush, shush. Now, don’t worry. I’m here to make it all better. With...just...a…

Godmother flies into the room and starts singing again.

GODMOTHER: ...wave of my magic wand! / Your troubles will soon be gone! / With a flick of the wrist and just a flash / You’ll land a prince with a ton of cash

She conjures up a load of gold coins.

GODMOTHER: A high-priced dress made by mice no less / Some crystal glass pumps / And no more stress 

Out of the closet comes a sparkling gold dress that floats its way onto Fiona.

GODMOTHER: Your worries will vanish, your soul will cleanse / Confide in your very own furniture friends

The furniture starts to animate and move around. They begin to sing along.

GODMOTHER: We’ll help you set a new fashion trend!

Suddenly they are in a spacious room. A chair swoops up Fiona and carries her over to a mirror.

GODMOTHER: I’ll make you fancy, I’ll make you great

FURNITURE: The kind of girl a prince would date!

GODMOTHER: They’ll write your name on the bathroom wall…

MIRROR: For a happy ever after, give Fiona a call!

GODMOTHER: A sporty carriage to ride in style / Sexy man boy chauffeur, [[Kyle]]

A giant pink carriage appears with the aforementioned Kyle laying down on top of it, who cracks a whip. The furniture dances around Fiona.

GODMOTHER: Banish your blemishes, tooth decay / Cellulite thighs will fade away! / And oh, what the hey! / Have a bichon frisé! 

A small puppy lands in Fiona's hands. Various makeup appliances begin to pester Fiona.

GODMOTHER: Nip and tuck, here and there / To land that prince with the perfect hair / Lipstick liners, shadows blush / To get that prince with the sexy tush / Lucky day, hunk buffet / You and your prince take a roll in the hay / You can spoon on the moon / With the prince to the tune

Godmother and Kyle begin to dance and the music gets faster and more frantic.

FIONA: Stop, please!

GODMOTHER: Don’t be drab, you’ll be fab / Your prince will have rock-hard abs / Cheese soufflé, Valentine’s Day / Have some chicken fricassee! / Nip and tuck, here and there / To land that prince with the perfect hair--

FIONA: ''Stop!!''

The music stops and Fiona's dress turns into dust. The furniture begins to shuffle away.

FIONA: (chuckles) Look...thank you very much, Fairy Godmother, but I really don’t need all this.

Godmother and the furniture collectively gasp.

FUNITURE: Fine. Be that way. We didn’t like you, anyway.

Shrek starts knocking at the door and a shelf moves over to block it.

SHREK: Fiona? Fiona?

He forces his way in and to see Fairy Godmother floating next to Fiona, who has the puppy in her arms. The furniture move back to their original positions. Godmother looks surprised to see Shrek. Donkey comes running in.

DONKEY: Oh! You got a puppy? All I got in my room was shampoo.

FIONA: Oh...uh…Fairy Godmother, furniture…I’d like you to meet my husband, Shrek.

GODMOTHER: ''Your husband''? What--what did you say? When did this happen?

FIONA: Shrek is the one who rescued me.

GODMOTHER: But that can’t be right!

SHREK: Oh, great, more relatives!

FIONA: She’s just trying to help.

SHREK: Good! She can help us pack. Get your coat, dear. We’re leaving.

Shrek opens up his suitcase.

FIONA: What?

DONKEY: Leaving? I don’t want to leave.

FIONA: When did you decide this?

SHREK: Shortly after arriving.

FIONA: Look, I I’m sorry…

GODMOTHER: No no no no, that’s all right. I need to go, anyway. But remember, dear, if you should ever need me…happiness…is just a teardrop away.

Godmother holds out a business card to Fiona, but Shrek snatches it out of her hand.

SHREK: Thanks, but we’ve got all the happiness we need. Happy, happy, happy!

GODMOTHER: So I see...let’s go, Kyle.

Godmother steps out the balcony and flies away in the pink carriage with Kyle driving.

FIONA: Very nice, Shrek.

SHREK: What? I told you coming here was a bad idea.

FIONA: You could’ve at least tried to get along with my father!

SHREK: Ya know, somehow I don’t think I was going to get Daddy’s blessing even if I did want it!

The dog starts barking.

FIONA: Well do you think it might be nice if somebody asked me what I wanted?

SHREK: ''Sure''. Do you want me to pack for you?

FIONA: You’re unbelievable! You’re behaving like a…

SHREK: Go on! Say it!

FIONA: Like an ogre!

SHREK: Well here’s a news flash for you! Whether your parents like it or not… I ''am'' an ogre!

The dog continues to bark and Shrek roars in its face. It stops and cowers.

SHREK: And guess what, princess? That’s not about to change.

FIONA: I’ve made changes for you, Shrek. Think about that.

Fiona steps out and the lets the door slam behind her.

DONKEY: That’s real smooth, Shrek. "I’m an ogre!" [mimics Shrek roaring]

Shrek goes to open the door but hears Fiona crying. He sighs and leans his back to the door.

'''INT. - FAR FAR AWAY PALACE. MASTER BEDROOM.'''

Up one floor from Fiona's room, Harold stands at a balcony. He has been listening the whole time.

HAROLD: I knew this would happen.

Lillian speaks from inside the room.

LILLIAN: You should. You started it.

Harold walks back inside the bedroom. Lillian is sitting in bed with a book in hand.

HAROLD: I can hardly believe ''that'' Lillian. I mean ''really'', he’s the ogre. Not me.

LILLIAN: I think, Harold, you’re taking this a little too personally. This is Fiona’s choice.

HAROLD: Yes, but she was supposed to choose the prince ''we'' picked out for her! I mean, you expect me to give my blessings to this…this...thing?

LILLIAN: Fiona does. And she’ll never forgive you if you don’t. I don’t want to lose our daughter again, Harold. Ugh, you act as if love is totally predictable. Don’t you remember when ''we'' were young? And oh, we used to walk down by the lily pond and they were in bloom…

HAROLD: Our first kiss...it’s not the same! I don’t think you realize that our daughter has married a monster!

LILLIAN: Oh, stop being such a drama king.

HAROLD: Fine! Fine! Pretend there’s nothing wrong! La, di, da, di, da, di da! Isn’t it all wonderful! I’d like to know how it could get any worse!

Godmother's carriage floats up to the balcony and Godmother opens the door.

GODMOTHER: Hello, Harold.

Harold gasps.

LILLIAN: What happened?

HAROLD: Nothing, dear! Just the old crusade wound playing up a bit! [chuckles] I’ll just stretch it out here for a while!

He walks out to the balcony and shuts the doors behind him.

GODMOTHER: You better get in. We need to talk.

HAROLD: Actually, Fairy Godmother, off to bed. [yawns] Already taken my pills, and they tend to make me a bit drowsy. So, um how about…

A large man steps behind Harold. 

HAROLD: ...uh, we, we make this a quick visit. What? What?

'''INT. - GODMOTHER'S CARRAIGE'''

The man shoves him inside the carriage and enters after him. Harold is sat between the man and another similar looking man to his other side.

HAROLD: Oh, hello. Ha-ha-ha!

The carriage flies off.

HAROLD: So, what’s new?

Godmother is sat across from Harold, and next to her sits Charming.

GODMOTHER: You remember my son, Prince Charming?

HAROLD: Charming! Oh! Is that you? My gosh! It's been years! How--when...when, when, when did you get back?

CHARMING: Oh, about five minutes ago, actually...after I endured blistering winds! Scorching desert! I climbed to the highest room of the tallest tower–-

Charming, who is now standing up from his seat, is sat down by Godmother and shushed.

GODMOTHER: Mummy can handle this. He endures blistering winds and scorching desert! He climbs to the highest bloody room of the tallest bloody tower!

HAROLD: But, but, but...

GODMOTHER: And what does he find? Some gender-confused wolf telling him that his princess--

HAROLD: If I could just-- 

GODMOTHER: --is already married!

HAROLD: I mean, It wasn’t ''my'' fault. He didn’t get there in time.

GODMOTHER: ''Stop the car''!

The carriage comes to a sudden stop.

GODMOTHER: Harold...

The men crack their knuckles.

GODMOTHER: You force me to do something I really don’t want to do.

Godmother rolls down the window.

HAROLD: Where are we?

The carriage is stopped at a drive-thru window.

[[Priscilla|PRICILLA]]: Well, hi there! Welcome to Friar’s Fat Boy, may I take your order?

GODMOTHER: My diet is ruined! I hope you’re happy. Er… okay. Two Renaissance Wraps, no mayo… chili ring...

CHARMING: I’ll have the Medieval Meal.

GODMOTHER: Yeah, one Medieval Meal and Harold… curly fries?

HAROLD: No, thank you.

GODMOTHER: Sourdough soft taco, then?

HAROLD: No, really, I’m fine.

PRICILLA: Your order, Fairy Godmother. 

The employee hands her their order in a bad, and then a large battle-axe.

PRICILLA: And ''this'' comes with the Medieval Meal.

GODMOTHER: There you are, dear.

Godmother hands Charming the axe. The carriage takes off.

GODMOTHER: You see we made a deal, Harold, and I assume you don’t want me to go back on my part.

HAROLD: (sighs) Indeed not.

GODMOTHER: So Fiona and Charming ''will'' be together.

HAROLD: Yes.

GODMOTHER: Oh, believe me, Harold. It’s what’s best. Not only for your daughter…

Godmother bites into her food and talks with her mouth full.

GODMOTHER:...but for your Kingdom.

'''INT. - FAR FAR AWAY PALACE. MASTER BEDROOM.'''

They arrive back at the balcony of the master bedroom and Harold is pushed out.

HAROLD: What am I supposed to do about it?

The battleaxe is tossed into Harold's hands.

GODMOTHER: Use your imagination.

Godmother shuts the door and the carriage flies off. Harold stands unsure, still clutching the axe, standing out at the moon.

'''EXT. - THE POISON APPLE. NIGHT.'''

A hooded man on horseback arrives at The Poison Apple, a ramshackle tavern. The man is Harold in disguise. He dismounts his horse and enters the tavern. He knocks on the door and an eye peeks out.

[[Cyclops|CYCLOPS]]: Oh…uh come on in, Your Majesty.

Cyclops opens the door and lets Harold in.

'''INT. - THE POISON APPLE.''' 

The tavern is a seedy gathering of misfits. Pirates and witches sit at the tables. Two trees are arm wrestling. Someone is playing darts with throwing axes. [[Captain Hook]] plays the piano and sings. Harold tries to hide his identity with his cloak and walks over to the bar. Next to him, the [[Headless Horseman]] pours a drink into himself and burps. Harold tries to get the attention of the bartender.

HAROLD: (clears his throat) Um, excuse me?

He turns to look down at a [[Miss Frog|feminine frog]] sipping a martini on a stool.

MISS FROG: Do I know you?

HAROLD: Uh, no, you must be mistaking me for someone else. Uh… excuse me. I’m looking for the Ugly Stepsister.

The bartender turns around and leans on the bar, scowling at Harold. It is [[Doris]], otherwise known as the Ugly Stepsister.

HAROLD:  Ah! There you are. Right. You see, I...I need to have someone ''taken care of''.

DORIS: Who’s the guy?

HAROLD:  Well, he’s not a guy, per se. Um… He’s an ogre.

The whole tavern gasps and Hook stop playing.

DORIS: Hey, buddy, let me clue you in. There’s only one fella who can handle a job like that, and, frankly…he don't like to be disturbed.

HAROLD:  Where could I find him?

Harold knocks on a door and lets himself in. The room is completely dark, except for the moonlight shining through a window. A shadowy figure sits with their boots on a table.

HAROLD: H-Hello?

A pair of bright green eyes appear from the darkness.

PUSS: Who dares enter my room?

HAROLD: Sorry! I hope I’m not interrupting, but I’m told you’re the one to talk to about an...ogre problem?

PUSS: You are told correct. Hmph, but for this I charge a great deal of money.

HAROLD: Would… this be enough?

Harold tosses a small sack onto the table. Out from the shadows, a sword slices open the sack and gold coins spill out onto the table.

PUSS: Hmph. You have engaged my valuable services...your Majesty. Just tell me where I can find this ogre.

'''INT. - FAR FAR AWAY PALACE. FIONA'S BEDROOM. NIGHT.'''

Shrek and Fiona lay in bed, which is just big enough to fit them both. Fiona is fast asleep while Shrek is awake, tossing and turning. He notices an ornate clock that features a prince and princess kissing, and then turns onto his back. He then stares at a poster of a handsome man named [[Sir Justin]] stuck to the bottom of the canopy above them. Shrek gets out of bed and looks out the window and stares at the Far Far Away sign. He goes over to the fireplace to warm up, but notices Fiona's childhood toys on the mantlepiece. One is a figure of a knight, who is about to slay a fallen ogre. Shrek picks up a toy princess that resembles Fiona and it speaks.

PRINCESS TOY: Dear knight, I pray that you take [[Fiona's favour|this favour]] as a token of my gratitude.

Shrek puts the toy back and then looks over at a small chest on a table in the corner of the room. He opens it to see a book inside, but the box start playing music. He quickly shuts it and looks over to make sure Fiona is still sleeping. He quickly opens the box and snatches the book out from it. He opens it, and Fiona's voice reads it in his head.

FIONA: Dear Diary. Sleeping Beauty is having a slumber party tomorrow, but Dad says I can’t go. He ''never'' lets me out after sunset.

He turns the page to the next entry in the diary.

FIONA: Dad says I’m going away for a while. Must be like some finishing school or something.

He scoffs and turns the page.

FIONA: Mom says that when I’m old enough, my Handsome Prince Charming will rescue me from my tower and bring me back to my family!

Turns the page.

FIONA: And we'll all live happily ever after!

With his mouth with open, Shrek turns to the next page. 

FIONA: Mrs. Fiona Charming.

He frantically turns the pages which all read aloud "Mrs. Fiona Charming". He is surprised by a knock at the door, and sets the diary down. He opens the door to see Harold standing in the hall.

HAROLD: Sorry. I hope I’m not interrupting anything.

SHREK: No, no. I was just reading a, uh…a scary book.

HAROLD: I was hoping you’d let me apologize for my despicable behavior earlier.

SHREK: Okay?..

HAROLD: I don’t know what came over me. Do you suppose we could pretend it never happened and start over?

SHREK: Look, Your Majesty, I just…

SHREK: Please, call me Dad.

SHREK: Dad. We both acted like ogres. Maybe we just need some time to get to know each other.

HAROLD: Excellent idea! I was actually hoping you might join me for a morning hunt. A little...father-son time? I know it would mean the world to Fiona.

Shrek stares back at Fiona, still asleep, then sighs.

HAROLD: Shall we say 7:30 by the old oak?

'''FOREST. DAY.'''

Shrek and Donkey are walking through a thick forest. Far Far Palace is far off over the hills behind them.

SHREK: Face it, Donkey! We’re lost.

DONKEY: We can’t be lost! We followed the king’s instructions exactly. What did he say? "Head to the darkest part of the woods…" 

SHREK: Aye.

DONKEY: "Past the sinister trees with those scary-looking branches."

SHREK: Check.

Donkey runs over to a bush in the shape of a busty figure.

DONKEY: Yeah, and there’s the bush shaped like Shirley Bassey!

SHREK: We passed that bush three times already!

DONKEY: Hey, you were the one who said you didn't want to stop and get directions.

SHREK: Oh, great. My one chance to fix things up with Fiona’s dad, and I end up lost in the woods with you!

DONKEY: Alright you don’t have to get huffy with me, I’m only trying to help.

SHREK: I know! I know. (sighs) I’m sorry, all right?

DONKEY: Hey, don’t worry about it.

SHREK: I just really need to make things work with this guy.

DONKEY: Yeah, sure. Now let’s go bond with Daddy.

Someone is looking at Shrek and Donkey from up in a tree. They are making purring sounds.

SHREK: Well, well, well, Donkey. I know it was kind of a tender moment back there, but the purring?

DONKEY: Man, what are you talking about? I ain’t purring.

SHREK: Oh, ''sure''. What’s next? A hug?

DONKEY: Hey, Shrek. Donkeys don’t purr. What do you think I am, some kind of a…

A figure jumps down onto the path in front of them. It is an orange cat, wearing a hat, cape, boots, and brandishing a fencing sword.

PUSS: Ha-ha! Fear me, if you dare! (hisses)

SHREK: Hey look! A little cat.

DONKEY: Look out, Shrek! He got a piece!

SHREK: It’s a cat, Donkey. Come here, little kitty, kitty. Come on, little kitty. Come here. Oh! Come here, little kitty.

Puss throws off his cape, sticks his sword into the ground, and leaps towards Shrek. With his claws drawn he grabs onto Shrek's leg. Shrek screams in pain.

DONKEY: Hold on, Shrek! I’m coming!

Puss is climbing all over Shrek's body and gets into his clothes.

SHREK: Come on! Oh, get it off! Oh, get it off! Oh, God. Oh… No! Ooh! Aagh!

Puss comes ripping out the front of Shrek's shirt, and then digs his claws into his leg again.

DONKEY: Look out, Shrek! Hold still!

SHREK: Get it off!

DONKEY: Shrek! Hold still! 

Donkey tries to kick Puss with his hind legs, but Puss dodges and hits Shrek in the crotch instead. Shrek drops to his knees and clutches the area,

DONKEY: Did I miss?

SHREK: No. You got them.

Puss leaps back over them, cartwheeling in the air. He grabs his belongings.

PUSS: Now, ye ogre, pray for mercy from… [[Puss in Boots|Puss…in Boots]]!

SHREK: Ohh, I’ll kill that cat!

PUSS: Ah-ha-ha! 

Puss starts coughing and then heaving onto the floor. Shrek and Donkey stand confused until Puss finally spits out a hairball.

PUSS: Hairball. (chuckles)

DONKEY: Oh! That is nasty!

Shrek picks Puss up by the back of the neck.

SHREK: What should we do with him?

DONKEY: I say we take the sword and neuter him right here. Give him the Bob Barker treatment!

PUSS: Oh, no! Por favor! Please! I implore you! It was nothing personal, Señor! I was doing it only for my family. My mother, she is sick. And my father lives off the garbage! The king offered me much in gold and I have a litter of brothers…

Shrek covers Puss' mouth with his finger.

SHREK: Whoa...whoa...whoa, whoa, whoa, whoa! ''Fiona’s father'' paid you to do this?

PUSS: The rich King? Sí. 

Shrek drops Puss to the ground and he screeches.

SHREK: Well, so much for Dad’s royal blessing.

DONKEY: Oh come on, Shrek, don’t feel bad. Almost everybody that meets you wants to kill you.

Shrek sits down on a nearby rock, looking down.

SHREK: Gee, thanks. (sighs) Maybe Fiona would’ve been better off if I were some sort of Prince Charming.

PUSS: Si, that’s what the King said. 

Donkey gives him a dirty look.

PUSS: Oh, uh… sorry. I thought that question was directed at me.

DONKEY: Shrek, Fiona knows you’d do anything for her.

SHREK: Well, it’s not like I wouldn’t change if I could. I just… I just wish I could make her happy. Hold the phone… 

Shrek pulls out the business card he took from Fairy Godmother earlier. He reads it.

SHREK: "Happiness." "A tear drop away." Donkey! Think of the saddest thing that’s ever happened to you.

DONKEY: Aw, man, where do I begin? Well first there was the time that old farmer tried to sell me for some magic beans. I ain't never got over that. Then this fool went off and had a party and he have the guests trying to pin the tail on me. Then they got all drunk and start beating me with a stick going, "Piñata! Piñata!" What is a piñata, anyway?!

SHREK: No, Donkey! I need you to cry!

DONKEY: Yeah, well don’t go projecting on me! I know you’re feeling bad, but you gotta let your own--

Puss forcefully steps on Donkey's hoof. Donkey screams in pain.

DONKEY: You little, hairy, litter-licking sack of...

Donkey sheds a tear, and Shrek lets it fall onto the card. A bubble is conjured, and Fairy Godmother appears in it.

GODMOTHER: What? Is it on? Is it on? [clears throat] This is Fairy Godmother. I’m either away from my desk or with a client. But if you come by the office, we’ll be glad to make you a personal appointment. Have a happy ever after. 

The bubble bursts into sparkling dust.

DONKEY: Oh…

SHREK: Are you up for a little quest, Donkey?

DONKEY: That’s more like it! Shrek and Donkey, on another whirlwind adventure! (Singing) Ain’t no stoppin’ us now! Whoo! We’re on the move!

Shrek and Donkey start walking off.

PUSS: Stop, Ogre! I have misjudged you.

SHREK: Join the club. We’ve got jackets.

PUSS: On my honor, I am obliged to accompany you until I have saved your life as you have spared me mine.

DONKEY: I'm sorry, the position of annoying talking animal has already been taken. Let’s go, Shrek! Shrek?

Shrek looks down at Puss, who gives him a cute, helpless look. Shrek smiles.

DONKEY: Shrek!

SHREK: Aw, come on, Donkey. Look at him… in his wee little boots. You know, how many cats can wear boots? Honestly. Aw, let’s keep him!

DONKEY: Say what?!

Puss purrs and Shrek marvels at his cuteness,

DONKEY: Ahh!

Shrek scoops him up into his arms and begins walking with Donkey.

SHREK: Aw, listen. He’s purring!

DONKEY: Oh, so now it’s cute!

SHREK: Aw, come on, Donkey. Lighten up.

DONKEY: Lighten up? Oh, I should lighten up?! Look who’s telling who to lighten up!

'''INT. - FAR FAR AWAY PALACE. FIONA'S BEDROOM. MORNING.''' 

Fiona is awaken by the puppy licking her nose.

FIONA: [giggles] Shrek!

She looks up and the dog barks. She sits up with concerned look on her face,

FIONA: Shrek?

She gets up and walks to the balcony, only to notice the diary opened face down. She picks it up to a page of a drawing of Fiona and a prince kissing.

'''EXT. - FAR FAR AWAY PALACE. MORNING.'''

Harold and Lillian are with servants outside in a courtyard, looking at different samples of carpet. Harold looks distracted,

LILLIAN: They’re both festive, aren’t they? What do you think, Harold?

HAROLD: Um… yes, yes. Fine. Fine.

Lillian scoffs and sends the servants away.

LILLIAN: Try to at least pretend you’re interested in your daughter’s wedding ball.

HAROLD: Honestly, Lillian, I don’t think it matters. How do we know there will even be a ball?

Fiona steps out from the palace doors.

FIONA: Mom! Dad!

LILLIAN: Oh, hello, dear.

HAROLD: What’s that, Cedric? Right! Coming!

Harold walks off before Fiona reaches them.

FIONA: Mom, have you seen Shrek?

LILLIAN: I haven’t. You should ask your father. Be sure and use small words, dear. He’s a little slow this morning.

Harold walks up to [[Cedric]], a servant, who is carrying a bowl.

CEDRIC: Can I help you, Your Majesty?

HAROLD: Ah, yes! Um…

Harold sticks his finger into the bowl and tastes it.

HAROLD: Mmm! Exquisite. What do you call this dish?

CEDRIC: That would be the dog’s breakfast, Your Majesty.

HAROLD: Ah, yes. Very good, then. Carry on, Cedric.

Fiona catches up and Cedric walks away.

FIONA: Dad? Dad, have you seen Shrek?

HAROLD: Uh, no I haven’t, dear.

Harold walks off again, going up to servants and trying to appear busy.

HAROLD: I’m sure he just went off to look for a nice… mud hole to cool down in. You know, after your little spat last night.

FIONA: Oh. You heard that, huh?

Harold continues to walk away but Fiona keeps up.

HAROLD: Darling, the whole kingdom heard you. I mean, after all, it is in his nature to be…well, a bit of a brute.

FIONA: ''Him''? You know, you didn’t exactly roll out the Welcome Wagon!

HAROLD: Well, what did you expect?! Look at what he’s done to you.

FIONA: Shrek loves me for who I am. I would think you’d be happy for me.

HAROLD: Darling, I’m just thinking about what’s best for ''you''. Maybe you should do the same.

Harold leaves and leaves Fiona standing.

'''FOREST'''

Donkey is walking behind Shrek, who is still carrying Puss. Donkey eyes Puss suspiciously as he whispers into Shrek's ear. Shrek glances back at Donkey.

SHREK: No, really?

Shrek and Puss laugh. They walk out into a clearing.

DONKEY: Oh…

'''EXT. - [[Fairy Godmother's Cottage|FAIRY GODMOTHER'S COTTAGE]]'''

Off in the distance they see a small cottage. Connected to it is a giant factory with colored gases rising out from its chimneys.

DONKEY: Oh, no. That’s the ol' Keebler’s place! Let’s just back away slowly.

PUSS: That’s the Fairy Godmother’s cottage. She’s the largest producer of hexes and potions in the whole kingdom.

SHREK: Then why don’t we pop in there for a spell? Ha-ha! ''Spell''!

Shrek chuckles while Puss laughs loudly and they walk on. With an annoyed look on his face, Donkey follows them.

PUSS: He makes me laugh!

'''INT. - FAIRY GODMOTHER'S COTTAGE'''

The three enter through the front door of the cottage and into a reception area. At the desk sits an elf writing into a book.

SHREK: Hi. I’m here to see the--

[[Jerome the Receptionist|JEROME]]: The Fairy Godmother. I’m sorry. She is not in.

Godmother's voice sounds from a speaker system next to the receptionist.

GODMOTHER: Jerome, coffee and a Monte Cristo. Now!

JEROME: [sighs] Yes, Fairy Godmother. Right away. Look, she’s not seeing any clients today, OK?

SHREK: That’s OK, buddy. We’re from the union.

JEROME: The union?

SHREK: We represent the workers in all magical industries, both evil and benign.

JEROME: Oh! Oh, right.

SHREK: Are you feeling at all degraded or oppressed?

Jerome turns the speaker to face the other way.

JEROME: Uh… a little. W--w--we don’t even have dental.

SHREK: They don’t even have dental. Okay, we're just gonna have a look around. Oh. By the way. I think it’d be better if the Fairy Godmother didn’t know we were here. Know what I’m saying? Huh?

DONKEY: Hmm?

SHREK: Huh? 

DONKEY: Huh? Huh? Huh?!

SHREK: Stop it.

JEROME: (whispers) Of course. Go right in.

The three walk through a door next to the receptionist.

'''INT. - [[Potion Factory|POTION FACTORY]]'''

From up above on a catwalk, the three look out at the factory. The workers are all elves wearing white hazmat suits. Chemicals are poured into giant vats. Potions are put onto conveyor belts. Ingredients are tested and mixed. Shrek notices a set of doors at the other end of the room with a sign above that reads "Potion Room". They see flashing lights accompanied by booming sounds coming from a doorway to their right. They head inside and walk down a hallway, which leads to another set of doors. They can hear the Godmother behind it as well as the source of the flashes.

GODMOTHER: A drop of desire! [giggles] Naughty! 

Inside a giant cauldron pours out gas as Godmother dumps various vials into it.

GODMOTHER: A pinch of passion. [laughs] And just a hint of…lust! [laughs]

SHREK: Excuse me.

Shrek and company walk in, and Godmother gasps.

SHREK: Sorry to barge in like this but uh--

GODMOTHER: What in Grimm’s name are you doing here?

SHREK: Well...it seems that Fiona’s not exactly happy.

GODMOTHER: Oh-ho-ho! And there’s some question as to why that is? Well, let’s explore that, shall we?

Godmother hovers over to wall of bookshelves filled with books.

GODMOTHER: Ah. P, P, P, P, P…Princess. 

She pulls out a book titled "Cinderella".

GODMOTHER: [[Cinderella]]! Here we are. "Lived happily ever after." Oh…[laughs] No ogres!

She tosses the book to the ground and pulls out another.

GODMOTHER: Let’s see. [[Snow White]]. A handsome prince. Oh...no ogres.

She continues to pull out books and toss them.

GODMOTHER: [[Sleeping Beauty (character)|Sleeping Beauty]]. Oh, no ogres! [[Hansel and Gretel]]? No! [[Thumbelina]]? No. The Golden Bird, the Little Mermaid, [[Pretty Woman]]…No, no, no, no, no!

She flies down and gets in Shrek's face.

GODMOTHER: You see, ogres don’t live happily ever after.

Shrek jams his finger at Godmother.

SHREK: All right, look, lady!

GODMOTHER: Don’t you point… those dirty green sausages at me!

They get closer towards each other and glare into each other's eyes. They are interrupted by a worker who comes through the door.

WORKER: Your Monte Cristo and coffee--oh! Sorry.

SHREK: Ah… that’s okay. We were just leaving. Very sorry to have wasted your time, Miss Godmother.

GODMOTHER: Just… go. Come on, guys.

The three head back out the doors. A worker pushing a cart walks by the janitor's closet. It opens and Shrek pulls him and the cart inside. Shrek puts the hazmat suit on which only manages to cover his head. He walks through the factory floor pushing the cart. 

SHREK: TGIF, eh, buddy? Working hard or hardly working, eh, Mac?

He enters the Potion Room he saw earlier. He opens the cart to reveal Puss and Donkey crammed inside.

PUSS: Oh! Eh!

DONKEY: Hey man, you wanna get your fine Corinthian footwear and your cat cheeks out of my face? Man, that stinks!

PUSS:  Well you don’t exactly smell like a basket of roses.

Shrek looks up at the shelves built into the walls around them. The shelves are filled with different potions.

SHREK: Well, one of these has got to help.

PUSS: Ah, I was just concocting this very plan. Already our minds are becoming one.

DONKEY: Whoa, whoa, whoa now. Listen, if we need an expert on licking ourselves, we’ll give you a call. Shrek, this is a bad idea.

SHREK: Look. Make yourself useful and go keep watch. Puss, do you think you could get to those on top?

PUSS: No problema, boss. In one of my nine lives I was the great cat burglar of Santiago de Compostela! (laughs)

DONKEY: Shrek, are you off your nut?

SHREK: Donkey, keep watch.

DONKEY: Keep watch? Yeah, Imma keep watch. I’ll watch that wicked witch come and whammy zammy a world of hurt all up your backside. I'm gonna laugh, too. I’ll be giggling to myself.

Donkey walks back the door to stand on guard. Puss climbs up the shelves and stops at a glowing green vial.

SHREK: What do you see?

PUSS: "Toad Stool Softener"?

DONKEY: Oh yeah, right, I’m sure a nice BM is the perfect solution for marital problems!

Puss continues to climb up and stop every so often.

PUSS: "Elfa Seltzer"?

SHREK: Uh-uh.

PUSS: "Hex Lax"?

SHREK: No! Try "handsome."

PUSS: Sorry. No handsome. 

Puss stops at a row of potions kept behind a glass display case.

PUSS: Hey! How about "[[Happily Ever After Potion|Happily Ever After]]"?

SHREK: Well, what does it do?

PUSS: It says "Beauty Divine."

DONKEY: You know in some cultures, donkeys are revered as the wisest of all creatures. Especially us talking ones.

Donkey, not paying attention to the door, doesn't notice a worker and Jerome staring at them.

SHREK: [gasps] Donkey! 

Donkey looks back and Jerome and the worker run off. Donkey runs back to Shrek and the door shuts.

SHREK: That’ll have to do. We’ve got company!

Puss uses his claw to cut a hole in the glass.

DONKEY: Can we get on with this?

Puss tries to pull out the Happily Ever After potion, but the hole he made is just too small for it to fit.

SHREK: Hurry! 

Puss tries to force the potion through and the glass starts to crack. It shatters as the bottle is pulled out, sending Puss flying. Donkey manage to catch the falling potion with his mouth.

SHREK: Nice catch, Donkey!

Puss lands on his feet.

PUSS: Finally! A good use for your mouth.

An alarm sounds and red lights flash. At the doorway, a metal gate starts to lower down.

SHREK: Come on!

Shrek grabs Donkey and Puss and diver under the gate. Puss reaches back for his hat just before the gate slams down. A group of elves run in with rapid-fire crossbows and shoot at them. Shrek, still carrying Donkey and Puss, dodges the arrows and jumps onto a conveyer belt. They continue to dodge the arrows as they climb over various wooden machinery. Shrek tips over a giant cauldron, filled with a potion, and the substance spills onto the floor. The elves run away as Shrek jumps up and grabs onto a pulley system that leads back to the entrance. The potion splashes over a cage of two geese and turns them into ballerinas. Two workers are caught in it and are transformed into a [[Animated clock|clock]] and a [[Animated candelabra|candelabra.]] Another group of fleeing elves are turned into doves. Shrek, Donkey, and Puss reach the end of the room and jump onto the catwalk. Later, the potion has dried up and Fairy Godmother shouts at the doves.

GODMOTHER: I don’t care whose fault it is. Just get this place cleaned up!

DOVES: Yes, Godmother.

GODMOTHER: And somebody bring me something deep fried and smothered in chocolate!

Prince Charming comes bursting through the doors behind her.

CHARMING: Mother!

GODMOTHER: Charming. Sweetheart. Well This isn’t a good time, pumpkin. Mama’s working.

CHARMING: Whoa, what happened here?

GODMOTHER: The ogre, that’s what!

CHARMING: What?! Where is he, Mom? 

Charming pulls his sword out from its sheath and starts swinging it around.

CHARMING: I shall rend his head from his shoulders! I will smite him where he stands! He will rue the very day he stole my kingdom from me!

Bird poop lands on his shoulder.

CHARMING: Oh, put it away, Junior! You’re still going to be king. We’ll just have to come up with something smarter.

Jerome, who is now a dove, flies over carrying a clipboard.

JEROME: Pardon. Um…e-everything is accounted for, Fairy Godmother. Except for one potion. 

Godmother takes a look at the clipboard.

GODMOTHER: What? Oh… I do believe we can make this work to our advantage.

'''FOREST - DAY'''

Shrek, Donkey, and Puss are walking through a clearing. Shrek reads the label on the potion.

SHREK: "Happily Ever After Potion. Maximum strength. For you and your true love. If one of you drinks this, you both will be fine. Happiness, comfort and beauty divine."

DONKEY: You both will be fine?

SHREK: I guess it means it’ll affect Fiona, too.

Shrek pops the cork out from the bottle.

DONKEY: Hey, man, this don’t feel right. My donkey senses are tingling all over. So why don't you just drop that jug o’ voodoo and let’s get out of here.

SHREK: It says, "Beauty Divine." How bad can it be?

Shrek sniffs the potion and sneezes mucus onto a mushroom. The mucus is sparkling blue.

DONKEY: Aha! See, you’re allergic to that stuff. You’re gonna have a reaction. And if you think that I’ll be smearing VapoRub all over your chest, think again!

PUSS: Boss, just in case there is something wrong with the potion… allow me to take the first sip. It would be an honor to lay my life on the line for you.

DONKEY: Oh, no, no. I don’t think so. If there's gonna be any animal testing, I’m gonna do it. That’s the ''best'' friend’s job. Now give me that bottle.

Donkey grabs the bottle with his mouth and jugs some of it down. Shrek grabs the bottle.

SHREK: How do you feel?

DONKEY: Well I don’t feel any different. I look any different?

PUSS: You still look like an ass to me.

SHREK: Maybe it doesn’t work on donkeys. Well, here’s to us, Fiona.

DONKEY: Shrek? You drink that, there’s no going back.

SHREK: I know.

DONKEY: But, no more wallowing in the mud?

SHREK: I know.

DONKEY: No more itchy butt crack?

SHREK: I know!

DONKEY: But you love being an ogre!

SHREK: ''I know''! (sighs) But I love Fiona more.

DONKEY: Shrek, no! Wait!

Shrek drinks the rest of the potion. His stomach starts rumbling, and Puss and Donkey take cover behind a fallen log. Shrek lets out a loud fart and the two come out from cover.

DONKEY: Ooh, got to be… I think you grabbed the "Farty Ever After" potion.

PUSS: Maybe it’s a dud.

SHREK: Or maybe Fiona and I were never meant to be.

Suddenly, thunder sounds and gray clouds move in above them. 

DONKEY: Uh-oh. What did I tell you? I think I feel something coming on. I don’t want to die. I don’t want to die. I don’t want to die! 

It starts raining on the three.

DONKEY: Oh, sweet sister, mother of mercy. I’m melting! I’m melting!

SHREK: It’s just the rain, Donkey.

DONKEY: [chuckles] Oh.

As they walk off, they don't notice the mushroom Shrek sneezed on transform into a rose. They eventually come across an abandoned barn in the forest. Shrek opens the gates and they head inside.

'''EXT. - ABANDONED BARN'''

Shrek looks out from the barn, solemnly starting at Far Far Away way off in the distance. Shrek looks down at Donkey and pats his head.

DONKEY: Shrek, don’t worry. Things seem bad because it’s dark and rainy and Fiona’s father hired a sleazy hitman to whack you.

Puss hisses at Donkey.

DONKEY: lt’ll be better in the morning. You’ll see. (singing) The sun’ll come out…tomorrow. [yawns] Bet your bottom…

SHREK: Bet my bottom?

DONKEY: I’m coming, Elizabeth!

Donkey rears back and falls to the floor unconscious.

SHREK: Donkey? Are you all right?

PUSS: Hey, boss. Let’s shave him.

SHREK: D-Donkey?..

Shrek passes out and falls down. Puss screams.

'''INT. - FAR FAR AWAY PALACE'''

Harold and Lillian are sat by a fireplace when Fiona walks in. 

HAROLD: There you are! We missed you at dinner.

LILLIAN: What is it, darling?

FIONA: Dad…I’ve been thinking about what you said. And I’m going to set things right.

HAROLD: Ah! Excellent! That’s my girl. 

FIONA: It was a mistake to bring Shrek here. I’m going to go out and find him. And then we're gonna go back to the swamp where we belong.

Fiona walks out of the room and grabs her suitcase. Harold and Lillian follow her.

LILLIAN: Fiona, please!

HAROLD: Let’s not be rash, darling. You can’t go anywhere right now.

Fiona pushes open the front doors of the palace and looks out at the rain. Before she can step forward, she passes out and falls to the floor.

HAROLD: Fiona...

LILLIAN: Fiona!

Harold and Lillian run over to Fiona and kneel over her.

'''INT. - ABANDONED BARN'''

Posed similarly, Puss runs over to Shrek and Donkey's unconscious bodies. He lies down beside them.

'''EXT. - ABANDONED BARN'''

We see a bright, sparkling purple light emit from the barn. It fades.

'''INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.'''

Harold and Lillian tend to Fiona, who they have tucked into bed. Lillian walks off, and Harold follows after lingering for a few moments.

'''EXT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.'''

A similar bright light flashes in Fiona's room before fading.

'''INT. - ABANDONED BARN. MORNING.'''

Eyes slowly open. Women can be heard whispering.

MAIDEN #2: Look look look, I told you he was here. Look at him! Look at him! 

MAIDEN #1: Shh! Quiet! 

MAIDEN #2: Look at him!

Shrek groans. A woman laying down, staring at him, comes into focus.

JILL: Good morning, sleepyhead.

Shrek shouts and sits up. Three women are sitting beside him, and one of them is holding Puss in her arms.

JILL & [[Maidens|MAIDENS]]: Good morning!

MAIDEN #2: We love your kitty!

SHREK: Oww…my head…

JILL: Here, I fetched a pail of water.

SHREK: Thanks. 

Shrek looks at down at his hands and gasps, noticing they are now human hands. He grabs the pail of water and looks at his reflection. He is now a handsome, human man. He gasps and drops the pail onto the floor. He starts to feel his new body.

SHREK: Oh!.. A cute, button nose? Thick, wavy locks? Taut, round buttocks?! I’m… I’m…

Jill and Maiden #1 latch onto Shrek.

JILL: Gorgeous!

MAIDEN #1: I’ll say.

JILL: I’m [[Jill (Shrek 2)|Jill]]. What’s your name?

SHREK: Um… Shrek.

JILL: "Shrek"? Wow...are you from Europe?

MAIDEN #1: You’re so tense!

JILL: I want to rub his shoulders.

MAIDEN #1: I got it covered, thanks.

Maiden #2 joins in.

MAIDEN #2: I don’t have anything to rub!

JILL: Well, get in line.

SHREK: Have you ladies seen my donkey?

DONKEY: Who are you calling donkey?!

Donkey stands in the doorway. He is now a white stallion.

SHREK: Donkey? You’re a--

DONKEY: A stallion, baby! I can whinny! [whinnies] I can count! 

Donkey starts to trot around outside.

DONKEY: Look at me, Shrek! I’m...trotting! That’s some quality potion! What’s in that stuff?

PUSS: "Oh, don’t take the potion, Mr. Boss, it’s very bad." Pah!

Puss picks up the discarded potion bottle and reads the label.

PUSS: "Warning: Side effects may include burning, itching, oozing, weeping. Not intended for heart patients or those with… nervous disorders."

DONKEY: I’m trotting, I’m trotting in place! Yeah!

Shrek, Puss, and the maidens all stare at Donkey.

DONKEY: What?

PUSS: Señor! 

Puss reads the rest of the label.

PUSS: "To make the effects of this potion permanent, the drinker must obtain his true love’s kiss by midnight."

Shrek grabs the potion to read it for himself.

SHREK: Midnight?! Why is it always midnight?

MAIDEN #1: Oh! Pick me! I’ll be your true love!

JILL: I’ll be your true love.

MAIDEN #2: I’ll be true!...enough.

SHREK: Look, ladies, I already have a true love.

The maidens start puckering their lips and Shrek backs away.

SHREK: Look! Ladies! I already have a true love.

The woman groan in disappointment.

PUSS: And take it from me, Boss. You are going to have one satisfied Princess.

DONKEY: And let’s face it. You are a lot easier on the eyes. But inside you’re the still same old, mean, salty…

SHREK: Easy--

DONKEY: …cantankerous, stinky...

SHREK: Alright then--

DONKEY: …foul, angry ogre you always been.

SHREK: And you’re still the same annoying donkey.

DONKEY: Yeah.

SHREK: Well…look out, princess. Here comes the new me!

Shrek's pants fall down to his ankles. His clothes are much too big for him now.

DONKEY: First things first, we need to get you out of those clothes.

The women all gasp in excitement.

'''FOREST. MORNING.'''

A carriage is traveling on a road through the forest. Shrek, Donkey, and Puss are hidden further up the road.

SHREK: Ready?

DONKEY: Ready!

The carriage hits a bump and Donkey screams behind them. A passenger inside the carriage leans out his head.

[[Nobleman|NOBLEMAN]]: Driver, stop!

The nobleman gets out to examine Donkey, who is writhing on the ground.

DONKEY: Oh, God! Help me, please! My racing days are over! I’m blind! I’m blind! Tell the truth, will I ever play the violin again?

NOBLEMAN: Oh, you poor creature! Is there ''anything'' I can do for you?

DONKEY: Well, I guess there is one thing...

Donkey drops the act and Puss jumps out from behind him, pointing his sword at the nobleman.

PUSS: Take off the powdered wig and step away from your drawers!

Shrek puts on the nobleman's powdered wig and his clothes, which are much too small for him.

PUSS: Not bad.

DONKEY: Not bad at all.

After a moment of silence, the two burst out laughing. The [[Nobleman's Son|nobleman's son]] peeks out from inside the carriage.

NOBLEMAN'S SON: Father? Is everything all right, Father?

The son gets a look at the scene and tries to hide back inside. Shrek takes his clothes, leaving both the nobleman and his son stranded in their undergarments. Shrek saddles up on Donkey's back with Puss.

SHREK: Thank you, gentlemen! Someday, I will repay you! Unless, of course, I can't find you or if I forget.

Donkey whinnies and rears back onto his hind legs, knocking Puss off. Donkey sprints off, leaving Puss muttering angrily in Spanish. 

'''KINGDOM OF FAR FAR AWAY. DAY.'''

Shrek and Puss are riding Donkey through the streets of Far Far Away. Shrek looks uneasy as people in the streets stop and stare. Shrek cautiously waves at an angry mob, who to his surprise, smile and wave back at him. Shrek admires the new "him" in the mirror and waves at three noblewomen ogling at him. Donkey kicks into a faster pace and towards the Far Far Away Palace.

'''EXT. - FAR FAR AWAY PALACE. DAY.'''

They stop at the foot of the stairs leading up to the palace doors. Two [[guards]] stand by the stairs.

GUARD: Halt!

SHREK: Tell Princess Fiona her husband, Sir Shrek, is here to see her.

'''INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.'''

Fiona gest out of bed and walks over to the mirror to wash her face. As she takes the towel away from her face, she sees her reflection in the mirror; she is a human again. She screams and Shrek hears her from outside.

SHREK: Fiona!

FIONA: Shrek?

'''INT. - FAR FAR AWAY PALACE.'''

Shrek runs inside the palace to find Fiona. Fiona runs out of her room to do the same. The two almost cross each other's pass.

'''INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.'''

Shrek runs into Fiona's room and sees a cloaked figure hovering by the window. 

SHREK: Fiona?

The figure takes off the cloak and reveals themselves to be Fairy Godmother.

GODMOTHER: Hello, handsome.

'''EXT. - FAR FAR AWAY PALACE.''' 

Fiona runs outside and down the stairs, not recognizing Donkey in his new form.

FIONA: Shrek!

DONKEY: Princess!

FIONA: Donkey?..

DONKEY: Wow! That potion worked on you too, huh?

FIONA: What potion?

DONKEY: Oh its kind of a long story but, see, Shrek and I took some magic potion. And well, now...we’re sexy!

Fiona leans over to see Puss sitting on Donkey's back.

FIONA: Shrek?..

PUSS: For you, baby… I could be.

DONKEY: Yeah, you wish.

FIONA: Donkey, where is Shrek?

DONKEY: He just went inside looking for you.

'''INT. - FAR FAR AWAY PALACE.'''

Fiona runs back inside and yells loudly.

FIONA: Shrek!

'''INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.'''

SHREK: Fiona! Fiona!

Shrek runs for the door, but Godmother uses her magic to close it. One of the talking pieces of furniture from before moves in his way.

FURNITURE: You want to dance, pretty boy?

Shrek tries to run out to the balcony but Godmother shuts those doors as well.

GODMOTHER: Are you going so soon? Don’t you want to see your wife?

Godmother gestures to the window and steps aside.

'''INT. - FAR FAR AWAY PALACE.''' 

Elsewhere in the palace, Fiona stops at the top of some stairs. She hears a voice come from a room to her right.

CHARMING: Fiona?

Fiona steps toward the voice and sees Prince Charming standing by a balcony. He is wearing noble clothes that somewhat resemble Shrek's usual getup.

FIONA: Shrek?

CHARMING: Aye, Fiona. It is me.

FIONA: What happened to your voice?

CHARMING: Uhh...the potion changed a lot of things, Fiona. But not the way I feel about you.

Just as Charming takes Fiona's hand, Harold and Lillian come walking in.

LILLIAN: Fiona?

HAROLD: Charming?!

CHARMING: Ah--do you think so? [laughs] Dad. I was so hoping you would approve.

LILLIAN: Um… Who are you?

CHARMING: Mom, it’s me, Shrek. I know you never get a second chance at a first impression, but, well, what do you think?

Charming pulls Fiona in closer, who is still looking at him with suspicion. Neither Harold nor Lillian appear to be approving. Charming hugs Fiona, who hesitantly obliges him. Shrek is shouting from across the other side of the palace in Fiona's room. The glass window muffles his voice and none of them hear him.

SHREK: Fiona! Fiona!

'''INT. - FAR FAR AWAY PALACE. FIONA'S CHILDHOOD ROOM.'''

SHREK: Fiona! Fiona!

GODMOTHER: Fiona, Fiona! Ho-ho-ho-oh, shoot! I don’t think they can hear us, pigeon.

Shrek stares out at the coupe and sighs.

GODMOTHER: Don’t you think you’ve already messed her life up enough?

SHREK: I just wanted her to be happy.

GODMOTHER: And now she can be. Oh, sweetheart. She’s finally found the prince of her dreams.

SHREK: But look at me. Look what I’ve done for her.

GODMOTHER: It’s time you stop living in a fairy tale, Shrek. She’s a princess, and you’re an ogre. That’s something no amount of potion will ever change.

Shrek takes another look out the window and sees Fiona, Charming, Lillian, and Harold head inside from the balcony.

SHREK: But…I love her.

GODMOTHER: If you really love her…you’ll let her go.

'''EXT. - FAR FAR AWAY PALACE.''' 

Shrek comes from out of the palace, angrily barging down the stairs.

DONKEY: Shrek?

PUSS: Señor?

Shrek walks by without looking at them.

DONKEY: Hey, what’s going on? Where are you going?

'''INT. - FAR FAR AWAY PALACE.''' 

Charming and Fiona walk down the hallway away from Harold and Lillian. Fiona looks back and gives Harold a confused look before Charming nudges her closer. 

LILLIAN: You wouldn’t have had anything to do with this...would you, Harold?

Harold looks down with a guilty look on his face.

'''EXT. - KINGDOM OF FAR FAR AWAY.''' 

Shrek walks through the streets with his head bowed down. Donkey and Puss follow him.

'''INT. - POISON APPLE'''. 

Captain Hook is playing the piano and singing. Shrek, Donkey, and Puss are sitting at the bar with their drinks. Doris sets a bottle of milk on the table.

DORIS: There you go, boys.

PUSS: Just leave the bottle, Doris.

DORIS: Hey. Why the long face?

SHREK: It was all just a stupid mistake. I never should have rescued her from that tower in the first place.

Puss laps up the milk in his cup and slams it down.

PUSS: I hate Mondays.

DONKEY: I can’t believe you’d walk away from the best thing that ever happened to you.

SHREK: What choice do I have? She loves that pretty boy, Prince Charming.

DONKEY: Aww, come on. Is he really that good-looking?

DORIS: Are you kidding? He’s gorgeous! He has a face that looks like it was carved by angels.

PUSS: Oh. He sounds dreamy.

SHREK: You know, shockingly, this isn’t making me feel any better. Look, guys. It’s for the best. Mom and Dad approve, and Fiona gets the man she’s always dreamed of. Everybody wins.

Behind them, Harold enters inside wearing his cloak.

DONKEY: Except for you. I don’t get it, Shrek. You love Fiona.

SHREK: Aye. And that’s why I have to let her go.

HAROLD: Umm...excuse me, is she here?

Shrek looks up to see the back of Harold who is talking with Doris.

DORIS: She’s, uh… in the back.

Harold walks up to a door in the back and sees Fairy Godmother's men from before standing guard.

HAROLD: Oh, hello again. Heh...

He goes through the doors.

'''INT. - POISON APPLE. BACK ROOM.'''

Fairy Godmother and Charming stand waiting inside the room.

HAROLD: Fairy Godmother. Charming.

GODMOTHER: Ugh, you’d better have a good reason for dragging us down here, Harold.

HAROLD: Well, I’m afraid Fiona isn’t really…warming up to Prince Charming.

CHARMING: Umm, F-Y-I, not my fault.

GODMOTHER: Oh no, no, of course it’s not, dear.

CHARMING: I mean, how charming can I be when I have to pretend I’m that dreadful ogre?

HAROLD: No, no, it’s nobody’s fault. Perhaps it’s best if we just call the whole thing off, okay?

GODMOTHER & CHARMING: ''What''?!

HAROLD: I mean you can’t force someone to fall in love!

GODMOTHER: Oh I beg to differ. I do it all the time.

Fairy Godmother pulls out a red vial and hands it to Harold. Shrek is listening in from the window, outside and out of sight.

GODMOTHER: Have Fiona drink this and she’ll fall in love with the first man she kisses, which will be Charming.

HAROLD: Umm… no.

GODMOTHER: What did you say?

HAROLD: I...I...I can’t. I...I won’t do it.

GODMOTHER: Oh, yes, you will. If you remember, I helped you with your happily ever after. And I can take it away just as easily.

Fairy Godmother sticks her wand in Harold's face and it begins to glow.

GODMOTHER: Is that what you want? Is it?

HAROLD: No.

GODMOTHER: Good boy. Now, we have to go. I need to do Charming’s hair before the ball. He’s hopeless. Y'know he’s all high in the front, he can never get to the back. You always need someone to do the back of your hair.

CHARMING: Oh! Thank you, mother.

DONKEY: Mother?!

The three look out the window to see Shrek, Donkey, and Puss standing at the window.

SHREK: Um… Mary! A talking horse!

GODMOTHER: The ogre!

'''EXT. - THE POISON APPLE. DAY.'''

Outside by the entrance, a pair of guards are interrogating the Headless Horseman. Shrek and Puss ride Donkey and sprint past them. Godmother comes flying after them.

GODMOTHER: Stop them! Thieves! Bandits! Stop them!

Godmother tries to zap them as the guards start running after them.

'''EXT. - FAR FAR AWAY PALACE. EVENING.'''

Fireworks go off in the evening sky. The red carpet is rolled out in front of the palace and festivities are set up. Crowds of people are gathered by the red carpet as celebrities walk down it.

ANNOUNCER: Well, the abs are fab and it’s gluteus to the maximus here at tonight’s Far, Far Away Royal Ball Blowout! The coaches are lined up as the cream of the crop pours out of them like Miss Muffet’s curds and whey!

[[Joan Rivers]] talks to the camera with loudspeaker in hand.

JOAN: Everyone who’s anyone has turned out to honor Princess Fiona and Prince Shrek and, oh my, the outfits look gorgeous! Look! [[Hansel and Gretel]]!

Hansel and Gretel skip down the carpet hand in hand, tossing bread crumbs along their path.

JOAN: What the heck are the crumbs for? And right behind them, Tom Thumb and Thumbelina! Oh, aren’t they adorable!

The tiny Tom Thumb and Thumbelina are mistakenly swept up by a man sweeping the crumbs.

JOAN: Here comes Sleeping Beauty!

The carriage door is opened and Sleeping Beauty falls onto the carpet, still sleeping.

JOAN: Oh, tired old thing...who’s this? Who’s this?! Who is this?

Fairy Godmother's pink carriage descends.

JOAN: Oh. It’s the one, it’s the only…it’s the Fairy Godmother!

Fairy Godmother hovers her way across the red carpet.

GODMOTHER: Hello, Far, Far Away! Can I get a "whoop-whoop"? 

The crowd whoops.

GODMOTHER: May all your endings be happy and…well, you know the rest!

'''INT. - THE SWAMP. SHREK'S HOME.'''

Pinocchio, Ginny, Wolf, the Three Little Pigs, and the Three Blind Mice are using the Magic Mirror as a TV. They are watching footage of the event as it cuts to a commercial break.

MIRROR: We’ll be right back with the Royal Far Far Away Ball after these messages.

GINGY: I hate these ball shows! They bore me to tears. Flip over to ''Wheel Of Torture.''

PINOCCHIO: I’m not flipping anywhere, sir, until I see Shrek and Fiona.

GINGY: Whizzes on you guys! Hey, mice, pass me a buffalo wing. 

The mice start moving their canes around, unaware that the plate of chicken wings is right next to them.

GINGY: No no, to your left. Your left!

A chicken wing flies up and lands inside the rancid fish bowl.

MIRROR: Tonight on "[[K.N.I.G.H.T.S|KN.I.G.H.T.S.]]"…

GINGY: Ah! Now here’s a good show!

Footage plays of Shrek, Donkey, and Puss being chased by several patrols of knights.

KNIGHT: We got a white bronco heading east into the forest. Requesting backup.

NARRATOR: It’s time to teach these madcap mammals their "devil may mare" attitudes just won’t fly.

The chase ends in the streets of Far Far Away. Two knights seize Shrek and three more point their crossbows at him.

SHREK: Alright, alright! Let me go!

Three knights are restraining Donkey.

DONKEY: Why are you grabbing me? Ow! Police brutality! Police brutality!

DONKEY: I have to talk to Princess Fiona!

KNIGHTl We warned you!

A knight runs up to Shrek with pepper shaker and sprays it into his eyes.

SHREK: Ow! Ow!

NARRATOR: Will they get away with it? Or did someone let the cat out of the bag?

PUSS: You capitalist pig dogs!

Puss pounces on a knight who grabs him. Two knights restrain him and one lifts a dime bag off of him. He sniffs it and shows the camera.

KNIGHT: Catnip!

PUSS: That’s, uh, not mine.

The knights proceed to throw Shrek, Donkey, and Puss into the back of a metal wagon.

SHREK: Hold on! Alright! Find Princess Fiona!

DONKEY: I’m a donkey!

The knights shut the doors of the van. Shrek yells through the bars of the door.

SHREK: Tell her, Shrek--I’m her husband, Shrek! Ow!

The show freezes frame on Shrek's face as a knight sprays him with a pepper shaker again.

NARRATOR: K.N.I.G.H.T.S.!

GINGY: Quick! Rewind it!

The Mirror rewinds the footage.

SHREK: Tell her, Shrek--I’m her husband, Shrek! Ow!

The playback stops. Everyone on the couch sits with their mouths wide open.

'''INT. - FAR FAR AWAY PALACE. NIGHT.'''

Harold is pouring tea into two cups on a tray. He reluctantly pours the contents of the Love Potion into one of the cups. Out from the cup comes a magical dust in the shape of heart, which then dissipates. He pushes open a door, carrying the tray of tea, and sees Fiona staring out of a window.

HAROLD: Darling? Ah. I thought I might find you here. How about a nice hot cup of tea before the ball?

FIONA: (sighs) I’m not going.

HAROLD: But, but, but the...the whole kingdom’s turned out to celebrate your marriage.

FIONA: There’s just one problem. That’s not my husband. I mean, look at him.

Fiona gestures out the window at Prince Charming on the red carpet, who is playing up to the crowd.

HAROLD: Yes, he is a bit...different, but people change for the ones they love. You’d be surprised how much I changed for your mother.

Harold sets the tray down on the window sill.

FIONA: ''Change''? He’s completely lost his mind!

HAROLD: Darling, why not come down to the ball and give him another chance? I mean, you might find you like this new Shrek.

FIONA: But it’s the old one I fell in love with, Dad. I’d give anything to have him back.

Fiona reaches for one of the tea cups but Harold quickly grabs it instead.

HAROLD: Uh, darling. That’s mine. Decaf. O-otherwise I’m up all night.

Fiona takes a sip from the other cup and smiles.

FIONA: Thanks.

Harold smiles back but looks distressed.

'''INT. - [[Jail Tower|JAIL TOWER]]. NIGHT.'''

A bridge from the main land connects to an island. On the island is a massive, stone prison with a giant tower. Shrek, Donkey, and Puss are in a prison cell. Chains dangle from the ceiling which attach to their shackles, keeping them suspended above the floor.

DONKEY: I gotta get out of here! You can’t lock us up like this! Let me go! Hey, what about my Miranda Rights? You’re supposed to say, I have the right to remain silent.! Nobody said I have the right to remain silent!

SHREK: Donkey, you ''have'' the right to remain silent! What you lack is the capacity!

PUSS: I must hold on before I, too, go totally mad.

PINOCCHIO: Shrek? Donkey?

Staring down from above through a grate is Pinocchio, Ginny, Wolf, the Three Little Pigs, and the Three Blind Mice.

PUSS: Too late.

SHREK: Gingy! Pinocchio! Get us out of here!

Dynamite sticks are rigged to the grate. One of the mice carries the a lit match to light the fuse, but falls through the grate.

BLIND MOUSE: Oh…

The mouse lands with a thud. The Three Little Pigs shake their heads and light the match themselves.

LITTLE PIG: Fire in ze hole!

The dynamites' explosion blows off the grate. Pinocchio, with key in hand, jumps and the pigs lowers down by his strings. Pinocchio tangles himself up in his strings after flipping and posing on the way down. Gingy groans and slides down the string.

GINGY: Look out below!

SHREK: Quick! Tell a lie!

PINOCCHIO: What should I say?

GINGY: Anything, but quick!

DONKEY: Say something crazy like "I’m wearing ladies’ underwear!"

PINOCCHIO: I'm...I am wearing ladies’ underwear.

They wait for Pinocchio's nose to grow but nothing happens.

SHREK: Heh...are you?

PINOCCHIO: I most certainly am not!

His nose grows a bit.

DONKEY: It looks like you most certainly am are!

PINOCCHIO:  I am not!

His nose grows even further.

PUSS: What kind?

GINGY: It’s a thong!

Gingy pulls at his pink thong and lets it slap back.

PINOCCHIO: Oww! They’re briefs!

Gingy takes the key and runs across Pinocchio's nose as it continues to grow with each denial.

GINGY: Are not!

PINOCCHIO: Are too!

GINGY: Are not!

PINOCCHIO: Are too!

Gingy eventually reaches Shrek and uses the key to free Shrek, Donkey, and Puss. 

GINGY: Here we go. Hang tight!

DONKEY: Wait, wait, wait! Ow! Ow! Hey, hey, hey! Ow!

The three are dropped down onto the floor of the cell. Shrek looks out the window, seeing the Far Far Away Palace. Shrek hears a muffled voice.

BLIND MOUSE: Excuse me?

SHREK: What?.. Puss!

He sees the mouse's tail sticking out from Puss' mouth.

BLIND MOUSE: Pardon me, would you mind letting me go?

Puss spits out the mouse.

PUSS: Sorry, boss.

SHREK: Quit messing around! We’ve got to stop that kiss!

DONKEY: I thought you was going to let her go.

SHREK: I was, but I can’t let them do this to Fiona!

DONKEY: Boom! That’s what I like to hear. Look who’s finally coming around!

PUSS: But it’s impossible! We’ll never get in. The castle is guarded and there is a moat and everything!

GINGY: Well, folks, it looks like we’re up chocolate creek without a Popsicle stick.

Shrek stares thoughtfully at Gingy.

GINGY: What?

SHREK: Do you still know the Muffin Man?

GINGY: Well, sure! He’s down on [[Drury Lane]]. Why?

SHREK: Because we’re gonna need flour. Lots and lots of flour.

'''EXT. - [[Drury Lane|DRURY LANE]]. NIGHT.'''

Shrek knocks on the front door of a bakery. [[Muffin Man|The Muffin Man]] opens the door and happily greets Gingy, who is standing on Shrek's shoulder.

MUFFIN MAN: Gingy!

GINGY: Fire up the ovens, Muffin Man! We’ve got a big order to fill!

An evil chuckle is heard from inside the bakery as lightning strikes in the sky.

GINGY: It’s alive!

'''CITY OF FAR FAR AWAY. NIGHT.'''

A couple is out on a table drinking tea when their cups begin to shake. In the city, palm trees not too far off fall down one after the other. Donkey comes chasing through with Puss, Pinocchio, Wolf, the Pigs, and the Mice on his back. 

DONKEY: Run, run, run, as fast you can!

Citizens of the kingdom scream as the feet of a giant gingerbread man stomp through the streets. His name is [[Mongo]], and Shrek and Gingy are riding on his shoulders.

GINGY: Go, baby, go!

SHREK: There it is, Mongo! To the castle!

Shrek points towards the Far Far Away Palace. Mongo instead grabs a giant coffee mug on top of a Farbucks Coffee building.

SHREK: No, you great stupid pastry! Come on!

Customers come running out of the building. Mongo tries to drink from the giant cup, but drops it after nothing comes out of it.

DONKEY: Mongo! Down here! Look at the pony!

Mongo starts to giggle and follow Donkey.

DONKEY: That’s right! Follow the pretty pony! Pretty pony wants to play at the castle!

MONGO: Oooh, pretty pony.

'''EXT. - FAR FAR AWAY PALACE. COURTYARD.'''

Harold walks with Fiona in arm and gives her off to Prince Charming. An audience gathered out on the ballroom floor cheers as Charming waves.

ANNOUNCER: Ladies and gentlemen! Presenting Princess Fiona and her new husband, Prince Shrek!

The crowd applauds and Lillian claps along. Fiona has her hand on Charming's arm as they walk down the steps. Charming continues to wave and blow kisses.

FIONA: Shrek, what are you doing?

CHARMING: I’m just playing the part, Fiona.

FIONA: Is that glitter on your lips?

CHARMING: Mmm, cherry flavored. Want a taste?

FIONA: Ugh! What is with you?

Fiona lets go and starts to walk back up the stairs.

CHARMING: But, Muffin Cake…

Charming shrugs at the Fairy Godmother, who is across the room and by the stage. She goes over to the piano player snapping her fingers.

GODMOTHER: C minor, put it in C minor. 

Godmother addresses the crowd and conjures herself a flashy, red dress.

GODMOTHER: Ladies and gentlemen. I’d like to dedicate this song to…Princess Fiona and Prince Shrek.

A spotlight shines on the two and Fiona stops to look back.

CHARMING: Fiona, my Princess. Will you honor me with a dance?

Fiona looks hesitantly at Charming and then back at Godmother. She starts singing the song "Holding Out for a Hero".

GODMOTHER: Where have all the good men gone / And where are all the gods?

Godmother continutes to sing. Fiona looks uncomfortably at the crowd who are all chanting "Dance! Dance!" . Prince Charming holds out his hand and Fiona eventually takes it. They slowly dance on the ballroom floor.

FIONA: Since when do you dance?

CHARMING: Fiona, my dearest, if there’s one thing I know, it’s that love is full of surprises.

GODMOTHER: Late at night I toss and I turn / And I dream of what I need...Hit it!

A band and choir join in and the music kicks into gear.

'''EXT. - FAR FAR AWAY PALACE. OUTER WALLS.'''

Mongo, Shrek, and Gingy approach the walls surrounding the palace. Surrounding the walls is a deep moat and the drawbridge over it has been pulled up. Guards rush around the top of the walls as the [[Captain of the Guards]] shouts orders.

SHREK: All right, big fella! Let’s crash this party!

CAPTAIN: Man the catapults! Ready! Fire!

A guard uses a catapult to launch a fireball right at Mongo's chest,

SHREK: Brace yourselves!

MONGO: Ooh! Purty!

The fireball hits him in the chest and he steps back, nearly stomping on Donkey and the rest of the group. 

GINGY: Not the gumdrop button!

The fireball hit him square in the gumdrop. Mongo watches the gumdrop drop to the ground, still on fire, and lets out a Godzilla-esque roar. Mongo kicks the gumdrop back, landing right on top of the catapult and destroying it.

GUARD: Incoming!

DONKEY: Ha-ha! All right!

'''EXT. - FAR FAR AWAY PALACE. COURTYARD.'''

Charming and Fiona continue to dance, though she is still uncomfortable. Watching on from the side, Harold is facepalming and Lillian looks at him.

'''EXT. - FAR FAR AWAY PALACE. OUTER WALLS.'''

Mongo is getting closer to the gate but the guards are shooting more fireballs at him.

SHREK: Go, Mongo! Go!

CAPTAIN: Man the cauldrons!

The guards pour hot, bubbling liquid into a set of machinery,

SHREK: After you, Mongo. 

Mongo starts to pull down the drawbridge.

SHREK: That’s it! Heave-ho!

The guards pour down a giant vat of the liquid onto Mongo's head.

SHREK: Watch out!

DONKEY: Shrek!

Mongo rises back up, the foam having formed around his head like a wig.

GUARD: More heat, less foam!

'''EXT. - FAR FAR AWAY PALACE. COURTYARD.'''

Godmother continues to sing. Charming is tossing a rose around his mouth.

'''EXT. - FAR FAR AWAY PALACE. OUTER WALLS.'''

Mongo is trying to pull down the drawbridge again.

SHREK: Heave! Ho!

Shrek looks up as the guards pour down more liquid onto Mongo. This time his arms snap off, still holding open the drawbridge, as the rest of Mongo starts falling back into the moat. Shrek grabs onto one the arms and Gingy jumps back down to Mongo.

GINGY: Nooo…!

Mongo's arms start to crack as the guards try to pull the drawbridge back up. Shrek climbs up and gets through.

'''EXT. - FAR FAR AWAY PALACE. COURTYARD.'''

Charming spits out the rose, scoops Fiona in his arms, and leans in for a kiss. Fiona grabs the rose and puts it in her mouth, stopping him. They continue to dance.

'''EXT. - FAR FAR AWAY PALACE.''' 

Shrek swings down the chain to the drawbridge and knocks over the three guards that were pulling on it. He lowers the drawbridge for the rest of the group.

SHREK: [whistles] Come on!

The group cheers. Meanwhile, Gingy is standing on Mongo's face as he sinks into the water.

MONGO: Be...good.

Gingy is scooped up by Puss' sword and into Pinocchio's arms.

GINGY: He needs me! Let me go!

Shrek and Puss ride Donkey up the deserted red carpet and toward the front doors of the palace. Suddenly a group of armed guards show up and block the doorway.

SHREK: Donkey!

Donkey leaps up and over the group of guards and they chase after them. Puss jumps off and Shrek and Donkey halt.

SHREK: Puss!

PUSS: Go! Go! Your lady needs you! Go! 

Donkey and Shrek race off as Puss turns to face the guards. He takes off his hat and sheathes his sword.

PUSS: Today, I repay my debt.

Puss puts on his cute, guilty face. The guards stop and lift the visors from the helmets.

GUARDS: Aww…

PUSS: [growling] En garde!

Puss leaps from guard to guard, battling them off with his sword.

'''EXT. - FAR FAR AWAY PALACE. COURTYARD.'''

Charming once again leans Fiona down in his arms and tries to kiss her. This time she doesn't resist. But just as they are about to kiss, Shrek and Donkey come bursting through the doors to the courtyard.

SHREK: Stop!

The music comes to a halt. Donkey hurries down the stairs and Shrek jumps off his back.

SHREK: Hey, you! Back away from my wife!

FIONA: Shrek?

The crowd gasps. Harold and Lillian look on, surprised. 

GODMOTHER: You couldn’t just go back to your swamp and leave well enough alone.

SHREK: Now!

The Three Little Pigs launch one of themselves at Godmother using a blanket as a slingshot.

Three Little Pigs: Pigs und blanket!

The pig grabs onto Godmother's leg and she tries to shake him off. Shrek swings Pinocchio by his strings and throws him at Godmother.

SHREK: Pinocchio! Get the wand!

PIG #1''':''' I see London! I see France!

PINOCCHIO: Waaaahhh! 

Pinocchio misses Godmother and she shoots him with her wand, transforming him into a human boy.

PINOCCHIO: I’m a real boy!

Godmother flings the pig into the open window of some woman. She raises her wand to zap Shrek, but Wolf begins blowing her away with his breath. She drops the wand and another pig grabs it and runs. She chases after him.

DONKEY: Pig!

The pig throws the wand to Donkey.

GINGY: Donkey!

Donkey throws it to Gingy as the Fairy Godmother still tries to grab it. Gingy throws it to the Three Blind Mice who don't catch it. The wand bounces on the ground and activates.

PINOCCHIO: I’m a real boy. Ah!--

The wand's magic hits Pinocchio and he turns back into his puppet self.

PINOCCHIO: Oh...

Shrek and Godmother chase after the wand.

GODMOTHER: That’s mine! That’s mine!

Godmother grabs it but Shrek swipes it out of her hands and into the air. Donkey races to the wand. Puss climbs on top of his head and grabs it.

DONKEY: Pray for mercy, from Puss!...

PUSS: And Donkey!

GODMOTHER: She’s taken the potion! Kiss her now!

Charming runs up to Fiona, grabs her shoulders, and kisses her.

SHREK: No!

Shrek drops to his knees. Harold and Lillian look on with concern. Godmother smiles. Fiona looks at Charming with surprise, and then with affection. Charming puts his hand on Fiona's face, and then she holds his face with both hands.

FIONA: Hi-ya!

Fiona headbutts Charming and he drops to the floor. The crowd gasps. Shrek runs up to Fiona.

SHREK: Fiona.

FIONA: Shrek.

GODMOTHER: Harold! You were supposed to give her the potion!

HAROLD: Well...I guess I gave her the wrong tea.

Charming grabs the wand from Puss and throws it to Godmother.

CHARMING: Mummy!

FIONA: Mummy?

GODMOTHER: I told you!...

Godmother flies up into the air, clutching onto the wand. Shrek and Fiona hold onto each other.

GODMOTHER: Ogres don’t live happily ever after!

Godmother zaps her wand at Shrek and Fiona. Shrek pushes Fiona out of the way and to the ground. Harold runs over to them.

LILLIAN: Harold!

FIONA: Shrek!

Harold leaps in front of Shrek and gets hit by the wand's zap. Harold's ceremonial armor chestplate bounces the magical trail back to hit Godmother. She is knocked back but appears to be unscathed.

GODMOTHER: Woo....ha!--

Godmother turns into bubbles. Her glasses and wand drop to the ground. Fiona runs over to Harold's now empty armor and clothes.

FIONA: [gasping] Oh, Dad!

She sobs and Shrek takes her in his arms. Lillian runs over.

PINOCCHIO: Is he…?

GINGY: Yup.

A frog ribbit is heard from inside the chestplate.

GINGY: He croaked.

A frog comes crawling out from inside the chestplate.

LILLIAN: Harold?

FIONA: Dad?

HAROLD: I’d hoped you’d never see me like this.

DONKEY: Hey! And he gave you a hard time!

SHREK: Donkey!

HAROLD: No, no, he’s right. I’m sorry. To both of you. I only wanted what was best for Fiona. But I can see now… she already has it. Shrek, Fiona…will you accept an old frog’s apologies… and my blessing?

LILLIAN: Harold?

HAROLD: I’m sorry, Lillian. I just wish I could be the man you deserve.

Harold tries to leap away but Lillian catches him.

LILLIAN: You’re more that man today than you ever were… warts and all.

Harold ribbits. The clock chimes.

PUSS: Boss! The Happily Ever After Potion!

SHREK: Midnight! Fiona, is this what you want? To be this way forever?

FIONA: What?

SHREK: Because if you kiss me now…we can stay like this.

FIONA: You’d do that? For me?

SHREK: Yes.

Fiona looks back Lillian and Harold, then back to Shrek.

FIONA: I want what any princess wants. To live happily ever after…

Shrek leans in to kiss Fiona, but she gently stops him with her hand.

FIONA: ...with the ogre I married.

PUSS: Whatever happens, I must not cry! You cannot make me cry!

Puss quietly cries and the clock bells ring.

Shrek and Fiona hold each other's hands as they are engulfed in a magical aura and float into the air. The same happens to Donkey. Donkey begins to transform back into his donkey self.

DONKEY: No. No, no. Aaah! Ow. Oh, no.

He is lowered back to the ground. So are Shrek and Fiona, who are both now ogres. Donkey sighs.

SHREK: [laughs] Hey. You still look like a noble steed to me.

FIONA: [giggles] Now, where were we?

SHREK: Oh. I remember.

Shrek leans Fiona over and they kiss. The crowd claps.

PUSS: Hey! Isn’t we supposed to be having a fiesta?

The crowd cheers and Puss and Donkey take to the stage.

DONKEY: Uno, dos, quatro, hit it! Puss and Donkey, y’all…

Puss and Donkey start singing "Livin' La Vida Loca". The band accompanies them.

DONKEY: She’s into superstitions / Black cats and voodoo dolls...sing it, Puss!

PUSS: I feel a premonition / That girl’s gonna make me fall

DONKEY: Here we go!

The whole crowd is now dancing along.

PUSS: She’s into new sensations / New kicks in the candlelight

DONKEY & PUSS: She’s got a new addiction / For every day and night / She’ll make you take your clothes off / And go dancing in the rain / She’ll make you live her crazy life / But she’ll take away your pain / Like a bullet to your brain / Upside inside out / Living la vida loca

Doris walks up to Charming and tries to kiss him.

DORIS: Hey gorgeous!

Mongo is still fully submerged under the water.

MONGO: Living la vida loca

DONKEY & PUSS: Her lips are devil red / And her skin’s the color of mocha / She will wear you out / Living la vida loca

DONKEY: Oh, she livin’ it loca!

PUSS: Living la vida loca

DONKEY: Say it one more time now!

DONKEY & PUSS: Living la vida loca

PUSS: Hey, Donkey, that’s Spanish!

DONKEY & PUSS: She’ll push and pull you down / Living la vida loca / She will wear you out / Living la vida loca / Living la vida loca / She’ll push and pull you down / Living la vida loca / Her lips are devil red / And her skin’s the color of mocha / She will wear you out / Living la vida loca / Living la vida loca / Living la vida loca / Living la vida loca 

The song ends and the end credits roll. The dance floor is empty, except for Shrek and Fiona still slow dancing. Donkey sits on the stage quietly singing.

DONKEY: All by myself / Don’t wanna be / All by myself anymore…

Puss walks up with two women by his side.

PUSS: Amigo, we are off to the Kit-Kat Club. Come on, join us.

DONKEY: Thanks, compadre. I’m… I’m not in the mood.

PUSS: We will cheer you up! Find you a nice....uh, burro!

A dragon roars. Donkey looks up into the sky.

DONKEY: Hey, baby! Woo! Hey, that’s my girl! Yeah! All right! 

Dragon lands on the dance floor.

DONKEY: Baby, where you been?

DRAGON: [whimpers]

DONKEY: I’m sorry, too. I should’ve stayed. But Shrek had this thing he had to do  and uh--

DRAGON: [groans]

DONKEY: What? Say it one more time. What you talking about? Are you serious?!

In comes flying a small donkey with the wings, scales, and fiery breath of a dragon.

[[Dronkeys|DRONKEY]]: Da-da!

Five more of the dronkeys come flying in and jump all over Donkey. Dragon blows a cloud in the shape of a heart.

DONKEY: Look at our little mutant babies! I got to get a job.

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
