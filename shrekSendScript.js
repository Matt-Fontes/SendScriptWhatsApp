async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
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
SHREK

Written by

William Steig & Ted Elliott




SHREK
Once upon a time there was a lovely 
princess. But she had an enchantment 
upon her of a fearful sort which could 
only be broken by love's first kiss. 
She was locked away in a castle guarded 
by a terrible fire-breathing dragon. 
Many brave knights had attempted to 
free her from this dreadful prison, 
but non prevailed. She waited in the 
dragon's keep in the highest room of 
the tallest tower for her true love 
and true love's first kiss. (laughs) 
Like that's ever gonna happen. What 
a load of - (toilet flush)

Allstar - by Smashmouth begins to play. Shrek goes about his 
day. While in a nearby town, the villagers get together to go 
after the ogre.

NIGHT - NEAR SHREK'S HOME

MAN1
Think it's in there?

MAN2
All right. Let's get it!

MAN1
Whoa. Hold on. Do you know what that 
thing can do to you?

MAN3
Yeah, it'll grind your bones for it's 
bread.

Shrek sneaks up behind them and laughs.

SHREK
Yes, well, actually, that would be a 
giant. Now, ogres, oh they're much worse. 
They'll make a suit from your freshly 
peeled skin.

MEN
No!

SHREK
They'll shave your liver. Squeeze the 
jelly from your eyes! Actually, it's 
quite good on toast.

MAN1
Back! Back, beast! Back! I warn ya! 
(waves the torch at Shrek.)

Shrek calmly licks his fingers and extinguishes the torch. The 
men shrink back away from him. Shrek roars very loudly and long 
and his breath extinguishes all the remaining torches until the 
men are in the dark.

SHREK
This is the part where you run away. 
(The men scramble to get away. He laughs.) 
And stay out! (looks down and picks 
up a piece of paper. Reads.) "Wanted. 
Fairy tale creatures."(He sighs and 
throws the paper over his shoulder.)


THE NEXT DAY

There is a line of fairy tale creatures. The head of the guard 
sits at a table paying people for bringing the fairy tale creatures 
to him. There are cages all around. Some of the people in line 
are Peter Pan, who is carrying Tinkerbell in a cage, Gipetto 
who's carrying Pinocchio, and a farmer who is carrying the three 
little pigs.

GUARD
All right. This one's full. Take it 
away! Move it along. Come on! Get up!


HEAD GUARD
Next!

GUARD
(taking the witch's broom) Give me that! 
Your flying days are over. (breaks the 
broom in half)

HEAD GUARD
That's 20 pieces of silver for the witch. 
Next!

GUARD
Get up! Come on!

HEAD GUARD
Twenty pieces.

LITTLE BEAR
(crying) This cage is too small.

DONKEY
Please, don't turn me in. I'll never 
be stubborn again. I can change. Please! 
Give me another chance!

OLD WOMAN
Oh, shut up. (jerks his rope)

DONKEY
Oh!

HEAD GUARD
Next! What have you got?

GIPETTO
This little wooden puppet.

PINOCCHIO
I'm not a puppet. I'm a real boy. (his 
nose grows)

HEAD GUARD
Five shillings for the possessed toy. 
Take it away.

PINOCCHIO
Father, please! Don't let them do this! 
Help me!

Gipetto takes the money and walks off. The old woman steps up 
to the table.

HEAD GUARD
Next! What have you got?

OLD WOMAN
Well, I've got a talking donkey.

HEAD GUARD
Right. Well, that's good for ten shillings, 
if you can prove it.

OLD WOMAN
Oh, go ahead, little fella.

Donkey just looks up at her.

HEAD GUARD
Well?

OLD WOMAN
Oh, oh, he's just...he's just a little 
nervous. He's really quite a chatterbox. 
Talk, you boneheaded dolt...

HEAD GUARD
That's it. I've heard enough. Guards!


OLD WOMAN
No, no, he talks! He does. (pretends 
to be Donkey) I can talk. I love to 
talk. I'm the talkingest damn thing 
you ever saw.

HEAD GUARD
Get her out of my sight.

OLD WOMAN
No, no! I swear! Oh! He can talk!

The guards grab the old woman and she struggles with them. One 
of her legs flies out and kicks Tinkerbell out of Peter Pan's 
hands, and her cage drops on Donkey's head. He gets sprinkled 
with fairy dust and he's able to fly.

DONKEY
Hey! I can fly!

PETER PAN
He can fly!

3 LITTLE PIGS
He can fly!

HEAD GUARD
He can talk!

DONKEY
Ha, ha! That's right, fool! Now I'm 
a flying, talking donkey. You might 
have seen a housefly, maybe even a superfly 
but I bet you ain't never seen a donkey 
fly. Ha, ha! (the pixie dust begins 
to wear off) Uh-oh. (he begins to sink 
to the ground.)

He hits the ground with a thud.

HEAD GUARD
Seize him! (Donkey takes of running.) 
After him!

GUARDS
He's getting away! Get him! This way! 
Turn!

Donkey keeps running and he eventually runs into Shrek. Literally. 
Shrek turns around to see who bumped into him. Donkey looks scared 
for a moment then he spots the guards coming up the path. He 
quickly hides behind Shrek.

HEAD GUARD
You there. Ogre!

SHREK
Aye?

HEAD GUARD
By the order of Lord Farquaad I am authorized 
to place you both under arrest and transport 
you to a designated resettlement facility.


SHREK
Oh, really? You and what army?

He looks behind the guard and the guard turns to look as well 
and we see that the other men have run off. The guard tucks tail 
and runs off. Shrek laughs and goes back about his business and 
begins walking back to his cottage.

DONKEY
Can I say something to you? Listen, 
you was really, really, really somethin' 
back here. Incredible!

SHREK
Are you talkin' to...(he turns around 
and Donkey is gone) me? (he turns back 
around and Donkey is right in front 
of him.) Whoa!

DONKEY
Yes. I was talkin' to you. Can I tell 
you that you that you was great back 
here? Those guards! They thought they 
was all of that. Then you showed up, 
and bam! They was trippin' over themselves 
like babes in the woods. That really 
made me feel good to see that.

SHREK
Oh, that's great. Really.

DONKEY
Man, it's good to be free.

SHREK
Now, why don't you go celebrate your 
freedom with your own friends? Hmm?


DONKEY
But, uh, I don't have any friends. And 
I'm not goin' out there by myself. Hey, 
wait a minute! I got a great idea! I'll 
stick with you. You're mean, green, 
fightin' machine. Together we'll scare 
the spit out of anybody that crosses 
us.

Shrek turns and regards Donkey for a moment before roaring very 
loudly.

DONKEY
Oh, wow! That was really scary. If you 
don't mind me sayin', if that don't 
work, your breath certainly will get 
the job done, 'cause you definitely 
need some Tic Tacs or something, 'cause 
you breath stinks! You almost burned 
the hair outta my nose, just like the 
time...(Shrek covers his mouth but Donkey 
continues to talk, so Shrek removes 
his hand.) ...then I ate some rotten 
berries. I had strong gases leaking 
out of my butt that day.

SHREK
Why are you following me?

DONKEY
I'll tell you why. (singing) 'Cause 
I'm all alone, There's no one here beside 
me, My problems have all gone, There's 
no one to deride me, But you gotta have 
faith...

SHREK
Stop singing! It's no wonder you don't 
have any friends.

DONKEY
Wow. Only a true friend would be that 
cruelly honest.

SHREK
Listen, little donkey. Take a look at 
me. What am I?

DONKEY
(looks all the way up at Shrek) Uh ...really 
tall?

SHREK
No! I'm an ogre! You know. "Grab your 
torch and pitchforks." Doesn't that 
bother you?

DONKEY
Nope.

SHREK
Really?

DONKEY
Really, really.

SHREK
Oh.

DONKEY
Man, I like you. What's you name?

SHREK
Uh, Shrek.

DONKEY
Shrek? Well, you know what I like about 
you, Shrek? You got that kind of I-don't-care-what-nobody-thinks-of-me 
thing. I like that. I respect that, 
Shrek. You all right. (They come over 
a hill and you can see Shrek's cottage.) 
Whoa! Look at that. Who'd want to live 
in place like that?

SHREK
That would be my home.

DONKEY
Oh! And it is lovely! Just beautiful. 
You know you are quite a decorator. 
It's amazing what you've done with such 
a modest budget. I like that boulder. 
That is a nice boulder. I guess you 
don't entertain much, do you?

SHREK
I like my privacy.

DONKEY
You know, I do too. That's another thing 
we have in common. Like I hate it when 
you got somebody in your face. You've 
trying to give them a hint, and they 
won't leave. There's that awkward silence. 
(awkward silence) Can I stay with you?


SHREK
Uh, what?

DONKEY
Can I stay with you, please?

SHREK
(sarcastically) Of course!

DONKEY
Really?

SHREK
No.

DONKEY
Please! I don't wanna go back there! 
You don't know what it's like to be 
considered a freak. (pause while he 
looks at Shrek) Well, maybe you do. 
But that's why we gotta stick together. 
You gotta let me stay! Please! Please!


SHREK
Okay! Okay! But one night only.

DONKEY
Ah! Thank you! (he runs inside the cottage)


SHREK
What are you...? (Donkey hops up onto 
a chair.) No! No!

DONKEY
This is gonna be fun! We can stay up 
late, swappin' manly stories, and in 
the mornin' I'm makin' waffles.

SHREK
Oh!

DONKEY
Where do, uh, I sleep?

SHREK
(irritated) Outside!

DONKEY
Oh, well, I guess that's cool. I mean, 
I don't know you, and you don't know 
me, so I guess outside is best, you 
know. Here I go. Good night. (Shrek 
slams the door.) (sigh) I mean, I do 
like the outdoors. I'm a donkey. I was 
born outside. I'll just be sitting by 
myself outside, I guess, you know. By 
myself, outside. I'm all alone...there's 
no one here beside me...

SHREK'S COTTAGE - NIGHT

Shrek is getting ready for dinner. He sits himself down and lights 
a candle made out of earwax. He begins to eat when he hears a 
noise. He stands up with a huff.

SHREK
(to Donkey) I thought I told you to 
stay outside.

DONKEY
(from the window) I am outside.

There is another noise and Shrek turns to find the person that 
made the noise. He sees several shadows moving. He finally turns 
and spots 3 blind mice on his table.

BLIND MOUSE1
Well, gents, it's a far cry from the 
farm, but what choice do we have?


BLIND MOUSE2
It's not home, but it'll do just fine.


GORDO
(bouncing on a slug) What a lovely bed.


SHREK
Got ya. (Grabs a mouse, but it escapes 
and lands on his shoulder.)

GORDO
I found some cheese. (bites Shrek's 
ear)

SHREK
Ow!

GORDO
Blah! Awful stuff.

BLIND MOUSE1
Is that you, Gordo?

GORDO
How did you know?

SHREK
Enough! (he grabs the 3 mice) What are 
you doing in my house? (He gets bumped 
from behind and he drops the mice.) 
Hey! (he turns and sees the Seven Dwarves 
with Snow White on the table.) Oh, no, 
no, no. Dead broad off the table.


DWARF
Where are we supposed to put her? The 
bed's taken.

SHREK
Huh?

Shrek marches over to the bedroom and throws back the curtain. 
The Big Bad Wolf is sitting in the bed. The wolf just looks at 
him.

BIG BAD WOLF
What?

TIME LAPSE

Shrek now has the Big Bad Wolf by the collar and is dragging 
him to the front door.

SHREK
I live in a swamp. I put up signs. I'm 
a terrifying ogre! What do I have to 
do get a little privacy? (He opens the 
front door to throw the Wolf out and 
he sees that all the collected Fairy 
Tale Creatures are on his land.) Oh, 
no. No! No!

The 3 bears sit around the fire, the pied piper is playing his 
pipe and the rats are all running to him, some elves are directing 
flight traffic so that the fairies and witches can land...etc.


SHREK
What are you doing in my swamp? (this 
echoes and everyone falls silent.)


Gasps are heard all around. The 3 good fairies hide inside a 
tent.

SHREK
All right, get out of here. All of you, 
move it! Come on! Let's go! Hapaya! 
Hapaya! Hey! Quickly. Come on! (more 
dwarves run inside the house) No, no! 
No, no. Not there. Not there. (they 
shut the door on him) Oh! (turns to 
look at Donkey)

DONKEY
Hey, don't look at me. I didn't invite 
them.

PINOCCHIO
Oh, gosh, no one invited us.

SHREK
What?

PINOCCHIO
We were forced to come here.

SHREK
(flabbergasted) By who?

LITTLE PIG
Lord Farquaad. He huffed and he puffed 
and he...signed an eviction notice.


SHREK
(heavy sigh) All right. Who knows where 
this Farquaad guy is?

Everyone looks around at each other but no one answers.

DONKEY
Oh, I do. I know where he is.

SHREK
Does anyone else know where to find 
him? Anyone at all?

DONKEY
Me! Me!

SHREK
Anyone?

DONKEY
Oh! Oh, pick me! Oh, I know! I know! 
Me, me!

SHREK
(sigh) Okay, fine. Attention, all fairy 
tale things. Do not get comfortable. 
Your welcome is officially worn out. 
In fact, I'm gonna see this guy Farquaad 
right now and get you all off my land 
and back where you came from! (Pause. 
Then the crowd goes wild.) Oh! (to Donkey) 
You! You're comin' with me.

DONKEY
All right, that's what I like to hear, 
man. Shrek and Donkey, two stalwart 
friends, off on a whirlwind big-city 
adventure. I love it!

DONKEY
(singing) On the road again. Sing it 
with me, Shrek. I can't wait to get 
on the road again.

SHREK
What did I say about singing?

DONKEY
Can I whistle?

SHREK
No.

DONKEY
Can I hum it?

SHREK
All right, hum it.

Donkey begins to hum 'On the Road Again'.

DULOC - KITCHEN

A masked man is torturing the Gingerbread Man. He's continually 
dunking him in a glass of milk. Lord Farquaad walks in.

FARQUAAD
That's enough. He's ready to talk.


The Gingerbread Man is pulled out of the milk and slammed down 
onto a cookie sheet. Farquaad laughs as he walks over to the 
table. However when he reaches the table we see that it goes 
up to his eyes. He clears his throat and the table is lowered.


FARQUAAD
(he picks up the Gingerbread Man's legs 
and plays with them) Run, run, run, 
as fast as you can. You can't catch 
me. I'm the gingerbread man.

GINGERBREAD MAN
You are a monster.

FARQUAAD
I'm not the monster here. You are. You 
and the rest of that fairy tale trash, 
poisoning my perfect world. Now, tell 
me! Where are the others?

GINGERBREAD MAN
Eat me! (He spits milk into Farquaad's 
eye.)

FARQUAAD
I've tried to be fair to you creatures. 
Now my patience has reached its end! 
Tell me or I'll...(he makes as if to 
pull off the Gingerbread Man's buttons)


GINGERBREAD MAN
No, no, not the buttons. Not my gumdrop 
buttons.

FARQUAAD
All right then. Who's hiding them?


GINGERBREAD MAN
Okay, I'll tell you. Do you know the 
muffin man?

FARQUAAD
The muffin man?

GINGERBREAD MAN
The muffin man.

FARQUAAD
Yes, I know the muffin man, who lives 
on Drury Lane?

GINGERBREAD MAN
Well, she's married to the muffin man.


FARQUAAD
The muffin man?

GINGERBREAD MAN
The muffin man!

FARQUAAD
She's married to the muffin man.

The door opens and the Head Guard walks in.

HEAD GUARD
My lord! We found it.

FARQUAAD
Then what are you waiting for? Bring 
it in.

More guards enter carrying something that is covered by a sheet. 
They hang up whatever it is and remove the sheet. It is the Magic 
Mirror.

GINGERBREAD MAN
(in awe) Ohhhh...

FARQUAAD
Magic mirror...

GINGERBREAD MAN
Don't tell him anything! (Farquaad picks 
him up and dumps him into a trash can 
with a lid.) No!

FARQUAAD
Evening. Mirror, mirror on the wall. 
Is this not the most perfect kingdom 
of them all?

MIRROR
Well, technically you're not a king.


FARQUAAD
Uh, Thelonius. (Thelonius holds up a 
hand mirror and smashes it with his 
fist.) You were saying?

MIRROR
What I mean is you're not a king yet. 
But you can become one. All you have 
to do is marry a princess.

FARQUAAD
Go on.

MIRROR
(chuckles nervously) So, just sit back 
and relax, my lord, because it's time 
for you to meet today's eligible bachelorettes. 
And here they are! Bachelorette number 
one is a mentally abused shut-in from 
a kingdom far, far away. She likes sushi 
and hot tubbing anytime. Her hobbies 
include cooking and cleaning for her 
two evil sisters. Please welcome Cinderella. 
(shows picture of Cinderella) Bachelorette 
number two is a cape-wearing girl from 
the land of fancy. Although she lives 
with seven other men, she's not easy. 
Just kiss her dead, frozen lips and 
find out what a live wire she is. Come 
on. Give it up for Snow White! (shows 
picture of Snow White) And last, but 
certainly not last, bachelorette number 
three is a fiery redhead from a dragon-guarded 
castle surrounded by hot boiling lava! 
But don't let that cool you off. She's 
a loaded pistol who likes pina colads 
and getting caught in the rain. Yours 
for the rescuing, Princess Fiona! (Shows 
picture of Princess Fiona) So will it 
be bachelorette number one, bachelorette 
number two or bachelorette number three?


GUARDS
Two! Two! Three! Three! Two! Two! Three!


FARQUAAD
Three? One? Three?

THELONIUS
Three! (holds up 2 fingers) Pick number 
three, my lord!

FARQUAAD
Okay, okay, uh, number three!

MIRROR
Lord Farquaad, you've chosen Princess 
Fiona.

FARQUAAD
Princess Fiona. She's perfect. All I 
have to do is just find someone who 
can go...

MIRROR
But I probably should mention the little 
thing that happens at night.

FARQUAAD
I'll do it.

MIRROR
Yes, but after sunset...

FARQUAAD
Silence! I will make this Princess Fiona 
my queen, and DuLoc will finally have 
the perfect king! Captain, assemble 
your finest men. We're going to have 
a tournament. (smiles evilly)

DuLoc Parking Lot - Lancelot Section

Shrek and Donkey come out of the field that is right by the parking 
lot. The castle itself is about 40 stories high.

DONKEY
But that's it. That's it right there. 
That's DuLoc. I told ya I'd find it.


SHREK
So, that must be Lord Farquaad's castle.


DONKEY
Uh-huh. That's the place.

SHREK
Do you think maybe he's compensating 
for something? (He laughs, but then 
groans as Donkey doesn't get the joke. 
He continues walking through the parking 
lot.)

DONKEY
Hey, wait. Wait up, Shrek.

MAN
Hurry, darling. We're late. Hurry.


SHREK
Hey, you! (The attendant, who is wearing 
a giant head that looks like Lord Farquaad, 
screams and begins running through the 
rows of rope to get to the front gate 
to get away from Shrek.) Wait a second. 
Look, I'm not gonna eat you. I just 
- - I just - - (He sighs and then begins 
walking straight through the rows. The 
attendant runs into a wall and falls 
down. Shrek and Donkey look at him then 
continue on into DuLoc.)

DULOC

They look around but all is quiet.

SHREK
It's quiet. Too quiet. Where is everybody?


DONKEY
Hey, look at this!

Donkey runs over and pulls a lever that is attached to a box 
marked 'Information'. The music winds up and then the box doors 
open up. There are little wooden people inside and they begin 
to sing.

WOODEN PEOPLE
Welcome to DuLoc such a perfect town


Here we have some rules

Let us lay them down

Don't make waves, stay in line

And we'll get along fine

DuLoc is perfect place

Please keep off of the grass

Shine your shoes, wipe your... face

DuLoc is, DuLoc is

DuLoc is perfect place.

Suddenly a camera takes Donkey and Shrek's picture.

DONKEY
Wow! Let's do that again! (makes ready 
to run over and pull the lever again)


SHREK
(grabs Donkey's tail and holds him still) 
No. No. No, no, no! No.

They hear a trumpet fanfare and head over to the arena.

FARQUAAD
Brave knights. You are the best and 
brightest in all the land. Today one 
of you shall prove himself...

As Shrek and Donkey walk down the tunnel to get into the arena 
Donkey is humming the DuLoc theme song.

SHREK
All right. You're going the right way 
for a smacked bottom.

DONKEY
Sorry about that.

FARQUAAD
That champion shall have the honor - 
- no, no - - the privilege to go forth 
and rescue the lovely Princess Fiona 
from the fiery keep of the dragon. If 
for any reason the winner is unsuccessful, 
the first runner-up will take his place 
and so on and so forth. Some of you 
may die, but it's a sacrifice I am willing 
to make. (cheers) Let the tournament 
begin! (He notices Shrek) Oh! What is 
that? It's hideous!

SHREK
(turns to look at Donkey and then back 
at Farquaad) Ah, that's not very nice. 
It's just a donkey.

FARQUAAD
Indeed. Knights, new plan! The one who 
kills the ogre will be named champion! 
Have it him!

MEN
Get him!

SHREK
Oh, hey! Now come on! Hang on now. (bumps 
into a table where there are mugs of 
beer)

CROWD
Go ahead! Get him!

SHREK
(holds up a mug of beer) Can't we just 
settle this over a pint?

CROWD
Kill the beast!

SHREK
No? All right then. (drinks the beer) 
Come on!

He takes the mug and smashes the spigot off the large barrel 
of beer behind him. The beer comes rushing out drenching the 
other men and wetting the ground. It's like mud now. Shrek slides 
past the men and picks up a spear that one of the men dropped. 
As Shrek begins to fight Donkey hops up onto one of the larger 
beer barrels. It breaks free of it's ropes and begins to roll. 
Donkey manages to squish two men into the mud. There is so much 
fighting going on here I'm not going to go into detail. Suffice 
to say that Shrek kicks butt.

DONKEY
Hey, Shrek, tag me! Tag me!

Shrek comes over and bangs a man's head up against Donkeys. Shrek 
gets up on the ropes and interacts with the crowd.

SHREK
Yeah!

A man tries to sneak up behind Shrek, but Shrek turns in time 
and sees him.

WOMAN
The chair! Give him the chair!

Shrek smashes a chair over the guys back. Finally all the men 
are down. Donkey kicks one of them in the helmet, and the ding 
sounds the end of the match. The audience goes wild.

SHREK
Oh, yeah! Ah! Ah! Thank you! Thank you 
very much! I'm here till Thursday. Try 
the veal! Ha, ha! (laughs)

The laughter stops as all of the guards turn their weapons on 
Shrek.

HEAD GUARD
Shall I give the order, sir?

FARQUAAD
No, I have a better idea. People of 
DuLoc, I give you our champion!

SHREK
What?

FARQUAAD
Congratulations, ogre. You're won the 
honor of embarking on a great and noble 
quest.

SHREK
Quest? I'm already in a quest, a quest 
to get my swamp back.

FARQUAAD
Your swamp?

SHREK
Yeah, my swamp! Where you dumped those 
fairy tale creatures!

FARQUAAD
Indeed. All right, ogre. I'll make you 
a deal. Go on this quest for me, and 
I'll give you your swamp back.

SHREK
Exactly the way it was?

FARQUAAD
Down to the last slime-covered toadstool.


SHREK
And the squatters?

FARQUAAD
As good as gone.

SHREK
What kind of quest?

Time Lapse - Donkey and Shrek are now walking through the field 
heading away from DuLoc. Shrek is munching on an onion.

DONKEY
Let me get this straight. You're gonna 
go fight a dragon and rescue a princess 
just so Farquaad will give you back 
a swamp which you only don't have because 
he filled it full of freaks in the first 
place. Is that about right?

SHREK
You know, maybe there's a good reason 
donkeys shouldn't talk.

DONKEY
I don't get it. Why don't you just pull 
some of that ogre stuff on him? Throttle 
him, lay siege to his fortress, grinds 
his bones to make your bread, the whole 
ogre trip.

SHREK
Oh, I know what. Maybe I could have 
decapitated an entire village and put 
their heads on a pike, gotten a knife, 
cut open their spleen and drink their 
fluids. Does that sound good to you?


DONKEY
Uh, no, not really, no.

SHREK
For your information, there's a lot 
more to ogres than people think.

DONKEY
Example?

SHREK
Example? Okay, um, ogres are like onions. 
(he holds out his onion)

DONKEY
(sniffs the onion) They stink?

SHREK
Yes - - No!

DONKEY
They make you cry?

SHREK
No!

DONKEY
You leave them in the sun, they get 
all brown, start sproutin' little white 
hairs.

SHREK
No! Layers! Onions have layers. Ogres 
have layers! Onions have layers. You 
get it? We both have layers. (he heaves 
a sigh and then walks off)

DONKEY
(trailing after Shrek) Oh, you both 
have layers. Oh. {Sniffs} You know, 
not everybody likes onions. Cake! Everybody 
loves cakes! Cakes have layers.

SHREK
I don't care... what everyone likes. 
Ogres are not like cakes.

DONKEY
You know what else everybody likes? 
Parfaits. Have you ever met a person, 
you say, "Let's get some parfait," they 
say, "Hell no, I don't like no parfait"? 
Parfaits are delicious.

SHREK
No! You dense, irritating, miniature 
beast of burden! Ogres are like onions! 
And of story. Bye-bye. See ya later.


DONKEY
Parfaits may be the most delicious thing 
on the whole damn planet.

SHREK
You know, I think I preferred your humming.


DONKEY
Do you have a tissue or something? I'm 
making a mess. Just the word parfait 
make me start slobbering.

They head off. There is a montage of their journey. Walking through 
a field at sunset. Sleeping beneath a bright moon. Shrek trying 
to put the campfire out the next day and having a bit of a problem, 
so Donkey pees on the fire to put it out.

DRAGON'S KEEP

Shrek and Donkey are walking up to the keep that's supposed to 
house Princess Fiona. It appears to look like a giant volcano.


DONKEY
(sniffs) Ohh! Shrek! Did you do that? 
You gotta warn somebody before you just 
crack one off. My mouth was open and 
everything.

SHREK
Believe me, Donkey, if it was me, you'd 
be dead. (sniffs) It's brimstone. We 
must be getting close.

DONKEY
Yeah, right, brimstone. Don't be talking 
about it's the brimstone. I know what 
I smell. It wasn't no brimstone. It 
didn't come off no stone neither.


They climb up the side of the volcano/keep and look down. There 
is a small piece of rock right in the center and that is where 
the castle is. It is surrounded by boiling lava. It looks very 
foreboding.

SHREK
Sure, it's big enough, but look at the 
location. (laughs...then the laugh turns 
into a groan)

DONKEY
Uh, Shrek? Uh, remember when you said 
ogres have layers?

SHREK
Oh, aye.

DONKEY
Well, I have a bit of a confession to 
make. Donkeys don't have layers. We 
wear our fear right out there on our 
sleeves.

SHREK
Wait a second. Donkeys don't have sleeves.


DONKEY
You know what I mean.

SHREK
You can't tell me you're afraid of heights.


DONKEY
No, I'm just a little uncomfortable 
about being on a rickety bridge over 
a boiling like of lava!

SHREK
Come on, Donkey. I'm right here beside 
ya, okay? For emotional support., we'll 
just tackle this thing together one 
little baby step at a time.

DONKEY
Really?

SHREK
Really, really.

DONKEY
Okay, that makes me feel so much better.


SHREK
Just keep moving. And don't look down.


DONKEY
Okay, don't look down. Don't look down. 
Don't look down. Keep on moving. Don't 
look down. (he steps through a rotting 
board and ends up looking straight down 
into the lava) Shrek! I'm lookin' down! 
Oh, God, I can't do this! Just let me 
off, please!

SHREK
But you're already halfway.

DONKEY
But I know that half is safe!

SHREK
Okay, fine. I don't have time for this. 
You go back.

DONKEY
Shrek, no! Wait!

SHREK
Just, Donkey - - Let's have a dance 
then, shall me? (bounces and sways the 
bridge)

DONKEY
Don't do that!

SHREK
Oh, I'm sorry. Do what? Oh, this? (bounces 
the bridge again)

DONKEY
Yes, that!

SHREK
Yes? Yes, do it. Okay. (continues to 
bounce and sway as he backs Donkey across 
the bridge)

DONKEY
No, Shrek! No! Stop it!

SHREK
You said do it! I'm doin' it.

DONKEY
I'm gonna die. I'm gonna die. Shrek, 
I'm gonna die. (steps onto solid ground) 
Oh!

SHREK
That'll do, Donkey. That'll do. (walks 
towards the castle)

DONKEY
Cool. So where is this fire-breathing 
pain-in-the-neck anyway?

SHREK
Inside, waiting for us to rescue her. 
(chuckles)

DONKEY
I was talkin' about the dragon, Shrek.


INSIDE THE CASTLE

DONKEY
You afraid?

SHREK
No.

DONKEY
But...

SHREK
Shh.

DONKEY
Oh, good. Me neither. (sees a skeleton 
and gasps) 'Cause there's nothin' wrong 
with bein' afraid. Fear's a sensible 
response to an unfamiliar situation. 
Unfamiliar dangerous situation, I might 
add. With a dragon that breathes fire 
and eats knights and breathes fire, 
it sure doesn't mean you're a coward 
if you're a little scared. I sure as 
heck ain't no coward. I know that.


SHREK
Donkey, two things, okay? Shut ... up. 
Now go over there and see if you can 
find any stairs.

DONKEY
Stairs? I thought we was lookin' for 
the princess.

SHREK
(putting on a helmet) The princess will 
be up the stairs in the highest room 
in the tallest tower.

DONKEY
What makes you think she'll be there?


SHREK
I read it in a book once. (walks off)


DONKEY
Cool. You handle the dragon. I'll handle 
the stairs. I'll find those stairs. 
I'll whip their butt too. Those stairs 
won't know which way they're goin'. 
(walks off)

EMPTY ROOM

Donkey is still talking to himself as he looks around the room.


DONKEY
I'm gonna take drastic steps. Kick it 
to the curb. Don't mess with me. I'm 
the stair master. I've mastered the 
stairs. I wish I had a step right here. 
I'd step all over it.

ELSEWHERE

Shrek spots a light in the tallest tower window.

SHREK
Well, at least we know where the princess 
is, but where's the...

DONKEY
(os) Dragon!

Donkey gasps and takes off running as the dragon roars again. 
Shrek manages to grab Donkey out of the way just as the dragon 
breathes fire.

SHREK
Donkey, look out! (he manages to get 
a hold of the dragons tail and holds 
on) Got ya!

The dragon gets irritated at this and flicks it's tail and Shrek 
goes flying through the air and crashes through the roof of the 
tallest tower. Fiona wakes up with a jerk and looks at him lying 
on the floor.

DONKEY
Oh! Aah! Aah!

Donkey get cornered as the Dragon knocks away all but a small 
part of the bridge he's on.

DONKEY
No. Oh, no, No! (the dragon roars) Oh, 
what large teeth you have. (the dragon 
growls) I mean white, sparkling teeth. 
I know you probably hear this all time 
from your food, but you must bleach, 
'cause that is one dazzling smile you 
got there. Do I detect a hint of minty 
freshness? And you know what else? You're 
- - You're a girl dragon! Oh, sure! 
I mean, of course you're a girl dragon. 
You're just reeking of feminine beauty. 
(the dragon begins fluttering her eyes 
at him) What's the matter with you? 
You got something in your eye? Ohh. 
Oh. Oh. Man, I'd really love to stay, 
but you know, I'm, uh...(the dragon 
blows a smoke ring in the shape of a 
heart right at him, and he coughs) I'm 
an asthmatic, and I don't know if it'd 
work out if you're gonna blow smoke 
rings. Shrek! (the dragon picks him 
up with her teeth and carries him off) 
No! Shrek! Shrek! Shrek!

FIONA'S ROOM

Shrek groans as he gets up off the floor. His back is to Fiona 
so she straightens her dress and lays back down on the bed. She 
then quickly reaches over and gets the bouquet of flowers off 
the side table. She then lays back down and appears to be asleep. 
Shrek turns and goes over to her. He looks down at Fiona for 
a moment and she puckers her lips. Shrek takes her by the shoulders 
and shakes her away.

FIONA
Oh! Oh!

SHREK
Wake up!

FIONA
What?

SHREK
Are you Princess Fiona?

FIONA
I am, awaiting a knight so bold as to 
rescue me.

SHREK
Oh, that's nice. Now let's go!

FIONA
But wait, Sir Knight. This be-ith our 
first meeting. Should it not be a wonderful, 
romantic moment?

SHREK
Yeah, sorry, lady. There's no time.


FIONA
Hey, wait. What are you doing? You should 
sweep me off my feet out yonder window 
and down a rope onto your valiant steed.


SHREK
You've had a lot of time to plan this, 
haven't you?

FIONA
(smiles) Mm-hmm.

Shrek breaks the lock on her door and pulls her out and down 
the hallway.

FIONA
But we have to savor this moment! You 
could recite an epic poem for me. A 
ballad? A sonnet! A limerick? Or something!


SHREK
I don't think so.

FIONA
Can I at least know the name of my champion?


SHREK
Uh, Shrek.

FIONA
Sir Shrek. (clears throat and holds 
out a handkerchief) I pray that you 
take this favor as a token of my gratitude.


SHREK
Thanks!

Suddenly they hear the dragon roar.

FIONA
(surprised)You didn't slay the dragon?


SHREK
It's on my to-do list. Now come on! 
(takes off running and drags Fiona behind 
him.)

FIONA
But this isn't right! You were meant 
to charge in, sword drawn, banner flying. 
That's what all the other knights did.


SHREK
Yeah, right before they burst into flame.


FIONA
That's not the point. (Shrek suddenly 
stops and she runs into him.) Oh! (Shrek 
ignores her and heads for a wooden door 
off to the side.) Wait. Where are you 
going? The exit's over there.

SHREK
Well, I have to save my ass.

FIONA
What kind of knight are you?

SHREK
One of a kind. (opens the door into 
the throne room)

DONKEY
(os) Slow down. Slow down, baby, please. 
I believe it's healthy to get to know 
someone over a long period of time. 
Just call me old-fashioned. (laughs 
worriedly) (we see him up close and 
from a distance as Shrek sneaks into 
the room) I don't want to rush into 
a physical relationship. I'm not emotionally 
ready for a commitment of, uh, this 
- - Magnitude really is the word I'm 
looking for. Magnitude- - Hey, that 
is unwanted physical contact. Hey, what 
are you doing? Okay, okay. Let's just 
back up a little and take this one step 
at a time. We really should get to know 
each other first as friends or pen pals. 
I'm on the road a lot, but I just love 
receiving cards - - I'd really love 
to stay, but - - Don't do that! That's 
my tail! That's my personal tail. You're 
gonna tear it off. I don't give permission 
- - What are you gonna do with that? 
Hey, now. No way. No! No! No, no! No. 
No, no, no. No! Oh!

Shrek grabs a chain that's connected to the chandelier and swings 
toward the dragon. He misses and he swings back again. He looks 
up and spots that the chandelier is right above the dragons head. 
He pulls on the chain and it releases and he falls down and bumps 
Donkey out of the way right as the dragon is about to kiss him. 
Instead the dragon kisses Shreks' butt. She opens her eyes and 
roars. Shrek lets go of the chain and the chandelier falls onto 
her head, but it's too big and it goes over her head and forms 
a sort of collar for her. She roars again and Shrek and Donkey 
take off running. Very 'Matrix' style. Shrek grabs Donkey and 
then grabs Princess Fiona as he runs past her.

DONKEY
Hi, Princess!

FIONA
It talks!

SHREK
Yeah, it's getting him to shut up that's 
the trick.

They all start screaming as the dragon gains on them. Shrek spots 
a descending slide and jumps on. But unfortunately there is a 
crack in the stone and it hits Shrek right in the groin. His 
eyes cross and as he reaches the bottom of the slide he stumbles 
off and walks lightly.

SHREK
Oh!

Shrek gets them close to the exit and sets down Donkey and Fiona.


SHREK
Okay, you two, heard for the exit! I'll 
take care of the dragon.

Shrek grabs a sword and heads back toward the interior of the 
castle. He throws the sword down in between several overlapping 
chain links. The chain links are attached to the chandelier that 
is still around the dragons neck.

SHREK
(echoing) Run!

They all take off running for the exit with the dragon in hot 
pursuit. They make it to the bridge and head across. The dragons 
breathes fire and the bridge begins to burn. They all hang on 
for dear life as the ropes holding the bridge up collapse. They 
are swung to the other side. As they hang upside down they look 
in horror as the dragon makes to fly over the boiling lava to 
get them. But suddenly the chandelier with the chain jerk the 
dragon back and she's unable to get to them. Our gang climbs 
quickly to safety as the dragon looks angry and then gives a 
sad whimper as she watches Donkey walk away.

FIONA
(sliding down the 'volcano' hill) You 
did it! You rescued me! You're amazing. 
(behind her Donkey falls down the hill) 
You're - - You're wonderful. You're... 
(turns and sees Shrek fall down the 
hill and bump into Donkey) a little 
unorthodox I'll admit. But thy deed 
is great, and thy heart is pure. I am 
eternally in your debt. (Donkey clears 
his throat.) And where would a brave 
knight be without his noble steed?


DONKEY
I hope you heard that. She called me 
a noble steed. She think I'm a steed.


FIONA
The battle is won. You may remove your 
helmet, good Sir Knight.

SHREK
Uh, no.

FIONA
Why not?

SHREK
I have helmet hair.

FIONA
Please. I would'st look upon the face 
of my rescuer.

SHREK
No, no, you wouldn't - - 'st.

FIONA
But how will you kiss me?

SHREK
What? (to Donkey) That wasn't in the 
job description.

DONKEY
Maybe it's a perk.

FIONA
No, it's destiny. Oh, you must know 
how it goes. A princess locked in a 
tower and beset by a dragon is rescued 
by a brave knight, and then they share 
true love's first kiss.

DONKEY
Hmm? With Shrek? You think- - Wait. 
Wait. You think that Shrek is you true 
love?

FIONA
Well, yes.

Both Donkey and Shrek burst out laughing.

DONKEY
You think Shrek is your true love!


FIONA
What is so funny?

SHREK
Let's just say I'm not your type, okay?Fiona: 
Of course, you are. You're my rescuer. 
Now - - Now remove your helmet.

SHREK
Look. I really don't think this is a 
good idea.

FIONA
Just take off the helmet.

SHREK
I'm not going to.

FIONA
Take it off.

SHREK
No!

FIONA
Now!

SHREK
Okay! Easy. As you command. Your Highness. 
(takes off his helmet)

FIONA
You- - You're a- - an ogre.

SHREK
Oh, you were expecting Prince Charming.


FIONA
Well, yes, actually. Oh, no. This is 
all wrong. You're not supposed to be 
an ogre.

SHREK
Princess, I was sent to rescue you by 
Lord Farquaad, okay? He is the one who 
wants to marry you.

FIONA
Then why didn't he come rescue me?


SHREK
Good question. You should ask him that 
when we get there.

FIONA
But I have to be rescued by my true 
love, not by some ogre and his- - his 
pet.

DONKEY
Well, so much for noble steed.

SHREK
You're not making my job any easier.


FIONA
I'm sorry, but your job is not my problem. 
You can tell Lord Farquaad that if he 
wants to rescue me properly, I'll be 
waiting for him right here.

SHREK
Hey! I'm no one's messenger boy, all 
right? (ominous) I'm a delivery boy. 
(he swiftly picks her up and swings 
her over his shoulder like she was a 
sack of potatoes)

FIONA
You wouldn't dare. Put me down!

SHREK
Ya comin', Donkey?

DONKEY
I'm right behind ya.

FIONA
Put me down, or you will suffer the 
consequences! This is not dignified! 
Put me down!

WOODS

A little time has passed and Fiona has calmed down. She just 
hangs there limply while Shrek carries her.

DONKEY
Okay, so here's another question. Say 
there's a woman that digs you, right, 
but you don't really like her that way. 
How do you let her down real easy so 
her feelings aren't hurt, but you don't 
get burned to a crisp and eaten?

FIONA
You just tell her she's not your true 
love. Everyone knows what happens when 
you find your...(Shrek drops her on 
the ground) Hey! The sooner we get to 
DuLoc the better.

DONKEY
You're gonna love it there, Princess. 
It's beautiful!

FIONA
And what of my groom-to-be? Lord Farquaad? 
What's he like?

SHREK
Let me put it this way, Princess. Men 
of Farquaad's stature are in short supply. 
(he and Donkey laugh)

Shrek then proceeds to splash water onto his face to wash off 
the dust and grime.

DONKEY
I don't know. There are those who think 
little of him. (they laugh again) Fiona: 
Stop it. Stop it, both of you. You're 
just jealous you can never measure up 
to a great ruler like Lord Farquaad.


SHREK
Yeah, well, maybe you're right, Princess. 
But I'll let you do the "measuring" 
when you see him tomorrow.

FIONA
(looks at the setting sun) Tomorrow? 
It'll take that long? Shouldn't we stop 
to make camp?

SHREK
No, that'll take longer. We can keep 
going.

FIONA
But there's robbers in the woods.

DONKEY
Whoa! Time out, Shrek! Camp is starting 
to sound good.

SHREK
Hey, come on. I'm scarier than anything 
we're going to see in this forest.


FIONA
I need to find somewhere to camp now!


Both Donkey and Shrek's ears lower as they shrink away from her.


MOUNTAIN CLIFF

Shrek has found a cave that appears to be in good order. He shoves 
a stone boulder out of the way to reveal the cave.

SHREK
Hey! Over here.

DONKEY
Shrek, we can do better than that. I 
don't think this is fit for a princess.


FIONA
No, no, it's perfect. It just needs 
a few homey touches.

SHREK
Homey touches? Like what? (he hears 
a tearing noise and looks over at Fiona 
who has torn the bark off of a tree.)


FIONA
A door? Well, gentlemen, I bid thee 
good night. (goes into the cave and 
puts the bark door up behind her)


DONKEY
You want me to read you a bedtime story? 
I will.

FIONA
(os) I said good night!

Shrek looks at Donkey for a second and then goes to move the 
boulder back in front of the entrance to the cave with Fiona 
still inside.

DONKEY
Shrek, What are you doing?

SHREK
(laughs) I just- - You know - - Oh, 
come on. I was just kidding.

LATER THAT NIGHT

Shrek and Donkey are sitting around a campfire. They are staring 
up into the sky as Shrek points out certain star constellations 
to Donkey.

SHREK
And, uh, that one, that's Throwback, 
the only ogre to ever spit over three 
wheat fields.

DONKEY
Right. Yeah. Hey, can you tell my future 
from these stars?

SHREK
The stars don't tell the future, Donkey. 
They tell stories. Look, there's Bloodnut, 
the Flatulent. You can guess what he's 
famous for.

DONKEY
I know you're making this up.

SHREK
No, look. There he is, and there's the 
group of hunters running away from his 
stench.

DONKEY
That ain't nothin' but a bunch of little 
dots.

SHREK
You know, Donkey, sometimes things are 
more than they appear. Hmm? Forget it.


DONKEY
(heaves a big sigh) Hey, Shrek, what 
we gonna do when we get our swamp anyway?


SHREK
Our swamp?

DONKEY
You know, when we're through rescuing 
the princess.

SHREK
We? Donkey, there's no "we". There's 
no "our". There's just me and my swamp. 
The first thing I'm gonna do is build 
a ten-foot wall around my land.

DONKEY
You cut me deep, Shrek. You cut me real 
deep just now. You know what I think? 
I think this whole wall thing is just 
a way to keep somebody out.

SHREK
No, do ya think?

DONKEY
Are you hidin' something?

SHREK
Never mind, Donkey.

DONKEY
Oh, this is another one of those onion 
things, isn't it?

SHREK
No, this is one of those drop-it and 
leave-it alone things.

DONKEY
Why don't you want to talk about it?


SHREK
Why do you want to talk about it?

DONKEY
Why are you blocking?

SHREK
I'm not blocking.

DONKEY
Oh, yes, you are.

SHREK
Donkey, I'm warning you.

DONKEY
Who you trying to keep out?

SHREK
Everyone! Okay?

DONKEY
(pause) Oh, now we're gettin' somewhere. 
(grins)

At this point Fiona pulls the 'door' away from the entrance to 
the cave and peaks out. Neither of the guys see her.

SHREK
Oh! For the love of Pete! (gets up and 
walks over to the edge of the cliff 
and sits down)

DONKEY
What's your problem? What you got against 
the whole world anyway?

SHREK
Look, I'm not the one with the problem, 
okay? It's the world that seems to have 
a problem with me. People take one look 
at me and go. "Aah! Help! Run! A big, 
stupid, ugly ogre!" They judge me before 
they even know me. That's why I'm better 
off alone.

DONKEY
You know what? When we met, I didn't 
think you was just a big, stupid, ugly 
ogre.

SHREK
Yeah, I know.

DONKEY
So, uh, are there any donkeys up there?


SHREK
Well, there's, um, Gabby, the Small 
and Annoying.

DONKEY
Okay, okay, I see it now. The big shiny 
one, right there. That one there?


Fiona puts the door back.

SHREK
That's the moon.

DONKEY
Oh, okay.

DuLoc - Farquaad's Bedroom

The camera pans over a lot of wedding stuff. Soft music plays 
in the background. Farquaad is in bed, watching as the Magic 
Mirror shows him Princess Fiona.

FARQUAAD
Again, show me again. Mirror, mirror, 
show her to me. Show me the princess.


MIRROR
Hmph.

The Mirror rewinds and begins to play again from the beginning.


FARQUAAD
Ah. Perfect.

Farquaad looks down at his bare chest and pulls the sheet up 
to cover himself as though Fiona could see him as he gazes sheepishly 
at her image in the mirror.

MORNING

Fiona walks out of the cave. She glances at Shrek and Donkey 
who are still sleeping. She wanders off into the woods and comes 
across a blue bird. She begins to sing. The bird sings along 
with her. She hits higher and higher notes and the bird struggles 
to keep up with her. Suddenly the pressure of the note is too 
big and the bird explodes. Fiona looks a little sheepish, but 
she eyes the eggs that the bird left behind. Time lapse, Fiona 
is now cooking the eggs for breakfast. Shrek and Donkey are still 
sleeping. Shrek wakes up and looks at Fiona. Donkey's talking 
in his sleep.

DONKEY
(quietly) Mmm, yeah, you know I like 
it like that. Come on, baby. I said 
I like it.

SHREK
Donkey, wake up. (shakes him)

DONKEY
Huh? What?

SHREK
Wake up.

DONKEY
What? (stretches and yawns)

FIONA
Good morning. Hm, how do you like your 
eggs?

DONKEY
Oh, good morning, Princess!

Fiona gets up and sets the eggs down in front of them.

SHREK
What's all this about?

FIONA
You know, we kind of got off to a bad 
start yesterday. I wanted to make it 
up to you. I mean, after all, you did 
rescue me.

SHREK
Uh, thanks.

Donkey sniffs the eggs and licks his lips.

FIONA
Well, eat up. We've got a big day ahead 
of us. (walks off)

LATER

They are once again on their way. They are walking through the 
forest. Shrek belches.

DONKEY
Shrek!

SHREK
What? It's a compliment. Better out 
than in, I always say. (laughs)

DONKEY
Well, it's no way to behave in front 
of a princess.

Fiona belches

FIONA
Thanks.

DONKEY
She's as nasty as you are.

SHREK
(chuckles) You know, you're not exactly 
what I expected.

FIONA
Well, maybe you shouldn't judge people 
before you get to know them.

She smiles and then continues walking, singing softly. Suddenly 
from out of nowhere, a man swings down and swoops Fiona up into 
a tree.

ROBIN HOOD
La liberte! Hey!

SHREK
Princess!

FIONA
(to Robin Hood) What are you doing?


ROBIN HOOD
Be still, mon cherie, for I am you savior! 
And I am rescuing you from this green...(kisses 
up her arm while Fiona pulls back in 
disgust)...beast.

SHREK
Hey! That's my princess! Go find you 
own!

ROBIN HOOD
Please, monster! Can't you see I'm a 
little busy here?

FIONA
(getting fed up) Look, pal, I don't 
know who you think you are!

ROBIN HOOD
Oh! Of course! Oh, how rude. Please 
let me introduce myself. Oh, Merry Men. 
(laughs)

Suddenly an accordion begins to play and the Merry men pop out 
from the bushes. They begin to sing Robin's theme song.

MERRY MEN
Ta, dah, dah, dah, whoo.

ROBIN HOOD
I steal from the rich and give to the 
needy.

MERRY MEN
He takes a wee percentage,

ROBIN HOOD
But I'm not greedy. I rescue pretty 
damsels, man, I'm good.

MERRY MEN
What a guy, Monsieur Hood.

ROBIN HOOD
Break it down. I like an honest fight 
and a saucy little maid...

MERRY MEN
What he's basically saying is he likes 
to get...

ROBIN HOOD
Paid. So...When an ogre in the bush 
grabs a lady by the tush. That's bad.


MERRY MEN
That's bad.

ROBIN HOOD
When a beauty's with a beast it makes 
me awfully mad.

MERRY MEN
He's mad, he's really, really mad.


ROBIN HOOD
I'll take my blade and ram it through 
your heart, keep your eyes on me, boys 
'cause I'm about to start...

There is a grunt as Fiona swings down from the tree limb and 
knocks Robin Hood unconscious.

FIONA
Man, that was annoying!

Shrek looks at her in admiration.

MERRY MAN
Oh, you little- - (shoots an arrow at 
Fiona but she ducks out of the way)


The arrow flies toward Donkey who jumps into Shrek's arms to 
get out of the way. The arrow proceeds to just bounce off a tree.


Another fight sequence begins and Fiona gives a karate yell and 
then proceeds to beat the crap out of the Merry Men. There is 
a very interesting 'Matrix' moment here when Fiona pauses in 
mid-air to fix her hair. Finally all of the Merry Men are down, 
and Fiona begins walking away.

FIONA
Uh, shall we?

SHREK
Hold the phone. (drops Donkey and begins 
walking after Fiona) Oh! Whoa, whoa, 
whoa. Hold on now. Where did that come 
from?

FIONA
What?

SHREK
That! Back there. That was amazing! 
Where did you learn that?

FIONA
Well...(laughs) when one lives alone, 
uh, one has to learn these things in 
case there's a...(gasps and points) 
there's an arrow in your butt!

SHREK
What? (turns and looks) Oh, would you 
look at that? (he goes to pull it out 
but flinches because it's tender)


FIONA
Oh, no. This is all my fault. I'm so 
sorry.

DONKEY
(walking up) Why? What's wrong?

FIONA
Shrek's hurt.

DONKEY
Shrek's hurt. Shrek's hurt? Oh, no, 
Shrek's gonna die.

SHREK
Donkey, I'm okay.

DONKEY
You can't do this to me, Shrek. I'm 
too young for you to die. Keep you legs 
elevated. Turn your head and cough. 
Does anyone know the Heimlich?

FIONA
Donkey! Calm down. If you want to help 
Shrek, run into the woods and find me 
a blue flower with red thorns.

DONKEY
Blue flower, red thorns. Okay, I'm on 
it. Blue flower, red thorns. Don't die 
Shrek. If you see a long tunnel, stay 
away from the light!

SHREK & FIONA
Donkey!

DONKEY
Oh, yeah. Right. Blue flower, red thorns. 
(runs off)

SHREK
What are the flowers for?

FIONA
(like it's obvious) For getting rid 
of Donkey.

SHREK
Ah.

FIONA
Now you hold still, and I'll yank this 
thing out. (gives the arrow a little 
pull)

SHREK
(jumps away) Ow! Hey! Easy with the 
yankin'.

As they continue to talk Fiona keeps going after the arrow and 
Shrek keeps dodging her hands.

FIONA
I'm sorry, but it has to come out.


SHREK
No, it's tender.

FIONA
Now, hold on.

SHREK
What you're doing is the opposite of 
help.

FIONA
Don't move.

SHREK
Look, time out.

FIONA
Would you...(grunts as Shrek puts his 
hand over her face to stop her from 
getting at the arrow) Okay. What do 
you propose we do?

ELSEWHERE

Donkey is still looking for the special flower.

DONKEY
Blue flower, red thorns. Blue flower, 
red thorns. Blue flower, red thorns. 
This would be so much easier if I wasn't 
color-blind! Blue flower, red thorns.


SHREK
(os) Ow!

DONKEY
Hold on, Shrek! I'm comin'! (rips a 
flower off a nearby bush that just happens 
to be a blue flower with red thorns)


THE FOREST PATH

SHREK
Ow! Not good.

FIONA
Okay. Okay. I can nearly see the head. 
(Shrek grunts as she pulls) It's just 
about...

SHREK
Ow! Ohh! (he jerks and manages to fall 
over with Fiona on top of him)

DONKEY
Ahem.

SHREK
(throwing Fiona off of him) Nothing 
happend. We were just, uh - -

DONKEY
Look, if you wanted to be alone, all 
you had to do was ask. Okay?

SHREK
Oh, come on! That's the last thing on 
my mind. The princess here was just- 
- (Fiona pulls the arrow out) Ugh! (he 
turns to look at Fiona who holds up 
the arrow with a smile) Ow!

DONKEY
Hey, what's that? (nervous chuckle) 
That's...is that blood?

Donkey faints. Shrek walks over and picks him up as they continue 
on their way.

There is a montage of scenes as the group heads back to DuLoc. 
Shrek crawling up to the top of a tree to make it fall over a 
small brook so that Fiona won't get wet. Shrek then gets up as 
Donkey is just about to cross the tree and the tree swings back 
into it's upright position and Donkey flies off. Shrek swatting 
and a bunch of flies and mosquitoes. Fiona grabs a nearby spiderweb 
that's on a tree branch and runs through the field swinging it 
around to catch the bugs. She then hands it to Shrek who begins 
eating like it's a treat. As he walks off she licks her fingers. 
Shrek catching a toad and blowing it up like a balloon and presenting 
it to Fiona. Fiona catching a snake, blowing it up, fashioning 
it into a balloon animal and presenting it to Shrek. The group 
arriving at a windmill that is near DuLoc.

WINDMILL

SHREK
There it is, Princess. Your future awaits 
you.

FIONA
That's DuLoc?

DONKEY
Yeah, I know. You know, Shrek thinks 
Lord Farquaad's compensating for something, 
which I think means he has a really...(Shrek 
steps on his hoof) Ow!

SHREK
Um, I, uh- - I guess we better move 
on.

FIONA
Sure. But, Shrek? I'm - - I'm worried 
about Donkey.

SHREK
What?

FIONA
I mean, look at him. He doesn't look 
so good.

DONKEY
What are you talking about? I'm fine.


FIONA
(kneels to look him in the eyes) That's 
what they always say, and then next 
thing you know, you're on your back. 
(pause) Dead.

SHREK
You know, she's right. You look awful. 
Do you want to sit down?

FIONA
Uh, you know, I'll make you some tea.


DONKEY
I didn't want to say nothin', but I 
got this twinge in my neck, and when 
I turn my head like this, look, (turns 
his neck in a very sharp way until his 
head is completely sideways) Ow! See?


SHREK
Who's hungry? I'll find us some dinner.


FIONA
I'll get the firewood.

DONKEY
Hey, where you goin'? Oh, man, I can't 
feel my toes! (looks down and yelps) 
I don't have any toes! I think I need 
a hug.

SUNSET

Shrek has built a fire and is cooking the rest of dinner while 
Fiona eats.

FIONA
Mmm. This is good. This is really good. 
What is this?

SHREK
Uh, weed rat. Rotisserie style.

FIONA
No kidding. Well, this is delicious.


SHREK
Well, they're also great in stews. Now, 
I don't mean to brag, but I make a mean 
weed rat stew. (chuckles)

Fiona looks at DuLoc and sighs.

FIONA
I guess I'll be dining a little differently 
tomorrow night.

SHREK
Maybe you can come visit me in the swamp 
sometime. I'll cook all kind of stuff 
for you. Swamp toad soup, fish eye tartare 
- - you name it.

FIONA
(smiles) I'd like that.

They smiles at each other.

SHREK
Um, Princess?

FIONA
Yes, Shrek?

SHREK
I, um, I was wondering...are you...(sighs) 
Are you gonna eat that?

DONKEY
(chuckles) Man, isn't this romantic? 
Just look at that sunset.

FIONA
(jumps up) Sunset? Oh, no! I mean, it's 
late. I-It's very late.

SHREK
What?

DONKEY
Wait a minute. I see what's goin' on 
here. You're afraid of the dark, aren't 
you?

FIONA
Yes! Yes, that's it. I'm terrified. 
You know, I'd better go inside.

DONKEY
Don't feel bad, Princess. I used to 
be afraid of the dark, too, until - 
- Hey, no, wait. I'm still afraid of 
the dark.

Shrek sighs

FIONA
Good night.

SHREK
Good night.

Fiona goes inside the windmill and closes the door. Donkey looks 
at Shrek with a new eye.

DONKEY
Ohh! Now I really see what's goin' on 
here.

SHREK
Oh, what are you talkin' about?

DONKEY
I don't even wanna hear it. Look, I'm 
an animal, and I got instincts. And 
I know you two were diggin' on each 
other. I could feel it.

SHREK
You're crazy. I'm just bringing her 
back to Farquaad.

DONKEY
Oh, come on, Shrek. Wake up and smell 
the pheromones. Just go on in and tell 
her how you feel.

SHREK
I- - There's nothing to tell. Besides, 
even if I did tell her that, well, you 
know - - and I'm not sayin' I do 'cause 
I don't - - she's a princess, and I'm 
- -

DONKEY
An ogre?

SHREK
Yeah. An ogre.

DONKEY
Hey, where you goin'?

SHREK
To get... move firewood. (sighs)

Donkey looks over at the large pile of firewood there already 
is.

TIME LAPSE

Donkey opens the door to the Windmill and walks in. Fiona is 
nowhere to be seen.

DONKEY
Princess? Princess Fiona? Princess, 
where are you? Princess?

Fiona looks at Donkey from the shadows, but we can't see her.


DONKEY
It's very spooky in here. I ain't playing 
no games.

Suddenly Fiona falls from the railing. She gets up only she doesn't 
look like herself. She looks like an ogre and Donkey starts freaking 
out.

DONKEY
Aah!

FIONA
Oh, no!

DONKEY
No, help!

FIONA
Shh!

DONKEY
Shrek! Shrek! Shrek!

FIONA
No, it's okay. It's okay.

DONKEY
What did you do with the princess?


FIONA
Donkey, I'm the princess.

DONKEY
Aah!

FIONA
It's me, in this body.

DONKEY
Oh, my God! You ate the princess. (to 
her stomach) Can you hear me?

FIONA
Donkey!

DONKEY
(still aimed at her stomach) Listen, 
keep breathing! I'll get you out of 
there!

FIONA
No!

DONKEY
Shrek! Shrek! Shrek!

FIONA
Shh.

DONKEY
Shrek!

FIONA
This is me.

Donkey looks into her eyes as she pets his muzzle, and he quiets 
down.

DONKEY
Princess? What happened to you? You're, 
uh, uh, uh, different.

FIONA
I'm ugly, okay?

DONKEY
Well, yeah! Was it something you ate? 
'Cause I told Shrek those rats was a 
bad idea. You are what you eat, I said. 
Now - -

FIONA
No. I - - I've been this way as long 
as I can remember.

DONKEY
What do you mean? Look, I ain't never 
seen you like this before.

FIONA
It only happens when sun goes down. 
"By night one way, by day another. This 
shall be the norm... until you find 
true love's first kiss... and then take 
love's true form."

DONKEY
Ah, that's beautiful. I didn't know 
you wrote poetry.

FIONA
It's a spell. (sigh) When I was a little 
girl, a witch cast a spell on me. Every 
night I become this. This horrible, 
ugly beast! I was placed in a tower 
to await the day my true love would 
rescue me. That's why I have to marry 
Lord Farquaad tomorrow before the sun 
sets and he sees me like this. (begins 
to cry)

DONKEY
All right, all right. Calm down. Look, 
it's not that bad. You're not that ugly. 
Well, I ain't gonna lie. You are ugly. 
But you only look like this at night. 
Shrek's ugly 24-7.

FIONA
But Donkey, I'm a princess, and this 
is not how a princess is meant to look.


DONKEY
Princess, how 'bout if you don't marry 
Farquaad?

FIONA
I have to. Only my true love's kiss 
can break the spell.

DONKEY
But, you know, um, you're kind of an 
orge, and Shrek - - well, you got a 
lot in common.

FIONA
Shrek?

OUTSIDE

Shrek is walking towards the windmill with a sunflower in his 
hand.

SHREK
(to himself) Princess, I - - Uh, how's 
it going, first of all? Good? Um, good 
for me too. I'm okay. I saw this flower 
and thought of you because it's pretty 
and - - well, I don't really like it, 
but I thought you might like it 'cause 
you're pretty. But I like you anyway. 
I'd - - uh, uh...(sighs) I'm in trouble. 
Okay, here we go.

He walks up to the door and pauses outside when he hears Donkey 
and Fiona talking.

FIONA
(os) I can't just marry whoever I want. 
Take a good look at me, Donkey. I mean, 
really, who can ever love a beast so 
hideous and ugly? "Princess" and "ugly" 
don't go together. That's why I can't 
stay here with Shrek.

Shrek steps back in shock.

FIONA
(os) My only chance to live happily 
ever after is to marry my true love.


Shrek heaves a deep sigh. He throws the flower down and walks 
away.

INSIDE

FIONA
Don't you see, Donkey? That's just how 
it has to be. It's the only way to break 
the spell.

DONKEY
You at least gotta tell Shrek the truth.


FIONA
No! You can't breathe a word. No one 
must ever know.

DONKEY
What's the point of being able to talk 
if you gotta keep secrets?

FIONA
Promise you won't tell. Promise!

DONKEY
All right, all right. I won't tell him. 
But you should. (goes outside) I just 
know before this is over, I'm gonna 
need a whole lot of serious therapy. 
Look at my eye twitchin'.

Fiona comes out the door and watches him walk away. She looks 
down and spots the sunflower. She picks it up before going back 
inside the windmill.

MORNING

Donkey is asleep. Shrek is nowhere to be seen. Fiona is still 
awake. She is plucking petals from the sunflower.

FIONA
I tell him, I tell him not. I tell him, 
I tell him not. I tell him. (she quickly 
runs to the door and goes outside) Shrek! 
Shrek, there's something I want...(she 
looks and sees the rising sun, and as 
the sun crests the sky she turns back 
into a human.)

Just as she looks back at the sun she sees Shrek stomping towards 
her.

FIONA
Shrek. Are you all right?

SHREK
Perfect! Never been better.

FIONA
I - - I don't - - There's something 
I have to tell you.

SHREK
You don't have to tell me anything, 
Princess. I heard enough last night.


FIONA
You heard what I said?

SHREK
Every word.

FIONA
I thought you'd understand.

SHREK
Oh, I understand. Like you said, "Who 
could love a hideous, ugly beast?"


FIONA
But I thought that wouldn't matter to 
you.

SHREK
Yeah? Well, it does. (Fiona looks at 
him in shock. He looks past her and 
spots a group approaching.) Ah, right 
on time. Princess, I've brought you 
a little something.

Farquaad has arrived with a group of his men. He looks very regal 
sitting up on his horse. You would never guess that he's only 
like 3 feet tall. Donkey wakes up with a yawn as the soldiers 
march by.

DONKEY
What'd I miss? What'd I miss? (spots 
the soldiers) (muffled) Who said that? 
Couldn't have been the donkey.

FARQUAAD
Princess Fiona.

SHREK
As promised. Now hand it over.

FARQUAAD
Very well, ogre. (holds out a piece 
of paper) The deed to your swamp, cleared 
out, as agreed. Take it and go before 
I change my mind. (Shrek takes the paper) 
Forgive me, Princess, for startling 
you, but you startled me, for I have 
never seen such a radiant beauty before. 
I'm Lord Farquaad.

FIONA
Lord Farquaad? Oh, no, no. (Farquaad 
snaps his fingers) Forgive me, my lord, 
for I was just saying a short... (Watches 
as Farquaad is lifted off his horse 
and set down in front of her. He comes 
to her waist.) farewell.

FARQUAAD
Oh, that is so sweet. You don't have 
to waste good manners on the ogre. It's 
not like it has feelings.

FIONA
No, you're right. It doesn't.

Donkey watches this exchange with a curious look on his face.


FARQUAAD
Princess Fiona, beautiful, fair, flawless 
Fiona. I ask your hand in marriage. 
Will you be the perfect bride for the 
perfect groom?

FIONA
Lord Farquaad, I accept. Nothing would 
make - -

FARQUAAD
(interrupting) Excellent! I'll start 
the plans, for tomorrow we wed!

FIONA
No! I mean, uh, why wait? Let's get 
married today before the sun sets.


FARQUAAD
Oh, anxious, are you? You're right. 
The sooner, the better. There's so much 
to do! There's the caterer, the cake, 
the band, the guest list. Captain, round 
up some guests! (a guard puts Fiona 
on the back of his horse)

FIONA
Fare-thee-well, ogre.

Farquaad's whole party begins to head back to DuLoc. Donkey watches 
them go.

DONKEY
Shrek, what are you doing? You're letting 
her get away.

SHREK
Yeah? So what?

DONKEY
Shrek, there's something about her you 
don't know. Look, I talked to her last 
night, She's - -

SHREK
I know you talked to her last night. 
You're great pals, aren't ya? Now, if 
you two are such good friends, why don't 
you follow her home?

DONKEY
Shrek, I - - I wanna go with you.

SHREK
I told you, didn't I? You're not coming 
home with me. I live alone! My swamp! 
Me! Nobody else! Understand? Nobody! 
Especially useless, pathetic, annoying, 
talking donkeys!

DONKEY
But I thought - -

SHREK
Yeah. You know what? You thought wrong! 
(stomps off)

DONKEY
Shrek.

Montage of different scenes. Shrek arriving back home. Fiona 
being fitted for the wedding dress. Donkey at a stream running 
into the dragon. Shrek cleaning up his house. Fiona eating dinner 
alone. Shrek eating dinner alone.

SHREK'S HOME

Shrek is eating dinner when he hears a sound outside. He goes 
outside to investigate.

SHREK
Donkey? (Donkey ignores him and continues 
with what he's doing.) What are you 
doing?

DONKEY
I would think, of all people, you would 
recognize a wall when you see one.


SHREK
Well, yeah. But the wall's supposed 
to go around my swamp, not through it.


DONKEY
It is around your half. See that's your 
half, and this is my half.

SHREK
Oh! Your half. Hmm.

DONKEY
Yes, my half. I helped rescue the princess. 
I did half the work. I get half the 
booty. Now hand me that big old rock, 
the one that looks like your head.


SHREK
Back off!

DONKEY
No, you back off.

SHREK
This is my swamp!

DONKEY
Our swamp.

SHREK
(grabs the tree branch Donkey is working 
with) Let go, Donkey!

DONKEY
You let go.

SHREK
Stubborn jackass!

DONKEY
Smelly ogre.

SHREK
Fine! (drops the tree branch and walks 
away)

DONKEY
Hey, hey, come back here. I'm not through 
with you yet.

SHREK
Well, I'm through with you.

DONKEY
Uh-uh. You know, with you it's always, 
"Me, me, me!" Well, guess what! Now 
it's my turn! So you just shut up and 
pay attention! You are mean to me. You 
insult me and you don't appreciate anything 
that I do! You're always pushing me 
around or pushing me away.

SHREK
Oh, yeah? Well, if I treated you so 
bad, how come you came back?

DONKEY
Because that's what friends do! They 
forgive each other!

SHREK
Oh, yeah. You're right, Donkey. I forgive 
you... for stabbin' me in the back! 
(goes into the outhouse and slams the 
door)

DONKEY
Ohh! You're so wrapped up in layers, 
onion boy, you're afraid of your own 
feelings.

SHREK
(os) Go away!

DONKEY
There you are , doing it again just 
like you did to Fiona. All she ever 
do was like you, maybe even love you.


SHREK
(os) Love me? She said I was ugly, a 
hideous creature. I heard the two of 
you talking.

DONKEY
She wasn't talkin' about you. She was 
talkin' about, uh, somebody else.


SHREK
(opens the door and comes out) She wasn't 
talking about me? Well, then who was 
she talking about?

DONKEY
Uh-uh, no way. I ain't saying anything. 
You don't wanna listen to me. Right? 
Right?

SHREK
Donkey!

DONKEY
No!

SHREK
Okay, look. I'm sorry, all right? (sigh) 
I'm sorry. I guess I am just a big, 
stupid, ugly ogre. Can you forgive me?


DONKEY
Hey, that's what friends are for, right?


SHREK
Right. Friends?

DONKEY
Friends.

SHREK
So, um, what did Fiona say about me?


DONKEY
What are you asking me for? Why don't 
you just go ask her?

SHREK
The wedding! We'll never make it in 
time.

DONKEY
Ha-ha-ha! Never fear, for where, there's 
a will, there's a way and I have a way. 
(whistles)

Suddenly the dragon arrives overhead and flies low enough so 
they can climb on.

SHREK
Donkey?

DONKEY
I guess it's just my animal magnetism.


They both laugh.

SHREK
Aw, come here, you. (gives Donkey a 
noogie)

DONKEY
All right, all right. Don't get all 
slobbery. No one likes a kiss ass. All 
right, hop on and hold on tight. I haven't 
had a chance to install the seat belts 
yet.

They climb aboard the dragon and she takes off for DuLoc.

DULOC - CHURCH

Fiona and Farquaad are getting married. The whole town is there. 
The prompter card guy holds up a card that says 'Revered Silence'.


PRIEST
People of DuLoc, we gather here today 
to bear witness to the union....

FIONA
(eyeing the setting sun) Um-

PRIEST
...of our new king...

FIONA
Excuse me. Could we just skip ahead 
to the "I do's"?

FARQUAAD
(chuckles and then motions to the priest 
to indulge Fiona) Go on.

COURTYARD

Some guards are milling around. Suddenly the dragon lands with 
a boom. The guards all take off running.

DONKEY
(to Dragon) Go ahead, HAVE SOME FUN. 
If we need you, I'll whistle. How about 
that? (she nods and goes after the guards) 
Shrek, wait, wait! Wait a minute! You 
wanna do this right, don't you?

SHREK
(at the Church door) What are you talking 
about?

DONKEY
There's a line you gotta wait for. The 
preacher's gonna say, "Speak now or 
forever hold your peace." That's when 
you say, "I object!"

SHREK
I don't have time for this!

DONKEY
Hey, wait. What are you doing? Listen 
to me! Look, you love this woman, don't 
you?

SHREK
Yes.

DONKEY
You wanna hold her?

SHREK
Yes.

DONKEY
Please her?

SHREK
Yes!

DONKEY
(singing James Brown style) Then you 
got to, got to try a little tenderness. 
(normal) The chicks love that romantic 
crap!

SHREK
All right! Cut it out. When does this 
guy say the line?

DONKEY
We gotta check it out.

INSIDE CHURCH

As the priest talks we see Donkey's shadow through one of the 
windows Shrek tosses him up so he can see.

PRIEST
And so, by the power vested in me...


Outside

SHREK
What do you see?

DONKEY
The whole town's in there.

Inside

PRIEST
I now pronounce you husband and wife...


Outside

DONKEY
They're at the altar.

Inside

PRIEST
...king and queen.

Outside

DONKEY
Mother Fletcher! He already said it.


SHREK
Oh, for the love of Pete!

He runs inside without catching Donkey, who hits the ground hard.


INSIDE CHURCH

SHREK
(running toward the alter) I object!


FIONA
Shrek?

The whole congregation gasps as they see Shrek.

FARQUAAD
Oh, now what does he want?

SHREK
(to congregation as he reaches the front 
of the Church) Hi, everyone. Havin' 
a good time, are ya? I love DuLoc, first 
of all. Very clean.

FIONA
What are you doing here?

SHREK
Really, it's rude enough being alive 
when no one wants you, but showing up 
uninvited to a wedding...

SHREK
Fiona! I need to talk to you.

FIONA
Oh, now you wanna talk? It's a little 
late for that, so if you'll excuse me 
- -

SHREK
But you can't marry him.

FIONA
And why not?

SHREK
Because- - Because he's just marring 
you so he can be king.

FARQUAAD
Outrageous! Fiona, don't listen to him.


SHREK
He's not your true love.

FIONA
And what do you know about true love?


SHREK
Well, I - - Uh - - I mean - -

FARQUAAD
Oh, this is precious. The ogee has fallen 
in love with the princess! Oh, good 
Lord. (laughs)

The prompter card guy holds up a card that says 'Laugh'. The 
whole congregation laughs.

FARQUAAD
An ogre and a princess!

FIONA
Shrek, is this true?

FARQUAAD
Who cares? It's preposterous! Fiona, 
my love, we're but a kiss away from 
our "happily ever after." Now kiss me! 
(puckers his lips and leans toward her, 
but she pulls back.)

FIONA
(looking at the setting sun) "By night 
one way, by day another." (to Shrek) 
I wanted to show you before.

She backs up and as the sun sets she changes into her ogre self. 
She gives Shrek a sheepish smile.

SHREK
Well, uh, that explains a lot. (Fiona 
smiles)

FARQUAAD
Ugh! It's disgusting! Guards! Guards! 
I order you to get that out of my sight 
now! Get them! Get them both!

The guards run in and separate Fiona and Shrek. Shrek fights 
them.

SHREK
No, no!

FIONA
Shrek!

FARQUAAD
This hocus-pocus alters nothing. This 
marriage is binding, and that makes 
me king! See? See?

FIONA
No, let go of me! Shrek!

SHREK
No!

FARQUAAD
Don't just stand there, you morons.


SHREK
Get out of my way! Fiona! Arrgh!

FARQUAAD
I'll make you regret the day we met. 
I'll see you drawn and quartered! You'll 
beg for death to save you!

FIONA
No, Shrek!

FARQUAAD
(hold a dagger to Fiona's throat) And 
as for you, my wife...

SHREK
Fiona!

FARQUAAD
I'll have you locked back in that tower 
for the rest of your days! I'm king!


Shrek manages to get a hand free and he whistles.

FARQUAAD
I will have order! I will have perfection! 
I will have - - (Donkey and the dragon 
show up and the dragon leans down and 
eats Farquaad) Aaaah! Aah!

DONKEY
All right. Nobody move. I got a dragon 
here, and I'm not afraid to use it. 
(The dragon roars.) I'm a donkey on 
the edge!

The dragon belches and Farquaad's crown flies out of her mouth 
and falls to the ground.

DONKEY
Celebrity marriages. They never last, 
do they?

The congregation cheers.

DONKEY
Go ahead, Shrek.

SHREK
Uh, Fiona?

FIONA
Yes, Shrek?

SHREK
I - - I love you.

FIONA
Really?

SHREK
Really, really.

FIONA
(smiles) I love you too.

Shrek and Fiona kiss. Thelonius takes one of the cards and writes 
'Awwww' on the back and then shows it to the congregation.


CONGREGATION
Aawww!

Suddenly the magic of the spell pulls Fiona away. She's lifted 
up into the air and she hovers there while the magic works around 
her.

WHISPERS
"Until you find true love's first kiss 
and then take love's true form. Take 
love's true form. Take love's true form."


Suddenly Fiona's eyes open wide. She's consumed by the spell 
and then is slowly lowered to the ground.

SHREK
(going over to her) Fiona? Fiona. Are 
you all right?

FIONA
(standing up, she's still an ogre) Well, 
yes. But I don't understand. I'm supposed 
to be beautiful.

SHREK
But you ARE beautiful.

They smile at each other.

DONKEY
(chuckles) I was hoping this would be 
a happy ending.

Shrek and Fiona kiss...and the kiss fades into...

THE SWAMP

...their wedding kiss. Shrek and Fiona are now married. 'I'm 
a Believer' by Smashmouth is played in the background. Shrek 
and Fiona break apart and run through the crowd to their awaiting 
carriage. Which is made of a giant onion. Fiona tosses her bouquet 
which both Cinderella and Snow White try to catch. But they end 
up getting into a cat fight and so the dragon catches the bouquet 
instead. The Gingerbread man has been mended somewhat and now 
has one leg and walks with a candy cane cane. Shrek and Fiona 
walk off as the rest of the guests party and Donkey takes over 
singing the song.

GINGERBREAD MAN
God bless us, every one.

DONKEY
(as he's done singing and we fade to 
black) Oh, that's funny. Oh. Oh. I can't 
breathe. I can't breathe.

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
