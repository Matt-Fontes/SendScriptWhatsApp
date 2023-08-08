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
BLACK SCREEN

SUPER: New Line Cinema Presents

SUPER: A Wingnut Films Production

BLACK CONTINUES... ELVISH SINGING....A WOMAN'S VOICE IS
whispering, tinged with SADNESS and REGRET:

                    GALADRIEL (V.O.)
              (Elvish: subtitled)
          "I amar prestar sen: han mathon ne nen,
          han mathon ne chae...a han noston ned
          wilith."
              (English:)
          The world is changed: I feel it in the
          water, I feel it in the earth, I smell it
          in the air...Much that once was is lost,
          for none now live who remember it.

SUPER: THE LORD OF THE RINGS

EXT. PROLOGUE -- DAY

IMAGE: FLICKERING FIRELIGHT. The NOLDORIN FORGE in EREGION.
MOLTEN GOLD POURS from the lip of an IRON LADLE.

                    GALADRIEL (V.O.)
          It began with the forging of the Great
          Rings.

IMAGE: THREE RINGS, each set with a single GEM, are received
by the HIGH ELVES-GALADRIEL, GIL-GALAD and CIRDAN.

                    GALADRIEL (V.O.) (CONT'D)
          Three were given to the Elves, immortal,
          wisest...fairest of all beings.

IMAGE: SEVEN RINGS held aloft in triumph by the DWARF LORDS.

                    GALADRIEL (V.O.) (CONT'D)
          Seven to the Dwarf Lords, great miners
          and craftsmen of the mountain halls.

IMAGE: NINE RINGS clutched tightly by the KINGS OF MEN...as
if holding-close a precious secret.

                    GALADRIEL (V.O.) (CONT'D)
          And Nine...nine rings were gifted to the
          race of Men who, above all else, desire
          power.
                    (MORE)



                                                   
                    GALADRIEL (V.O.) (CONT'D)
          For within these rings was bound the
          strength and will to govern each race.

                                                   FADE TO BLACK

                    GALADRIEL (V.O.) (CONT'D)
          But they were all of them deceived.

FADE UP: An ancient PARCHMENT MAP of MIDDLE EARTH...moving
slowly across the MAP as if drawn by an unseen force the
CAMERA closes in on a PLACE NAME...MORDOR.

                    GALADRIEL (V.O.) (CONT'D)
          ...for another ring was made.

TEASING SHOTS: SAURON forging the ONE RING in the CHAMBERS of
SAMMATH NAUR.

                    GALADRIEL (V.O.) (CONT'D)
          In the land of Mordor, in the fires of
          Mount Doom, the Dark Lord Sauron forged
          in secret a Master Ring to control all
          others.


IMAGE: The ONE RING reflecting FIERY LAVA!   FIRE WRITING
emerges on the plain BAND OF GOLD.

                    GALADRIEL (V.O.) (CONT'D)
          ...and into this Ring he poured his
          cruelty, his malice and his will to
          dominate all life.

IMAGE: THE ONE RING falls through SPACE and into flames...

                    GALADRIEL (V.O.) (CONT'D)
          One Ring to rule them all...

IMAGE: A GREAT SHADOW falls across the MAP...closing in
around the realm of GONDOR...

IMAGE: SCREAMING VILLAGERS, MEN, WOMEN, AND CHILDREN, RUN

from their homes, pursued by ARMIES OF HIDEOUS ORCS.

                    GALADRIEL
          One by one the Free lands of Middle earth
          fell to the power of the ring.

                                                   FADE TO BLACK

                    GALADRIEL (V.O.) (CONT'D)
          But there were some...who resisted.


                                                    


FADE UP: ISILDUR, son of the KING OF GONDOR, leads an ARMY
ACROSS the PLAINS OF DAGORLAD...

                    GALADRIEL (V.O.) (CONT'D)
          A last alliance of Men and Elves marched
          against the armies of Mordor.

                    GALADRIEL (V.O.) (CONT'D)
          On the slopes of Mount Doom they fought
          for the freedom of Middle- Earth.

TEASING SHOTS: THE BATTLE OF DAGORLAD...THE ELF LORD, ELROND,

commands rank after rank of ELVEN ARCHERS...ORCS RETREATING
before the ARMY of the LAST ALLIANCE...ELENDIL holds aloft
the great sword....NARSIL!

                    GALADRIEL
          Victory was near!

IMAGES: THE HUGE, DARK FIGURE OF SARURON, bearing the ONE
RING on his finger, looms over the field of battle...

                    GALADRIEL (V.O.) (CONT'D)
          But the power of the Ring could not be
          undone.

IMAGE: SAURON lays waste to the armies of the LAST ALLIANCE.
With desperate courage, ELENDIL leads a charge...THE BLACK
MACE OF SAURON LASHES OUT!! IMAGE: ELENDIL'S body falls like
a crumpled rag doll... IMAGE: ISILDUR cradles the body of his
father in his arms. The SHADOW OF SAURON falls over him...

                    GALADRIEL (V.O.) (CONT'D)
          It was in this moment..when all hope had
          faded, that Isildur, son of the king,
          took up his father's sword.

ISILDUR snatches up the BROKEN BLADE OF NARSIL..The BLADE
severs SAURON'S FINGERS... AND THE ONE RING FLIES from his
body.

                    GALADRIEL (V.O.) (CONT'D)
          Sauron, the enemy of the Free Peoples of
          Middle Earth, was defeated. SAURON'S
          ARMOR clatters to the ground. His body

GONE....VAPORIZED! CLOSE ON: ISILDUR picks up the SEVERED
FINGER and removes the ONE RING...transfixed!

                    GALADRIEL (V.O.) (CONT'D)
          The Ring passed to Isildur...who had this
          one chance to destroy evil forever.

                                                    


IMAGE: GLADDEN FIELD...ISILDUR leads a small column of men
through DARKENING WOODS...the ONE RING glinting on a CHAIN
around his neck.

                      GALADRIEL (V.O.) (CONT'D)
            But the hearts of Men are easily
            corrupted. And the Ring of Power has a
            will of its own.

SUDDENLY!    ARROWS FLY!   They are ambushed by ORCS...ISILDUR
SCREAMS!

                                                     FADE TO BLACK

FADE UP: ISILDUR MATERIALIZES UNDER WATER...as THE RING slips
slowly from his finger. Ripples of LIGHT play across
ISILDUR'S PALE FACE...he is DEAD.

                      GALADRIEL (V.O.) (CONT'D)
            It betrayed Isildur to his death.

IMAGE: THE RING falls through the MURKY WATERS of the RIVER
ANDUIN.

                      GALADRIEL (V.O.) (CONT'D)
            And some things that should not have been
            forgotten...were lost.

                                                     FADE TO BLACK

                      GALADRIEL (V.O.) (CONT'D)
            History became legend...legend became
            myth.

FADE UP: The waters of the ANDUIN RIVER lie dark and
undisturbed.

                      GALADRIEL (V.O.) (CONT'D)
            And for two and a half thousand years the
            Ring passed out of all knowledge.

IMAGE: SILT SWIRLS...A THIN WHITE HAND reaches
down...grasping the RING...

                      GALADRIEL (V.O.) (CONT'D)
            Until, when chance came, it ensnared a
            new bearer!

IMAGE: THE THIN WHITE HAND opens to reveal one ring.

                      GOLLUM (V.O.)
            My Precious...

                                                                5.



IMAGE: MIST SHROUDED MOUNTAINS...

                    GALADRIEL (V.O.)
          The Ring came to the creature Gollum, who
          took it deep into the tunnels of the
          Misty Mountains.

IMAGE: THE GLOOM of a MOUNTAIN CAVERN..a MURKY POOL of
WATER...in the DARKNESS the SHADOWY OUTLINE of an EMACIATED
FIGURE.

                    GALADRIEL (V.O.) (CONT'D)
          And there, it consumed him. A RASPY VOICE
          mutters in the half light...

                    GOLLUM
          It came to me. My own.     My love...
              (ecstatic whisper)
          My preciousness.

                    GALADRIEL (V.O.)
          The Ring brought to Gollum unnatural long
          life. For five hundred years it poisoned
          his mind. And in the gloom of Gollum's
          cave...

                                                     FADE TO BLACK

                       GALADRIEL (V.O.)   (CONT'D)
          It waited.

FADE UP: Bathed in COLD MOONLIGHT, the WORLD lies DARK and
STILL...the unsettled quiet before the storm...

                    GALADRIEL (V.O.) (CONT'D)
          Darkness crept back into the forests of
          the world. Rumor grew of a Shadow in the
          East...whispers of a nameless fear. And
          the Ring of Power perceived...its time
          had now come. It abandoned Gollum.

SLOW MOTION: unseen by its KEEPER..THE RING falls to the
MUDDY FLOOR of a MOUNTAIN TUNNEL...

                    GALADRIEL (V.O.) (CONT'D)
          But something happened then the Ring did
          not intend...

                                                     FADE TO BLACK

IMAGE: FUMBLING in the dark, a SMALL HAND closes over the

                                                                 6.



RING.

                      GALADRIEL
            It was picked up by the most unlikely
            creature imaginable...

                      BILBO
                (to himself)
            What's this?

A YOUNGISH LOOKING BILBO BAGGINS peers down at what lies in
his hand...PERPLEXED by what he has found.

                      GALADRIEL (V.O.)
            A Hobbit....Bilbo Baggins of the Shire.

                      BILBO
                (surprised)
            A Ring.

SUDDENLY!   A VOICE SCREAMS...ITS ANGUISH RINGING through the

COLD, DANK TUNNELS...

                       GOLLUM (V.O.)
            Lost!   Lost! My Precious is lost!!

Frightened Bilbo quickly POCKETS the ONE RING and hurries on.

                                                      DISSOLVE TO:

WIDE ON: THE CAMERA SOARS AWAY FROM THE MOUNTAINS.      MOVING

FASTER AND FASTER...THEIR DARK GREEN FORESTS AND JAGGED

WHITE PEAKS RECEDING INTO THE SHROUD OF MIST

                      GALADRIEL (V.O.)
            For the time will soon come when Hobbits
            will shape the fortunes of all.

                                                    FADE TO BLACK

                                                          FADE IN:

EXT. HOBBITON WOODS -- DAY

ANGLE ON: TWO HOBBIT FEET

resting on a small rock...rising out of the LONG, OVERGROWN
GRASSES SUPER: THE FELLOWSHIP OF THE RING SUPER: THE
SHIRE....60 YEARS LATER CAMERA TRACKS TO: a Figure lies
beneath the dappled sunlight of an old tree.

                                                      

White flowers are scattered among the Well seeded grasses.
An idyllic setting at the end of a long hot summer... the
figure is reading a book. ON THE SOUNDTRACK: In the distance,
growing louder..over the Gentle clip clop of an approaching
cart and horse can be heard the HUMMING OF A DEEP VOICE to
the tune of "The Road Goes Ever On and On..."

SUDDENLY! The figure in the grass sits up...looking straight
at camera is a handsome young HOBBIT, with dark curly hair
and deep blue eyes. This is FRODO BAGGINS...his EYES alight
with EXCITEMENT! Tossing away the long stem of grass in his
mouth, Frodo runs off.

                                                         CUT TO:

EXT. SHIRE LANE -- DAY

The cart rattles along a leafy lane, driven by a stooped
figure in Grey.

INTERCUT WITH; SHOTS OF FRODO RUNNING... CAREERING DOWN A

HILL. . .JUMPING OVER LOGS... DODGING TREE BRANCHES.

                                                       ANGLE ON:

The shambling OLD PONY snorts and rears as... SUDDENLY FRODO
appears on a bank above the cart.

                    FRODO
          You're late.

CLOSE ON: GANDALF glowers at the young Hobbit...

                    GANDALF
          A Wizard is never late, Frodo Baggins,
          nor is he early. He arrives precisely
          when he means to.

They look at each other a moment..then both start laughing as
FRODO'S face breaks into a smile and he leaps on to the front
seat of the cart.

                    FRODO
          It's wonderful to see you, Gandalf!

Next to Gandalf, we see how small Hobbits are...Frodo is 3
foot 6 inches tall.

                    GANDALF
          You didn't think I'd miss your Uncle
          Bilbo's birthday?

                                                         CUT TO:

                                                              8.



EXT. HOBBITON FIELDS -- DAY

Wide on: The cart rattles past a FIELD LUPIN being tended by

HOBBITS.

                     FRODO
           What news of the outside world? Tell me
           everything!

                                                       ANGLE ON:

Gandalf looks down at Frodo, a twinkle in his eye.

                     GANDALF
           What, everything? Far too eager and
           curious for a Hobbit. Most unnatural...

Wide on: The cart rattles over a Stone bridge towards a Busy
Hobbit Marketplace.

                      GANDALF (V.O.) (CONT'D)
           Well, what can I tell you? Life in the
           wide world goes on much as if it has past
           age. Full of its own comings and goings,
           scarcely even aware of the existence of
           Hobbits...

Close on: Gandalf as he surveys the peaceful scene before
him.

                     GANDALF (CONT'D)
           ...for which I am very thankful.

                                                       ANGLE ON:

Hobbits look up exclaiming in wonder and excitement as the
cart bearing Gandalf and Frodo rolls past the Green Dragon
Inn...towards... Wide on: The party field. Where scOrcs of
Hobbits are busy preparing for the big night.

                     GANDALF (CONT'D)
           Ah, the long expected party. So, how is
           the old rascal? I hear it's going to be
           a Party of Special Magnificence.

                     FRODO
           You know Bilbo...he's got he whole place
           in an uproar.

                     GANDALF
           Oh, well...that should please him.


                                                     


                    FRODO
          Half the Shire's been invited...

                    GANDALF
          Good gracious, me.

                    FRODO
          He's up to something.

                    GANDALF
          Oh, really?

Frodo shoots a knowing look, as Gandalf averts his eyes.

                    FRODO
          Alright then..keep your secrets. Before
          you came along we Bagginses were very
          well thought of.

                       GANDALF
          Indeed?

                    FRODO
          Never had any adventures or did anything
          unexpected.

                    GANDALF
          If you're referring to the incident with
          the Dragon...I was barely involved...all
          I did was give your Uncle a little nudge
          out the door.

                    FRODO
          Whatever you did...you've been officially
          labelled as a Disturber of the Peace.

                    GANDALF
          Oh, really?

                                                       ANGLE ON:

ODO PROUDFOOT looks up as the Cart passes by, deeply
suspicious.

                                                         CUT TO:

EXT. HOBBITON -- DAY

                                                       CRANE UP:

As the cart rattles into the small village of Hobbiton...a
quaint rustic settlement, nestled amongst rolling green hills
and large trees.

                                                    

The Hobbits live in Hobbit Holes: neat burrows dug into the
grassy hillside, with round doors and cute front gardens.

                                                     ANGLE ON:

Excited children, chasing after the cart.

                                                     CLOSE ON:

Gandalf ignOrcs the children's cries. The children stand
deflated, watching Gandalf disappear up the lane. At that
moment: spinning balls of bright color suddenly leap out of
the cart, fizzing over the heads of the delighted children.

                                                     ANGLE ON:

Gandalf smiling to himself, well pleased with his joke. ODO
PROUDFOOT is unable to suppress a chuckle. Frodo stands up in
the cart as Gandalf reigns in the horse.

                    FRODO
          Gandalf... I'm glad you're back. Frodo
          leaps expertly from the cart. Gandalf
          smiles.

                    GANDALF
          So am I, dear boy...so am I

                                                       CUT TO:

EXT. BAG END -- DAY

Wide on: GANDALF'S CART pulls up outside the gate to BAG
END...a particularly fine example of a Hobbit hole, with a
large round front door set into a grassy hillside. There is
a sign on the gate which reads: "NO ADMITTANCE EXCEPT ON
PARTY BUSINESS." Gandalf strides up to the garden path of Bag
End. He raises his staff and raps on the front door...a
voice calls out:

                     BILBO (O.S.)
          No, thank you! We don't want any more
          visitors, well wishers, or distant
          relations.

                    GANDALF
          And what about very old friends?

Suddenly the door opens and BILBO BAGGINS stands before him.
He is a HOBBIT OF INDERTIMINATE AGE, with a mischievous
Twinkle in his eye. Wearing a dashing brocade waist coat, he
looks every inch the eccentric gentleman.



                                                   


                     BILBO
          Gandalf?

                    GANDALF
          Bilbo Baggins!

                    BILBO
          My dear Gandalf!

Gandalf drops to his knee to embrace his old friend.

                    GANDALF
          It's good to see you. One hundred and
          eleven years old, who would believe it!

Gandalf looks at him more keenly.

                    GANDALF (CONT'D)
          You haven't aged a day! Gandalf and Bilbo
          laugh together and enter Bag End.

                    BILBO
          Come on, come in!   Welcome, welcome!!

                                                        CUT TO:

INT. BAG END LIVING ROOM -- DAY

Bilbo leads Gandalf into Bag End...cozy and cluttered with
souvenirs of Bilbo's travels. Gandalf has to stoop to avoid
hitting his head on the low ceiling. Bilbo hangs up Gandalf's
hat on a peg and trots off down the hall.

                    BILBO
              (Calling)
          Tea? Or maybe something stronger... I've
          a few bottles of the Old Winyard left,
          1296...a very good year, almost as old as
          I am. It was laid down by my father. What
          say we open one, eh?

Bilbo disappears into the kitchen as Gandalf looks
around..enjoying the familiarity of Bag End...he turns,
knocking his head on the light and then walking into the
wooden beam. He groans.

                    BILBO (O.S.) (CONT'D)
          I was expecting you some time last week.
          Not that it matters, you come and go as
          you please, always have done, always
          will.
                    (MORE)


                                                    
                    BILBO (O.S.) (CONT'D)
          You've caught me a bit unprepared, I'm
          afraid...we've only got cold chicken, bit
          of pickle, some cheese here...ooh, no,
          that might be a little risky...

Gandalf stops in front of a framed map, charred in one
corner...it is Thorin's map of the Lonely Mountain, Gandalf
smiles to himself.

                    BILBO (CONT'D)
          Er, we've got raspberry jam and apple
          tart...got some custard somewhere. Not
          much for Afters, I'm afraid. Oh
          no...we're alright...I've just found some
          sponge cake. Nice little snack. Hope
          it's enough.
              (comes into view)
          I could do you some eggs if you like?

Bilbo jumps, a half eaten pork pie in his hand, as Gandalf
mysteriously appears behind him.

                    GANDALF
          Just tea, thank you.

                       BILBO
          Oh..right.     You don't mind if...?

                    GANDALF
          No, not at all. Go ahead. A sudden loud
          knock on the front door.

MRS. SACKVILLE BAGGINS (O.S.)

Bilbo Baggins, you open this door..I know you're in there.

                    BILBO
          I'm not home.

Gandalf watches, amused as Bilbo tries to hide.

                    BILBO (CONT'D)
          I've got to get away from these
          confounded relatives, hanging on the bell
          all day, never giving me a moment's
          peace. I want to see mountains
          again...mountains, Gandalf... and then
          find somewhere quiet where I can finish
          my book...Oh, Tea!

                    GANDALF
          So, you mean to go through with your
          plan, then?


                                                  


                    BILBO
          Yes, yes...it's all inhand.   All the
          arrangements are made.

                    GANDALF
          Frodo suspects something.

                    BILBO
          'Course he does, he's a Baggins...not
          some block headed Bracegirdle from
          Hardbottle!

                    GANDALF
          You will tell him, won't you?

                      BILBO
          Yes, yes.

                    GANDALF
          He's very fond of you.

                    BILBO
          I know. He'd probably come with me if I
          asked him. I think, in his heart,
          Frodo's still in love with the Shire, the
          woods and the fields... little rivers.
          Bilbo stands gazing out of the kitchen
          window.

                    BILBO (CONT'D)
          I am old, Gandalf... Bilbo looks at
          Gandalf sadly...

                    BILBO (CONT'D)
          I know I don't look it, but I'm beginning
          to feel it in my heart.

                                                      CLOSE ON:

Bilbo's fingers close around his waistcoat pocket...gripping
a small, unseen object.

                    BILBO (CONT'D)
          I feel thin...sort of stretched, like
          butter scraped over too much bread. I
          need a holiday...a very long holiday and
          I don't expect I shall return...in fact,
          I mean not to.

                                                        CUT TO:

                                                          14.



INT. BAG END -- EVENING

Gandalf and Bilbo are sitting on the Bag End porch. Below
them, final preparations are being made on the Party field.
Bilbo strikes a match and lights his pipe.

                    BILBO
          Old Toby, the finest weed in
          Southfarthing!

Bilbo blows a perfect smoke ring and watches it rise into the
air. A tiny sailing ship with masts and sails glides through
the Center of Bilbo's smoke ring.

                    BILBO (CONT'D)
          Ohhhh,
              (smiles)
          Gandalf my old friend...this will be a
          night to remember!

                                                      CUT TO:

EXT. PARTY FIELD, HOBBITON -- NIGHT

BOOM! A FIREWORK explodes into the night sky high above
Hobbiton...in the shape of a great green tree with unfolding
branches. TILT DOWN: with glowing flowers as they rain down
from the branches...evaporating just above the up turned
faces of the delighted party-goers 144 Hobbits, feasting and
drinking Carts of beer and wine are scattered about, and the
tables are piled high with steaming scones and savories.
Gandalf hurries about, lighting fireworks with a blue spark
that dances magically from his staff... Bilbo is greeting
visitors. Frodo and SAM sit at a table drinking ale...Frodo
notices Sam's eyes keep flicking to another pretty Hobbit,
Rosie Cotton, sitting some distance away.

                    FRODO
          Go on, Sam, ask Rosie for a dance.

                     SAM
               (horrified)
          I think I'll just have myself another
          ale.

                    FRODO
          Oh, no you don't. Go on.

Sam goes to drain his glass... suddenly it is snatched out of
his hands as Frodo thrusts him into the middle of a passing
throng of dancers.

                                                            15.



ANGLE ON: SAM'S HORRIFIED FACE

as he is Swept away.   Frodo laughs and finishes Sam's beer.

                                                      ANGLE ON:

Gandalf as he sets alight a particularly spectacular firework
that draws gasps of admiration from the party guests.

Close on: Bilbo is relating stories of his adventure to a
group of young hobbit children.

                    BILBO
              (melodramatic)
          So, there I was...at the mercy of three
          monstrous trolls...Have you ever heard of
          a troll? Do you know what a Troll is?
          Great big nasty twenty foot high smelly
          things..and they're arguing...arguing
          about how they were going to cook us!

ANGLE ON: A LITTLE HOBBIT GIRL'S

upturned face...her eyes growing larger and larger.

                    BILBO
          Whether it be turned on a spit or minced
          in a pie or whether they were going to
          sit on us one by one and squash us into
          jelly! But they spent so long arguing
          the whether-to's and why-for's that the
          sun's first light crept over the top of
          the trees...and turned them all to stone!

STUNNED GASPS from his young Audience greet his astonishing
feat! Close on: MERRY AND PIPPIN, two mischievous Young
Hobbits in their late teens. Pippin scrambles on to the back
of Gandalf's wagon, snatching up a small firework

                    MERRY
              (urgent whisper)
          No, no..the big one...the big one! Pippin
          grabs a huge rocket. CLOSE ON: FIREWORK
          FUSE crackles with flame!

Merry is holding out the big rocket...he looks aghast at the
fizzing fuse that Pippin has just lit.

                    MERRY (CONT'D)
              (worried whisper)
          You're supposed to stick it in the
          ground!


                                                  


                    PIPPIN
          It is in the ground.

Merry fearfully tosses the Rocket to Pippin!    The fuse
sizzles angrily.

                     MERRY
          Outside!

                    PIPPIN
          It was your idea.

Pippin attempts to throw the fizzing rocket back to Merry.
WHOOSH! The two hobbits are suddenly blown off their feet in
a shower of sparks as the rocket blasts off with frightening
power. The ROCKET ZOOMS over the Party..It suddenly bursts
apart, forming the shape of a great red golden Dragon! Fire
gushes from its nostrils as it turns back and Flies low
towards the startled crowd. Close on: Frodo watches the
Fireworks Dragon with alarm...but Bilbo is oblivious to the
Panicking crowd and impending danger!

                     FRODO
          Bilbo!   Watch out for the dragon!!

                    BILBO
          Dragon? Nonsense...hasn1t been a dragon
          in these parts for a thousand years!

ANGLE ON: FRODO

As he hurriedly pulls Bilbo to the ground, just as the dragon
roars a few feet above their heads like a flaming express
train! Hobbits dive to the ground, tables overturn, tents
collapse, food flies everywhere. The fireworks dragon turns a
somersault and explodes over the hills with a deafening bang!
This gets the biggest Cheer of the night.

ANGLE ON: MERRY AND PIPPIN,

clothes and hair smoking.

                    MERRY
          That was good!

                    PIPPIN
          Let's get another one!

LARGE HANDS suddenly clamp down on Merry and Pippin's ears.
Low angle: Gandalf looking DOWN STERNLY!




                                                   


                    GANDALF
          Meridoc Brandybuck and Peregrin Took...I
          might have known!

                                                        CUT TO:

MERRY AND PIPPIN

Are leaning over a barrel, washing dishes in soapy
water...with Gandalf sitting nearby, smoking his pipe and
sipping an ale. Cries of "SPEECH! SPEECH" erupt from the
party.

                                                      ANGLE ON:

Bilbo stepping on a stool...he bows in gratitude at the
applause.

                       FRODO
          Speech!

                    BILBO
              (clearing throat)
          My dear Bagginses, and Boffins, tooks and
          Brandybucks...Grubbs, Chubbs,
          Hornblowers, Bolgers, Bracegirdles and
          Proudfoots...

ANGLE ON: A HOBBIT WITH PARTICULARLY BIG FEET

                       ODO PROUDFOOT
          Proudfeet!

                    BILBO
          Today is my one hundred and eleventh
          birthday. Yes, and alas...Eleventy- one
          years is far too short a time to live
          among such excellent and admirable
          Hobbits! Tremendous outburst of approval!

                    BILBO (CONT'D)
          I don't know half of you half as well as
          I should like; and I like less than half
          of you as well as well as you deserve.

SCATTERED CLAPPING as the guests try to work out if that was
a compliment or not. CLOSE ON: FRODO AND GANDALF smiling to
themselves. CLOSE ON: Bilbo...a strange hum seems to fill his
head. A bead of sweat rolls down his brow.

Bilbo's hand pulls something out of his waistcoat pocket and
holds it behind his back.


                                                 


                    BILBO (CONT'D)
          I have..things to do and I have put this
          off for far too long... CLOSE ON: BILBO'S
          knuckles turn white as he tightens his
          grip on the small object behind his back.

                    BILBO (CONT'D)
          I regret to announce, this is the end. I
          am going now. I bid you all a very fond
          farewell!! Bilbo looks across at Frodo,
          hesitates... then...

                    BILBO (CONT'D)
              (whisper)
          Goodbye.

Bilbo instantly vanishes. The party explodes into an
uproar... the crowd leaps to its feet.

ANGLE ON: FRODO

staring at the empty stool in disbelief.

                                                        CUT TO:

EXT. BAG END -- NIGHT

The party is still in an excited uproar... some 50 yards away
as we pan across a moonlit lane to the front door of Bag End.
Door opens, pulled by an invisible hand.

INT. BAG END -- NIGHT

The door quietly closes...Bilbo materializes as he pulls a
plain gold ring off his finger. Bilbo laughs as he tosses the
ring in the air, then places it in his pocket.

                                                      ANGLE ON:

Bilbo emerges from the passage, carrying a walking stick. He
finds Gandalf looming over him.

                    GANDALF
          I suppose you think that was terribly
          clever?

                    BILBO
          Come on, Gandalf!   Did you see their
          faces?




                                                  


                    GANDALF
          There are many magic rings in the world,
          Bilbo Baggins, and none of them should be
          used lightly.

                    BILBO
          It was just a bit of fun.   Oh, you're
          probably right as usual.

                    GANDALF
          You will keep an eye on Frodo, won't you?

                    BILBO
          I'm leaving everything to him.

                    GANDALF
          What about this ring of yours?   Is that
          staying too?

Close on: Bilbo...he gives Gandalf a look and nods toward the
mantelpiece.

                    BILBO
          Yes, yes, it's in an envelope...over
          there on the mantelpiece. Gandalf frowns
          at the empty mantelpiece...Bilbo suddenly
          feels his waistcoat with a look of guilty
          surprise.

                    BILBO (CONT'D)
          No, wait. It's here in my pocket. Isn't
          that...isn't' that odd now? Yet, after
          all, why not? Why shouldn't I keep it?

                    GANDALF
          I think you should leave the Ring behind,
          Bilbo. Is that so hard?

                    BILBO
          Well, no...and yes. Now it comes to it,
          I don't feel like parting with it. It's
          mine. I found it. It came to me!

ANGLE ON: GANDALF LOOKS DOWN AT BILBO WITH RISING CONCERN.

                    GANDALF
          There's no need to get angry.

                    BILBO
          Well, if I'm angry, it's your fault! It's
          mine. My own, my precious.



                                                     


                    GANDALF
          Precious? It's been called that before,
          but not by you.

                    BILBO
          So? What business is it of yours what I
          do with my own things? Bilbo's voice,
          shape and manner have suddenly changed.

                    GANDALF
          I think you've had that ring quite long
          enough.

                    BILBO
          You want it for yourself!

Gandalf rises to his full height, his eyes flash, his shadow
suddenly seems to fill the room

                    GANDALF
          Bilbo Baggins do not take me for some
          conjurer of cheap tricks! Bilbo cowers
          from Gandalf, disarmed by his power...a
          frightened Hobbit. Gandalf's expression
          softens.

                    GANDALF (CONT'D)
          I am not trying to rob you. I am trying
          to help you. Sobbing, Bilbo runs to
          Gandalf and hugs him.

                    GANDALF (CONT'D)
          All you long years we've been
          friends...trust me as you once did. Let
          it go!

                    BILBO
          You're right, Gandalf...the ring must go
          to Frodo.

Bilbo lifts his knapsack and heads for the front door.

                    BILBO (CONT'D)
          It's late, the road is long... yes, it is
          time.

                    GANDALF
          Bilbo?

                    BILBO
          Hmmm?



                                                    


                    GANDALF
          The ring is still in your pocket.

Bilbo hesitates...reaches into his pocket.

                     BILBO
          Oh, yes.

CLOSE ON: Bilbo pulls out the ring...he stares at it in his
palm. With all his will power, Bilbo allows the ring to
slowly slide off his palm and drop to the floor. CLOSE ON:
The tiny ring lands with a heavy thud on the wooden floor.

EXT. BAG END -- NIGHT

                                                      ANGLE ON:

Bilbo staggering out of Bag end...he braces himself in the
night air, Pale and Trembling, as if his loss of the ring has
weakened him. Gandalf steps up behind.

                    BILBO
          I've thought up and ending for my
          book..."And he lived happily ever after
          to the end of his days."

                    GANDALF
          I'm sure you will, my dear friend.

                    BILBO
          Goodbye, Gandalf.

                    GANDALF
          Goodbye Bilbo.

Bilbo walks away from Bag End, disappearing into the night,
softly singing: "The Road goes on and on."

                    GANDALF (CONT'D)
              (softly)
          Until our next meeting.

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

CLOSE ON: THE RING...Glinting on the floor...Gandalf circles
around it, a Puzzled look on his face. Gandalf slowly reaches
for the ring. His fingers barely touch the ring...the creepy
Hum rises on the soundtrack. Gandalf is sitting in front of
the fire, with his pipe...staring into the flickering flames.



                                                    


                    BILBO (V.O.)
          It's mine, my own, my precious.

                    GANDALF
              (to himself)
          Riddles in the dark.

                    FRODO (O.S.)
          Bilbo! Bilbo!

Frodo rushes into Bag End...he stops and picks up the ring at
his feet. Gandalf continues staring into the fire, as if
locked in thought.

                    GANDALF
              (to himself)
          My precious...precious..

                    FRODO
              (quietly)
          He's gone, hasn't he? Frodo steps into
          the living room.

                    FRODO (CONT'D)
          He talked for so long about leaving...I
          didn't think he'd really do it.

                     GANDALF
              (mutters to himself)
          ...my own.

                     FRODO
          Gandalf?

Gandalf turns...his eyes locking onto the ring in Frodo's
fingers.

                    GANDALF
          Bilbo's ring.

Gandalf sorts hurriedly through Bilbo's papers...

                    GANDALF (CONT'D)
          He's gone to stay with the Elves. He's
          left you Bag End...

Gandalf holds out the envelope...Frodo drops the ring into
it.

                    GANDALF (CONT'D)
          ...along with all his possessions.

Gandolf seals the envelope with wax.   He hands it to Frodo.

                                                    


                    GANDALF (CONT'D)
          The ring is yours now. But it somewhere
          out of sight. Gandalf rises hurriedly and
          starts to gather his things.

                    FRODO
          Where are you going?

                    GANDALF
          I have some things I must see to.

                    FRODO
          What things?

                       GANDALF
          Questions.     Questions that need
          answering.

                    FRODO
          You've only just arrived!    I don't
          understand...

Gandalf is already at the door, he turns to Frodo.

                    GANDALF
          Neither do I. Keep it secret, keep it
          safe.

Gandalf hurries out the door...leaving FRODO standing alone
in the Bag End.

ANGLE ON: THE ENVELOPE

The camera pushes in...the hum of the ring comes up on the
soundtrack. The camera pushes through the white paper to the
ring...beneath the hum the whispered murmur of BLACK SPEECH
can be heard.

                                                      CUT TO:

EXT. BARAD-DUR -- NIGHT

The jagged ruins of" BARAD-DUR. THE DARK TOWER! TEASING
IMAGES: THE HUGE DARK TOWER OF BARAD-DUR is being rebuilt!
Thousands of ORCS crawl over the surface, hauling stone and
iron up the towering heights.

WIDE ON: MOUNT DOOM...A HUGE, BILLOWING CLOUD OF BLACK FILTH

grows and spreads across the red streaked sky...casting a
shadowy pall over the nightmarish landscape.



                                                  


                      GOLLUM (O.S.)
          Baggins!    Shire!!

                                                        CUT TO:

EXT. MINAS MORGUL -- NIGHT

NINE BLACK RIDERS burst out of Minas Morgul and charge toward
Camera.

EXT. THE WEST ROAD, GONDOR -- DAY

WIDE ON: A LONE HORSEMAN gallops to the crest of a hill on
the west road. The main highway south to Minas Tirith...he
looks toward the saw toothed mountains of Mordor...
...seeping out across the blood red sky, his face grave. He
spurs his horse on.

                                                        CUT TO:

INT. CITADEL, MINAS TIRITH -- NIGHT

ANGLE ON: GANDALF

making is way down into the lower depths of the Citidel.

                                                        CUT TO:

INT. CITADEL CHAMBER, MINAS TIRITH -- NIGHT

CLOSE ON: Pages flipping as Gandalf searches ancient scrolls
and books placed high on a wooden table. His eyes settle on
one old parchment. He murmurs hurriedly to himself, reading.

                    GANDALF
              (reading)
          The year 3434 of the Second Age...here
          follows the account of Isildur, High King
          of Gondor, and the finding of the ring of
          power.

                                                   DISSOLVE TO:

CLOSE ON: ISILDUR, TRIUMPHANT, REACHES FOR THE ONE RING, HIS

EYES FIXATED ON IT.

                    GANDALF
              (reading)
          It has come to me...the ring of power!
                    (MORE)



                                                   
                    GANDALF (CONT'D)
          It shall be an heirloom of my
          Kingdom...all those who follow in my
          bloodline shall be bound to its fate, for
          I will risk no hurt to the

                    GANDALF (CONT'D)
          ring...it is precious to me, though I buy
          it with great pain...

CLOSE ON: ELVISH LETTERING MARKS ON THE FADED OLD DOCUMENT

IN GANDALF'S HAND.

                    GANDALF
              (reading)
          The marking upon the band begin to
          fade...the writing which at first was as
          clear as red flame, has all but
          disappeared...a secret now that only fire
          can tell...

                                                      CUT TO:

EXT. HOBBIT FARMHOUSE -- EVENING

FARMER MAGGOT is chopping wood in his garden CLOSE ON:
SNORTING HORSE NOSTRILS...as the shadow of a black rider
looms over a Hobbit House. Terrified, FARMER MAGGOT cowers in
his doorway...FANG, his dog, Whimpers and backs away.

                    BLACK RIDER
              (hissing)
          Shire? Baggins?

                    FARMER MAGGOT
              (terrified)
          There's no Bagginses around here! They
          are all up in Hobbiton...that way.

The BLACK RIDER GALLOPS AWAY AT SPEED

                                                      CUT TO:

INT. GREEN DRAGON INN -- NIGHT

ANGLE ON: ROSIE COTTON

bids the last of the Patron's "Goodnight"...Sam meets her
eyes for a moment as he and Frodo leave the inn.

                                                            26.



EXT. BAG END -- NIGHT

WIDE ON: FRODO FAREWELLS SAM outside Bag End, and heads
towards the front door. Creepy POV from inside Bag end: Frodo
coming up the path.

                                                        CUT TO:

INT. BAG END HALLWAY -- NIGHT

                                                      ANGLE ON:

FRODO enters Bag End...he immediately Pauses, sensing that
something is amiss. All is quiet...Frodo peers uneasily into
the darkened living room. SUDDENLY! A large figure looms out
of the shadows, reaching for Frodo. Frodo lets out a
startled cry, pulls himself free and spins around to face his
Assailant. Gandalf steps into a shaft of moonlight. Paranoia
blazes in his eyes. His clothes are dirty and ragged from
much traveling. Hair and beard much longer an unkempt.

                    GANDALF
              (urgent whisper)
          Is it secret? Is it safe?

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

Frodo pulls the envelope out of an old chest. Gandalf,
suspicious, Alert. Without a word, Gandalf takes the envelope
and tosses it into the fireplace!

                    FRODO
              (bewildered)
          What are you doing?

Flames instantly consume the envelope...revealing the ring,
as it sinks into the red hot embers. Gandalf reaches into the
fire with a pair of tongs...he lifts the ring out.

                    GANDALF
          Hold out your hand, Frodo...it is quite
          cool.

Gandalf drops the ring into Frodo's hand...he reacts to its
weight.

                    GANDALF (CONT'D)
          What can you see? Can you see anything?

                    FRODO
          Nothing...there's nothing.   Wait...

                                                    


CLOSE ON: The Gold Band of the ring as fiery letters begin to
appear...a tiny inscription glows red...as if burning from
within.

                    GANDALF
          ...these are markings.

CLOSE ON: GANDALF...STILL...TENSE

                    FRO DO
          It's some form of Elvish...I can't read
          it.

                    GANDALF
              (ominous)
          There are few who can...the language is
          that of Mordor, which I will not utter
          here.

Mordor?

                    FRODO
          GANDALF

In the common tongue it says, "One ring to rule them all, One
ring to find them, One ring to bring them all, and in the
darkness bind them."

                                                        CUT TO:

INT. BAG END KITCHEN -- NIGHT

CLOSE ON: The ring lies on Frodo's simple kitchen table.

                    GANDALF
          This is the one ring forged by the dark
          lord, Sauron, in the fires of Mt
          Doom...taken by Isildur from the hand of
          Sauron himself.

CLOSE ON: FRODO...STUNNED

                    FRODO
              (quiet realization)
          Bilbo found it...in Gollom's cave.

                    GANDALF
          For sixty years the ring lay quiet in
          Bilbo's keeping, prolonging his life,
          delaying old age...but no longer, Frodo.
          Evil is stirring in Mordor. The ring has
          awoken. It has heard its master's call.
                    (MORE)

                                                    
                    GANDALF (CONT'D)
          AT THAT MOMENT: A FLEETING, LOW WHISPER
          of BLACK SPEECH

emanates from the Ring.   Frodo looks at Gandalf, each knowing
the other has heard it.

                     FRODO
          But he was destroyed...Sauron was
          destroyed.

ANGLE ON: THE RING

lies between them on the table.

                    GANDALF
          No, Frodo. The spirit of Sauron has
          endured. His life force is bound to the
          ring and the ring survived. Sauron has
          returned. His Orcs have multiplied...his
          fortress of Barad- dur is rebuilt in the
          land of Mordor. Sauron needs only this
          ring to cover all the lands in the second
          darkness. He is seeking it, seeking it,
          all his thought is bent on it. For the
          ring yearns, above all else, to return to
          the hand of its master: they are one, the
          ring and the dark lord. Frodo, he must
          never find out. SUDDENLY Frodo scoops up
          the Ring.

                     FRODO
          Alright!

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

ANGLE ON: FRODO

hurriedly entering the living room.

                    FRODO
              (thinking fast)
          We put it away, we keep it hidden! We
          never speak of it again. No one know
          it's here, do they? Gandalf shifts
          uncomfortably.

                    FRODO (CONT'D)
          Do they, Gandalf?

Gandalf looks at Frodo, sadly...



                                                    


                     GANDALF
          There is one other who knew that Bilbo
          had the Ring. I looked everywhere for
          the creature Gollum, but the enemy found
          him first.

                                                        CUT TO:

INT. BARAD-DUR -- NIGHT

CLOSE ON: A teasing Glimpse of Gollum being tortured by the
Orcs. The wretched creature screams in pain.

                    GANDALF (V.O.)
          I don't know how long they tortured
          him...but amidst the endless screams and
          inane babble, they discerned two words.

                    GOLLUM
              (screaming)
          S...Shire! Baggins!

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

CLOSE ON: FRODO'S HORRIFIED FACE!

                     FRODO
          Shire!   Baggins!   That will lead them
          here!

                                                        CUT TO:

EXT. SHIRE LANE, SOUTH FARTHING -- NIGHT

IMAGE: On a dark country lane, a Hobbit bounder lifts his
watch lantern in alarm.

                      HOBBIT BOUNDER
          Halt!    Who goes there?

Out of the darkness thunder two BLACK RIDERS...A LETHAL SWORD
swings down at the small Hobbit bounder.

                                                        CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

FRODO thrusts the ring at Gandalf.

                     FRODO
          Take it!   Take it!

                                                    


                    GANDALF
          No, Frodo...

                    FRODO
          You must take it.

                    GANDALF
          You cannot offer me this ring.

                    FRODO
          I'm giving it to you!

                    GANDALF
          Don't tempt me, Frodo. I dare not take
          it, not even to keep it safe.

CLOSE ON: THE RING IN FRODO'S HAND...

                    GANDALF
          Understand, Frodo...I would use this Ring
          from a desire to do good...but through
          me, it would wield a power too great and
          terrible to imagine.

                    FRODO
          But it cannot stay in the Shire!

                    GANDALF
          No, no it can't.

CLOSE ON: THE RING IN FRODO'S CLENCHED HAND.

                    FRODO
          What must I do?

                                                       CUT TO:

INT. FRODO'S BEDROOM -- NIGHT

ANGLE ON: FRODO

throwing clothes into a knapsack...Gandalf watches him,
making plans...

                    GANDALF
          You must leave, and leave quickly. Get
          out of the Shire.

                     FRODO
          Where?   Where shall I go?

                    GANDALF
          Make for the village of Bree.

                                                   


                       FRODO
            Bree?   What about you?

                      GANDALF
            I will, be waiting for you at the Inn of
            the Prancing Pony. Frodo packs his food
            into his knapsack.

                      FRODO
            And the ring will be safe there?

                      GANDALF
            I don't know, Frodo. I don't have any
            answers. I must see the Head of my
            Order. He is both wise and powerful.
            Trust me, Frodo. He'll know what to go.

                                                          CUT TO:

INT. BAG END LIVING ROOM -- NIGHT

Frodo is preparing to leave.

                      GANDALF
            You'll have to leave the name of Baggins
            behind you...for that name is not safe
            outside the Shire. GANDALF helps FRODO
            into his coat.

                      GANDALF (CONT'D)
            Travel only by day and stay off the road.

                      FRODO
                (thinking)
            I can cut across country easily enough.

Gandalf looks at the young Hobbit, moved by his courage.

                      GANDALF
            My dear Frodo, Hobbits really are amazing
            creatures. You can learn all that there
            is to know about their ways in a month,
            and yet, after a hundred years, they can
            still surprise you.

SUDDENLY!    A SOUND from outside.

                        GANDALF (CONT'D)
            Get down!

GANDALF FREEZES... he moves quietly towards the window, eyes
wide with tension. He raises his staff above the window, and
slams it down on the intruder. THERE IS A YELP OF PAIN!

                                                      

Gandalf hauls a small figure into the room...SAM GAMGEE
sprawls across the floor! He looks up in terror as Gandalf
looms over him.

                    GANDALF (CONT'D)
              (angry)
          Confound it all! Samwise Gamgee, have
          you been eavesdropping?

                    SAM
          I ain't been dropping no eaves, sir!
          Honest. I was just cutting the grass
          under the window there, if you follow
          me...

                    GANDALF
          It's a little late for trimming the
          hedges, don't you think?

                    SAM
          I heard raised voices...

                    GANDALF
          What did you hear?   Speak!

                     SAM
              (panicked)
          Nothing important...that is, I heard a
          good deal about a ring...and a Dark Lord.
          And something about the end of the world,
          but...Please, Mr. Gandalf, sir, don't
          hurt me! Don't turn me into anything
          unnatural!

                    GANDALF
          No?

FRODO SMILES

                    GANDALF
          Perhaps not. I've thought of a better
          use for you.

                                                      CUT TO:

EXT. HOBBITON FIELDS -- PRE DAWN

Wide on: HOBBITON...shrouded in a white veil of MIST. WIDER:
To reveal Gandalf, Frodo and Sam hurrying across a ploughed
field, away from Hobbiton! Gandalf leads his Horse...Frodo
and Sam are carrying knapsacks.




                                                  


                    GANDALF (V.O.)
          Come along, Samwise...keep up...

                                                        CUT TO:

EXT. HOBBITON WOODS -- DAY

Gandalf leads Frodo and Sam under the cover of Woods.

                    GANDALF (V.O.)
          Be careful, both of you. The Enemy has
          many spies in his service, many ways of
          hearing...birds, beasts...

Gandalf takes Frodo to one side...

                    GANDALF (CONT'D)
              (low voice)
          Is it safe?

FRODO NODS...he pats his pocket.

                    GANDALF (CONT'D)
          Never put it on, for then the agents of
          the Dark Lord will be drawn to its
          power...Always remember, Frodo, the ring
          is trying to get back to its master...it
          wants to be found. Gandalf wheels his
          horse and gallops away.

                                                        CUT TO:

EXT. GREEN HILL COUNTRY -- DAY

MONTAGE: FRODO AND SAM hiking over the gentle Shire
Countryside...wading through a shallow stream...heating a
kettle over a small fire...clambering over stone walls.

                                                        CUT TO:

EXT. GREEN HILL COUNTRY -- AFTERNOON

Sam stops short...taking stock of his surroundings.    Sam
looks back from where they came.

                    SAM
          This is it.

                    FRODO
          This is what?




                                                    


                    SAM
          If I take one more step it'll be the
          farthest away from home I've ever been.

FRODO gives Sam a pat on the shoulder.

                    FRODO
          Come on, Sam.

Sam takes a deep breath and steps forward. CLOSE ON: SAM'S
brown, furry foot hits the ground.

FRODO IS SMILING.

                    FRODO
          Remember what Bilbo used to say...it's a
          dangerous business...

Frodo and Sam continue their journey.

                    BILBO (V.O.)
          ... it's a dangerous business, Frodo,
          going out your door...you step onto the
          road, and if you don't keep your feet,
          there's not knowing where you might be
          swept off to.

                                                      CUT TO:

EXT. ISENGARD VALLEY -- DAY

Gandalf is galloping along the outskirts of the ancient
forest of Fangorn. Nestled in a basin at the foot of the
distant Misty Mountains, the tall black tower of Orthanc is
clearly visible

EXT. ISENGARD VALLEY -- DAY

Gandalf gallops through the gate, into the fortress of
ISENGARD...a great ring-wall of stone, a mile from rim to
rim, encloses beautiful trees and gardens, watered by streams
that flow down from the mountains.

                    SARUMAN (V.O.)
          Smoke rises once more from the mountain
          of doom...the shadow takes shape in the
          darkness of Mordor; the hour grows
          late...and Gandalf the Grey rides to
          Isengard seeking my counsel...

The strange tower of Orthanc...hewn from a solid pillar of
black obsidian...rises up in the center of the Isengard
Circle. Gandalf arrives at the foot of the Orthanc Stairs.

                                                            35.



ANGLE ON: SARUMAN, THE WHITE WIZARD

he sweeps down the Orthanc stairs.

                    SARUMAN
          For that is why you have come, is it not,
          my old friend?

Gandalf moves quickly towards him, grimy and weary from his
long ride.

                     GANDALF
          Saruman!

                                                        CUT TO:

EXT. ISENGARD GARDENS -- DAY

Gandalf and Saruman walk slowly between the beautiful trees
of Isengard, Saruman's clean, white robe contrasts with
Gandalf's dusty grey robes.

                    SARUMAN
          Are you sure of this?

                    GANDALF
          Beyond any doubt.

                    SARUMAN
          So the ring of power has been found?

                    GANDALF
          All these long years it was in the Shire,
          under my very nose.

                    SARUMAN
          And yet you did not have the wit to see
          it! Your love of the Halfling's leaf has
          clearly slowed your mind.

                    GANDALF
          We still have time...time enough to
          counter Sauron...if we act quickly.

                     SARUMAN
          Time?   What time do you think we have?

                                                        CUT TO:

INT. ORTHANC ANTE-CHAMBER -- DAY

Saruman and Gandalf are seated in a small, cluttered room to
the side of the cavernous central chamber.

                                                    


                    SARUMAN
          Sauron has regained much of his former
          strength. He cannot yet take physical
          form...but his spirit has lost none of
          its potency. Concealed within his
          fortress, the lord of Mordor sees all.
          His gaze pierces cloud, shadow, earth,
          and flesh. You know of what I speak,
          Gandalf...a great Eye, lidless, wreathed
          in flame.

                    GANDALF
              (softly)
          The eye of Sauron.

                    SARUMAN
          He is gathering all evil to him.

                    SARUMAN (CONT'D)
          Very soon he will have summoned an army
          great enough to launch an assault upon
          Middle earth.

                    GANDALF
          You know this? How?

                    SARUMAN
          I have seen it.

Gandalf and Saruman stride through Orthanc toward a stone
plinth on which a sphere like shape is draped with a cloth...

                    GANDALF
          A palantir is a dangerous tool, Saruman.

Saruman lifts the cloth to reveal the Palantir.

                     SARUMAN
          Why?   Why should we fear to use it?

                    GANDALF
          They are not all accounted for, the lost
          seeing-stones...we do not know who else
          may be watching. Gandalf throws the cloth
          back over the Palantir.

FLASH IMAGE: A FIERY EYE!

Saruman sits upon his throne.




                                                    


                    SARUMAN
          The hour is later than you think.
          Sauron's forces are already moving...the
          Nine have left Minas Morgul.

                    GANDALF
              (shocked)
          The nine!

                    SARUMAN
          They crossed the river Isen in
          Midsummer's eve, disguised as riders in
          black.

                    GANDALF
              (alarmed)
          They have reached the Shire? Saruman
          shrugs...

                    SARUMAN
          They will find the ring...and kill the
          one who carries it.

Gandalf backs away and turns to run to the door...horrified
as the doors suddenly slam shut.

                    SARUMAN (CONT'D)
          You did not seriously think a Hobbit
          could contend with the will of Sauron?
          There are none who can.

Gandalf slowly turns to Saruman...a look of dawning horror.

                    SARUMAN (CONT'D)
          Against the power of Mordor, there can be
          no victory. We must join with him,
          Gandalf. We must join with Sauron. It
          would be wise, my friend.

                    GANDALF
              (deadly)
          Tell me, friend, when did Saruman the
          wise abandon reason for madness?

At that moment: Gandalf is suddenly blasted across the room!
He slams against the wall...pinned there by some unseen
force. With sudden effort, Gandalf wrenches himself off the
wall and swings his staff on Saruman...blasting him off his
feet! Gandalf and Saruman battle, powerful blasts throwing
them across the room. SARUMAN SCREAMS, EYES BLAZING!
Gandalf's staff is suddenly wrenched from his grasp...it
flies across the chamber into Saruman's hand! Gandalf is
flung to the floor.

                                                    


                    SARUMAN
          I gave you the chance of aiding me
          willingly, but you have elected the way
          of pain.

Gandalf is breathing hard on the floor, his eyes look into
the madness of Saruman... Commanding two staffs, Saruman
sends Gandalf into a sickening spin. Gandalf tumbles towards
the top of the chamber...as if falling in reverse. Rushing
POV: the roof of Orthanc rockets toward camera.

                                                        CUT TO:

EXT. FARMER'S FIELDS -- DAY

Wide on: Frodo and Sam walking along a country lane which
borders Farmer Maggot's Fields. Sam is looking up...Frodo has
disappeared around a corner in the lane.

                     SAM
               (panicked)
          Mr. Frodo. Mr. Frodo! Frodo turns,
          surprised as Sam comes running towards
          him.

                    SAM (CONT'D)
              (worried)
          I thought I lost you. Frodo looks at Sam
          suspiciously. Sam glances down,
          embarrassed.

                    FRODO
              (teasing)
          What are you talking about?

                    SAM
              (mumbling)
          It's just something Gandalf said...

                    FRODO
          What did he say?

                    SAM
          He said..."Don't you leave him, Samwise
          Gamgee."
              (looks at Frodo intently)
          And I don't mean to.

                    FRODO
              (laughing)
          Sam...we're still in the Shire...what
          could possibly happen?


                                                    


SUDDENLY! A figure comes crashing out of a hedgerow sending
Frodo flying. Frodo picks himself up, only to be knocked back
down again by Pippin.

                     PIPPIN
          Frodo!   Merry, it's Frodo Baggins.

                    MERRY
          Hello Frodo

Merry, Pippin, and Frodo picking themselves up... a variety
of vegetables have scattered everywhere.

                    SAM
          What's the meaning of this!

                    MERRY
          Sam, hold this...

Merry gives Sam a large cabbage.

                    SAM
              (accusing)
          You've been into Farmer Maggot's crop!

A large pitchfork can be seen racing towards them along the
Hedgerow...angry shouts from Farmer Maggot.

                    FARMER MAGGOT    (O.S.)
          Who's that in my field!     Get out of it!
          Get out of my field, you    young varmits!
          I'll show you...get out    of my corn.

Merry and Pippin hurriedly gather their booty and race
away...with Frodo and Sam on their heels.

                    MERRY
              (looking behind him)
          I don't know why he's so upset, it's only
          a couple of carrots.

                    PIPPIN
          And some cabbages...and those three bags
          of potatoes that we lifted last week.
          And then the mushrooms the week before.

                    MERRY
          Yes, Pippin, my point is, he's clearly
          over reacting.

The BAYING OF LARGE DOGS sounds!



                                                       


                    PIPPIN
          Run!

                                                      CUT TO:

EXT. WOODED ROAD -- DAY

Frodo, Sam, and Merry and Pippin tumble head over heels down
a bank, onto a dark, wooded road. CLOSE ON: A winded Pippin,
his face inches away from a large pile of Horse droppings...

                    PIPPIN
          That was close.

Frodo picks himself up and looks around quickly.

                    MERRY
              (groaning)
          Ow...I think I've broken something.

Pulls a LARGE CARROT, almost broken through in the middle,
out from his back pocket.

                    MERRY (CONT'D)
          Oh.

                    SAM
              (turning on Merry and Pippin)
          Trust a Brandybuck and a Took.

                    MERRY
          What? That was just a detour...a
          shortcut.

                    SAM
          A shortcut to what?

Pippin has spied something under the trees on the far side of
the road.

                     PIPPIN
              (excited)
          Mushrooms!

CLOSE ON: SMALL, brown mushrooms growing amongst the Loamy
undergrowth. Sam, Merry, and Pippin race toward the
mushrooms! Frodo is tense and watchful. He realizes they are
on a wooded road. Scattered leaves rise into the air Whirling
down the road as if blown by an invisible wind...

                                                             41.



SUDDENLY... THE SOUND OF HORSES HOOVES...

                      FRODO
            I think we should get off the road.

A long drawn WAIL comes down the wind, like the cry of some
evil and lonely creature.

                      FRODO (CONT'D)
                (more urgency)
            Get off the road!

Sam grabs Merry and Pippin as the Hobbits quickly scramble
down the bank, hiding under a mossy log. THE SOUND OF HOOVES
is close... A sinister MOUNTED RINGWRATH steps into
view...hooded and faceless, mounted on a huge snarling black
horse with insane eyes ! Frodo freezes in terror. The
RINGWRAITH pauses right beside their hiding place...he sits
very still with his head bowed, listening. From inside the
hood comes a sniffing noise as if he is trying to catch an
elusive scent; his head turning from side to side.

CLOSE ON: FRODO

Beads of sweat gather on his brow. The ringwraith suddenly
slides off his horse, leaning over the mossy log, peering
suspiciously into the woods.

CLOSE ON: FRODO

He is drawing the ring out of his pocket, with trembling
hands...his face fevered and sweating as if in the grip of
some terrible INTERNAL STRUGGLE. The SOUND OF SNIFFING
intensifies as the ringwraith darts his head from side to
side like a bird of party.

CLOSE ON: FRODO SQUEEZING HIS EYES SHUT...

QUICK PSYCHIC BLASTS!   AND EVIL DARK TOWER...A GREAT EYE...A

BURST OF FLAME.

ANGLE ON:   SAM LOOKING AT FRODO WITH CONCERN

                      SAM
            Frodo?

Merry desperately hurls the mushrooms across the road...the
ringwraith spins around at the sound, and darts to the far
side of the road with frightening speed. Frodo instantly
slumps...as if a PSYCHIC LINK had been broken



                                                  


                    MERRY
          What was that?

Frodo is staring, a look of shock on his face at the ring
lying in the palm of his hand.

EXT. FERRY LANE -- NIGHT

Frodo, Sam, Merry, and Pippin hurry through the
trees...slipping and sliding on the muddy ground.

                      SAM
          Anything?

                      FRODO
          Nothing.

                    PIPPIN
          What is going on?

Merry moves past pippin, toward Frodo, watching
intently...Sam keeps looking around nervously.

                    MERRY
          The Black rider was looking for
          something...or someone...Frodo?

                      SAM
          Get down!

The SILHOUETTE OF A BLACK RIDER looms against the skyline.
The Four Hobbits... sprawled on the ground, holding their
breath. The BLACK RIDER turns and departs.

                    FRODO
          I have to leave the Shire...Sam and I
          must get to Bree.

Merry looks at his friend...realizing Frodo is in deep
trouble.

                    MERRY
          Right...Buckleberry Ferry...follow me !

The Hobbits break cover. SUDDENLY, A RINGWRAITH bursts out of
the forest TOWARD THEM!

                    MERRY (CONT'D)
          There's another one!! Frodo, this way! !

The Hobbits run   THE RINGWRAITH SHRIEKS!

                                                    QUICK CUTS:

                                                    


Black horse hooves... snarling horse mouths...a fleeting
black cowl.

                    MERRY (CONT'D)
          Frodo, follow me!

                                                         CUT TO:

EXT. BUCKLEBERRY FERRY -- NIGHT

FRODO, SAM, MERRY AND PIPPIN, are running towards the wide,
placid Brandywine river...and the FERRY.

                    MERRY
          Get the ropes, Sam.

QUICK ANGLES: STOMPING HOOVES...SNARLING HORSES...

Four RINGWRAITHS are speeding through the Fog...converging on
the FERRY CROSSING. The HOBBITS stampede across the Wharf and
Tumble onto the Ferry.

                    SAM
              (screaming)
          Frodo!

Frodo races across the Wooden Wharf, followed by the
ringwraiths. He leaps into the Ferry.

CLOSE ON: HOOVES THUNDER DOWN THE WOODEN WHARF!

Sam and Merry shove off with the poles...the ferry slides out
into the river, just as the ringwraiths arrive. They pull up
on the end of the wharf... shrieking with rage! The Hobbits
cover their ears. The Ringwraiths wheel their horses towards
the north and Gallop away along the river bank, quickly
disappearing into the fog.

                    FRODO
          How far to the nearest crossing?

                    MERRY
          The brandwine bridge...twenty miles.

                                                         CUT TO:

EXT. BREE GATE -- NIGHT

                                                       ANGLE ON:

Lights of Bree...a small village of stone and half timbered
houses nestled against a low wooded hill.


                                                  

A thick hedge surrounds the village...a great gate bars the
western entrance.

                                                      CLOSE ON:

FRODO, SAM, MERRY AND PIPPIN approaching the gatehouse...wild
eyes, ragged, and out of breath.

                     FRODO
          Come on.

A SURLY GATEKEEPER glances down at them.

                    GATEKEEPER
          What do you want?

                    FRODO
          We're headed for the prancing pony.

The gatekeeper swings his lantern onto the hobbits, bathing
them in an uncomfortable yellow spotlight.

                    GATEKEEPER
          Hobbits! Four Hobbits, and what's more,
          out of the Shire by your talk. What
          business brings you to Bree?

                    FRODO
          We wish to stay at the inn...our business
          is our own. To Frodo's relief, the
          Gatekeeper unlocks the gate.

                    GATEKEEPER
          All right, young sir, I meant no offense.

The Hobbits gratefully enter Bree...the gatekeeper eyeing
them curiously in the lantern light.

                    GATEKEEPER (CONT'D)
          It's my job to ask questions after
          nightfall. There's talk of strange fold
          abroad...can't be too careful.

                                                        CUT TO:

EXT. BREE STREETS -- NIGHT

The tall BREE FOLK loom over the nervous little hobbits as
Frodo, Sam, Merry and Pippin make their way through the
Narrow Streets. Tall buildings tower above them...lights
glow dimly from behind thick curtains.




                                                 

Close on: The sign of the "PRANCING PONY INN"...Frodo, Sam,
Merry, and Pippin hurry toward it.

                                                        CUT TO:

INT. "PRANCING PONY" RECEPTION -- NIGHT

Frodo, Sam, Merry and Pippin come rushing in.   Frodo attracts
the INN KEEPERS'S attention.

                       FRODO
          Excuse me.

                     BUTTERBUR
          Good evening, little masters. If you're
          seeking accommodation, we've got some
          nice, cozy Hobbit sized rooms available,
          Mr...ah...

                    FRODO
          Underhill...my name's Underbill.

                       BUTTERBUR
          Underhill?     Hmmmm.

                    FRODO
          We're friends of Gandalf the Grey...can
          you tell him we've arrived? BUTTERBUR
          frowns...

                    BUTTERBUR
              (Puzzled)
          Gandalf...Gandalf...Oh...
              (recognition)
          Oh yes! I remember...elderly chap...big
          grey beard...pointy hat? Frodo nods with
          relief...Butterbur shakes his head.

                    BUTTERBUR (CONT'D)
          Not seen him for six months. Frodo is
          shocked.

                    SAM
              (worried whisper)
          What do we do now?

INT. PRANCING PONY INN -- NIGHT

Wide on: the noise, smokey Inn. It is dimly lit, cheifly
from a blazing log fire...and crowded with a mixture of BIG
FOLK, LOCAL HOBBITS, and a couple of dwarfs. Frodo, Sam,
Merry and Pippin are sitting at a table against the wall...
clearly trying to remain Quiet and inconspicuous... Sam can't
help himself...he keeps casting nervous glances around.

                                                    


                    FRODO
          Sam, he'll be here.    He'll come.

Merry ploinks himself down at a table, carrying a very large
mug of beer.

                    PIPPIN
          What's that?

                    MERRY
          This, my friend, is a pint.

                    PIPPIN
          It comes in pints?    I'm getting one!

Sam watches Pippin rise unsteadily to his feet and head to
the bar.

                    SAM
          You've had a whole half already. Merry
          watches Pippin go.

A COUPLE OF SWARTHY MEN leaning against the bar glance at
Frodo, then quickly look away.

                    SAM (CONT'D)
              (tense)
          That fellow's done nothing but stare at
          you since we've arrived.

Sam indicates a BROODING STRANGER who sits alone at a table
in the far corner, smoking a curiously carved long stemmed
pipe, peering from beneath a travel stained cowl with
gleaming eyes. Frodo gestures to Butterbur...

                    FRODO
          Excuse me, that man in the corner, who is
          he?

                    BUTTERBUR
          He's one of them Rangers; they're
          dangerous folk they are, wandering the
          wilds. What his right name is, I never
          heard, but round here he's known as
          Strider.

                    FRODO
              (to himself)
          Strider.

BENEATH TABLE: FRODO'S fingers are nervously TOYING WITH THE
RING.

                                                            47.



CLOSE ON: FRODO

Sweat runs down his brow.   The Strange hum of the Ring spills
into the Soundtrack.

"Baggins...Baggins..." a creepy whisper seems to fill Frodo's
head...sound that dissolves into Pippin's loud voice:

                    PIPPIN
          Baggins? Sure, I know a Baggins...he's
          over there...

ANGLE ON: PIPPIN

sitting at the bar, chatting with Locals.   Frodo leaps to his
feet and pushes his way towards the bar.

                    PIPPIN
              (loudly)
          Frodo Baggins. He's my second cousin
          once removed, on his mother's side and my
          third cousin twice removed on his
          father's side...if you follow me.

Frodo grabs Pippin's sleeve, spilling his beer.

                    FRODO
          Pippin!

                    PIPPIN
          Steady on, Frodo!

Pippin pushes Frodo away...he stumbles backwards, and falls
to the floor. At that instant, the Inn goes silent and all
the attention turns to Frodo...

                                                      CLOSE ON:

The ring...in agonizing Slow motion we watch as it seems to
hang in the air for a split second...then crashes down onto
his out stretched finger. FRODO VANISHES! There is a sharp
intake of breath...followed by total silence.

                                                        CUT TO:

EXT. BREE COUNTRYSIDE -- NIGHT

The RINGWRAITHS turn sharply in their saddles...Instantly
aware that the ring is being worn. They spur their horses
towards the distant lights of Bree.

                                                            48.



INT. "PRANCING PONY" INN -- NIGHT

Sam looks sick; Pippin instantly sobers, realizing his folly;
the brooding stranger frowns...and the inn erupts into
excited babble.

                                        IN THE TWILIGHT WORLD:

                                                      ANGLE ON:

FRODO: as he finds himself in the TWILIGHT WORLD of the ring:
THE EXCITED CROWD ARE suddenly moving in slow
motion...distorted voices...a weird photographic negative
quality. FRODO is moving in real time; against the slow
motion background. He suddenly clutches his head as he is
hit with quick images...of a GREAT EYE! AN EVIL CAT-LIKE
EYE, wreathed in flames.

VOICE OF SAURON

There is no life here in the void...only cold...only death...
FRODO is terrified! He rolls under a table, desperately
pulling the ring from his finger. FRODO MATERIALIZES into the
real world. AT THAT MOMENT: A LARGE HAND reaches under the
table and Grabs Frodo by the collar, and DRAGS HIM AWAY!

                                                        CUT TO:

INT. PRANCING PONY--CORRIDOR -- NIGHT

Frodo is roughly pushed against the wall.    The Brooding
stranger looms over him.

                    STRIDER
          You draw far too much attention to
          yourself...Mr. Underhill

                                                        CUT TO:

INT. HOBBIT'S ROOM, PRANCING PONY -- NIGHT

Frodo is pushed into the Hobbit's room by Strider.

                    FRODO
          What do you want?

                    STRIDER
          A little more caution from you...that is
          no trinket you carry.

                    FRODO
          I carry nothing.


                                                   


                    STRIDER
          Indeed? I can usually avoid being seen
          if I wish, but to disappear entirely...
          that is a rare gift.

                    FRODO
          Who are you?

                    STRIDER
          Are you frightened?

                    FRODO
          Yes.

                    STRIDER
          Not nearly frightened enough. I know
          what hunts you. Frodo jumps at the sound
          of a noise in the corridor. Strider
          deftly draws his sword.

The door bursts open and Sam, Merry and Pippin appear on the
doorway. Sam is Squaring off with is fists, Merry brandishes
a candlestick, and Pippin a chair.

                    SAM
              (angry)
          Let him go or I'll have you, Longshanks!

STRIDER SHEATHS his sword, a slight smile playing on his
lips.

                    STRIDER
          You have a stout heart, little Hobbit,
          but that alone won't save you...You can
          no longer wait for the Wizard, Frodo.
          They're coming.

                                                      CUT TO:

EXT. GATEHOUSE, BREE -- NIGHT

The gate keeper comes out of his Lodgings with a lantern...a
look of fear on his face. He approaches the closed gate with
great apprehension. CLOSE ON: The Gatekeeper peers out of his
Peephole.

CRASH!!

The gate crashed down on the gatekeeper...as four RINGWRAITHS
ride into Bree!

                                                             50.



EXT. BREE STREETS -- NIGHT

The four RINGWRAITHS fly done the empty streets, like
horsemen of the apocalypse.

INT. PRANCING PONY INN -- NIGHT

LOW ANGLE: the front door FLIES OPEN. The FOUR RINGWRAITHS
rush into the PRANCING PONY with WICKED SWORDS DRAWN. CLOSE
ON: BUTTERBUR hiding behind his bar... trembling and sweating
in TERROR.

INT. HOBBIT'S ROOM, PRANCING PONY -- NIGHT

INSERT: MERRY SNORING SOFTLY ON HIS PILLOW.

INSERT: PIPPIN stirs slightly, then settles back to sleep.
WIDE ON: the door creaks open...THE FOUR RINGWRAITHS silently
slide into the Hobbit's room. The LOOM above each bed,
raising their SHINING SWORDS ABOVE THE SLEEPING HOBBITS.
QUICK INSERT: Sam's eyes open wide. In unison, the RINGWRAITS
STAB THE HOBBITS, in a Slashing, hacking frenzy.

INT. STRIDER'S ROOM -- NIGHT

Strider is grimly listening to the sounds from his room.

INT. HOBBIT'S ROOM, PRANCING PONY -- NIGHT

Wide on: the RINGWRAITHS step back from the slashed beds in
triumph. CLOSE ON: a hacked blanket is pulled back to reveal
nothing but a shredded pillow. The RINGWRAITHS SHRIEK WITH
RAGE!! INSERTS: Sam sits up with a start! Close on: Another
shredded pillow is revealed! More Shrieks of rage. INSERT:
PIPPIN AND MERRY wake with a start.

                                                        CUT TO:

INT. STRIDER'S ROOM -- NIGHT

WIDE ON: Sam, Merry, and Pippin have been sleeping on
Strider's bed. Frodo stands next to Strider by the window,
peering out nervously as furious Ringwraith screeches echo
across the courtyard from the Hobbits room.

                    FRODO
          Where are they?

                    STRIDER
          They were once men. Strider glances
          quickly at Frodo, then looks away...



                                                 


                    STRIDER (V.O.) (CONT'D)
              (quietly)
          Great Kings of men. Then Sauron the
          deceiver gave to them Nine Rings of
          Power. Blinded by their greed they took
          them without question, one by one falling
          into darkness and now they are slaves to
          his will.

Strider looks from the window as the Ringwraiths gallop down
the Bree Streets. CLOSE ON: Strider turns back to the
Hobbits, his face lit faintly by the Glowing Embers of the
Fire.

                    STRIDER (CONT'D)
          They are the Nazgul, Ringwraiths, neither
          living or dead. At all times they feel
          the presence of the ring...drawn to the
          power of the one..they will never stop
          hunting you.

                                                        CUT TO:

EXT. CHETWOOD FOREST -- DAY

                                                      ANGLE ON:

STRIDER, MERRY, PIPPIN, AND FRODO march through a gloomy,
overgrown forest. Sam follows at the read leading "Bill", a
scrawny pony, who is laden with supplies.

                    FRODO
          Where are you taking us?

                    STRIDER
          Into the wild.

Frodo watches uneasily as Strider moves off into the cover of
the trees...

                    MERRY
              (whispered aside)
          How do, we know this Strider is a friend
          of Gandalf?

                    FRODO
          We have no choice but to trust him.

                    STRIDER
          But where is he leading us?

                                                      ANGLE ON:


                                                 


Strider stops, casts a glance back at Sam.

                    STRIDER (CONT'D)
          To Rivendell, Master Gamgee...to the
          house of Elrond.

SAM looks excited.

                    SAM
          Did you hear that, Bill? Rivendell!
          We're going to see the Elves!

Strider leads the Hobbits through the gloom of the forest.

                                                       CUT TO:

EXT. MIDGEWATER MOORS -- DAY

Aerial on: Strider leading Frodo, Sam, Merry, and Pippin
across the windswept moors. The hobbits suddenly stop and
unstrap their knapsacks.

                     STRIDER
          Gentlemen, we do not stop until
          nightfall.

                    PIPPIN
          What about breakfast?

                    STRIDER
          You've already had it.

                    PIPPIN
          We've had one, yes...but what about
          Second Breakfast?

Strider stares at Pippin blankly, then turns away, shaking
his head.

                    MERRY
          I don't think he knows about second
          breakfast, Pip.

                    PIPPIN
          What about Elvenses, Luncheon, Afternoon
          Tea, dinner...he knows about them,
          doesn't he?

                    MERRY
          I wouldn't count on it.

An apple is thrown to Merry, who deftly catches it.   Another,
aimed at Pippin, catches him on the forehead.

                                                 


                    MERRY (CONT'D)
              (exasperated)
          Pippin!

The hobbits trudge through rain, looking tired, hungry, and
miserable.

                                                        CUT TO:

INT. ORTHANC ANTE-CHAMBER -- NIGHT

Saruman stands over the Palantir, his hands cupping the
massive eye.

                    SARUMAN
              (whisper)
          The power of Isengard is at your command,
          Sauron, Lord of the Earth.

ON THE SOUNDTRACK: BLACK SPEECH FILLS THE ROOM...ADMIST THE

HARSH, GUTTURAL WORDS THE VOICE OF SARUMAN EMERGES.

                    SARUMAN
          Build me an army worth of Mordor.

INT. ORTHANC ANTE-CHAMBER -- NIGHT

Saruman is seated as his ORC OVERSEER approaches.

                    ORC OVERSEER
          What orders from Mordor, my Lord. What
          does the eye command?

                    SARUMAN
          We have work to do.

                                                        CUT TO:

INT. ISENGARD -- NIGHT

CLOSE ON: GANDALF...lying unconscious on a cold obsidian
floor. He wakes to the sound of ripping and tearing...rising
onto his knees...lifting his head... Gandalf stands as the
camera pulls back to reveal him stranded on the summit of
Orthanc. He is marooned on the tiny, flat peak, surrounded
on all sides by a sheer 500 FOOT DROP. Another whispering
wail rends the air. Gandalf crosses quickly to the edge and
peers down: POV: One of the beautiful Isengard trees is being
ripped from the ground by the ORCS. Gandalf looks on in
Horror as ORCS hack into the trunk with axes.

                                                      ANGLE ON:

                                                    


SARUMAN stands in Rain looking out into the dark night...the
ORC overseer sidles up to him, axe in hand, sweating with
exertion.

                    ORC OVERSEER
          The trees are strong, my Lord.   Their
          roots go deep.

                    SARUMAN
          Rip them all down.

CAMERA CIRCLES SUMMIT: MORE AND MORE TREES are hauled down
and killed...as Gandalf looks on in helpless despair.

                                                   DISSOLVE TO:

EXT. WEATHERHILLS -- DAY

Wide on: The rugged countryside as the hobbits journey on,
lead by Strider. Strider stops before a distant hill, topped
by an Ancient Ruin.

                    SARUMAN
          This was once the great Watchtower of
          Amon Sul. We shall rest here tonight.

                                                        CUT TO:

EXT. WEATHERTOP HOLLOW -- DUSK

                                                     ANGLE ON:

FRODO, MERRY, AND PIPPIN collapse into a small hollow,
halfway up Weathertop...they are muddy and exhausted. Stider
drops 4 small swords at the Hobbits feet.

                    SARUMAN
          There are for you. Keep them close. I'm
          going to have a look around. Stay here.

                                                        CUT TO:

EXT. WEATHERTOP HOLLOW -- NIGHT

Close on: Frodo...eyes flickering open. He suddenly sits up,
sniffing the air. Sam, Merry, and Pippin huddled over a small
fire... Sausages and bacon sizzle in a hot frying pan.

                    FRODO
          What are you doing?

                    MERRY
          Tomatoes, sausages, and crispy bacon.

                                                   


                    SAM
          We saved some for you, Mr. Frodo.

                    FRODO
          Put it out, you fools! Put it out! Frodo
          desperately kicks dirt on the fire!

                    PIPPIN
          Oh, that's nice...ash on my tomatoes!

A SUDDEN SHREIK!

                                                       ANGLE ON:

FIVE RINGWRAITHS ON FOOT, running up the steep slope
unnaturally fast.

                    FRODO
          Go! !

Frodo, Sam, Merry and Pippin clamber desperately towards the
summit, clutching their swords.

                                                         CUT TO:

EXT. WEATHERTOP SUMMIT -- NIGHT

Frodo, Sam, Merry, and Pippin race into a RING OF BROKEN
STONES on the summit or Weathertop...the ruined base of an
ancient tower. The hobbits stand back-to-back in the centre
of the Ring, waiting for the first assault... One by one, the
5 Ringwraiths appear...brandishing Gleaming swords, they move
slowly towards the hobbits. In the center is their
leader...the WITCH KING!

                    SAM
          Back, you devils!

Sam rushes forward with a cry. He swings his sword at the
Witch King, who blocks the blow with his own sword. Sam's
blade shatters...the WITCH KING lashes out with his fist,
sending Sam flying. Merry and Pippin, overcome with terror,
throw themselves flat on the ground. THE RINGWRAITHS close in
on Frodo...a Venomous whisper dances in his head...

Frodo shuts his eyes and staggers back, desperately resisting
the WRAITH'S WHISPERINGS... slow motion as his hand goes into
his pocket and pulls out the ring. The 5 Ringwraiths utter a
chilling SCREECH OF EXCITEMENT. Frodo is unable to resist any
longer, falls to his knees and slips on the ring. He
disappears.



                                                  


                    SAM (CONT'D)
          No!

                                       IN THE TWILIGHT WORLD:

                                                     ANGLE ON:

Frodo finds himself in the weird twilight world...he looks
upon the Ringwraiths, now visible in their TRUE APPEARANCE:
Five Ghouls dressed in long Grey robes, with white hair, and
Pallid, ruthless faces. THE WITCH KING extends a haggard hand
towards Frodo, reaching for the ring on his finger. Frodo's
trembling hand extends forward as if by the pull of the
ring...he slides to the ground, unable to pull his hand away.
The witch king snarls and springs forward. He stabs at Frodo
with a wicked dagger! Frodo winces as the tip of the dagger
sinks into his shoulder. Suddenly, Strider charges at the
RINGWRAITHS, wielding his sword in one hand, a flaming torch
in the other. He moves in slow motion, visible through a sea
of mist. Frodo sinks to the ground. Behind him is a faint
image of a Ringwraith fleeing, his head engulfed in flames.
With draining strength, Frodo manages to pull the ring off
his finger...

                                           IN THE REAL WORLD:

...Appearing back in the real world, Sam rushes over to him.

                    SAM (CONT'D)
              (horrified)
          Frodo!

Another Ringwraith is burning and screaming...others screech
fearfully at the flames, turn and flee form the Weathertop
summit.

                    SAM (CONT'D)
              (panicked)
          Mr. Frodo!!

Strider kneels before Frodo. He snatches up the Witch King's
Dagger from the ground, staring gravely at the long, thin,
blade.

                    SAM (CONT'D)
          Help him, Strider!

                     STRIDER
              (grim)
          He's been stabbed by a Morgul blade. The
          Morgul Blade suddenly melts...vanishing
          into the air like smoke. Strider throws
          the hilt down in disgust...

                                                 


                    SAM
          Do something.

                    STRIDER
          This is beyond my skill to heal.
              (urgently)
          He needs Elvish medicine. Strider lifts
          Frodo onto his shoulders.

EXT. WEATHERHILLS -- NIGHT

Strider is jogging grimly, carrying an ailing Frodo on his
back. Sam, Merry, and Pippin are running to keep up. The
hobbits are carrying Flaming torches for protection.

                    STRIDER
          Hurry!

                    SAM
          We are six days from Rivendell. Frodo
          groans.

                    STRIDER
          Hold on, Frodo.

                     SAM
          He'll never make it! Close on:
          Frodo...head lolling about, barely
          conscious.

                    FRODO
              (fevered calling)
          Gandalf...Gandalf?

EXT. ISENGARD -- NIGHT

Low angle...looking up at ORTHANC...the tower of Isengard,
gleaming in the moonlight. The camera rises to reveal the
once beautiful gardens are not a pitted wasteland...with
smoke and fire billowing out

of numerous tunnels and vent holes that litter the forecourt
of ORTHANC. Strange guttural chants echo up from deep
underground. The camera is rising...a small moth flutters
into shot...and leads the camera towards the summit or
Orthanc. Gandalf lies slumped against the wall at the very
top of Orthanc, surrounded by a sheer 500 foot drop. He
looks Weak and Frail...and is seemingly asleep. The MOTH
flutters close to Gandalf. His hand suddenly moves at
lighting speed and SNATCHES THE MOTH. Gandalf brings his hand
close to his face and opens it. The moth sits on the palm of
his hand as Gandalf mutter strange words in a foreign tongue.
Close on: THE MOTH'S face... seemingly listening.

                                                    

It suddenly flutters away. CAMERA FOLLOWS the moth off the
Orthanc summit, but drops past the moth...falling down, down,
towards the pitted wasteland, straight into a fiery red
tunnel!

INT. CAVERNS BELOW ISENGARD -- NIGHT

The dead trees of Isengard are fed into roaring
furnaces...molten metal pours into casts...red hot metal,
beaten my sweating orc blacksmiths...armor and weapons are
forged from the great furnaces. Saruman strides among the
ORCS and stands looking on a new born uruk-hai as it escapes
its birthing membrane...this is LURTZ, who rises up to stand
before his master.

                                                         CUT TO:

EXT. TROLLSHAW FOREST CLEARING -- NIGHT

Close on: Frodo...his eyes flicker open...clouded, red-
rimmed...his brow, beaded with sweat.

                    PIPPIN
          Is he going to die? Frodo's breathing is
          getting shallow. Strider looks out into
          the darkness.

                    STRIDER
          No. He is passing into the shadow world,
          he will soon become a wraith like them.

A DISTANT CRY of a RINGWRAITH carries through the air.

                    MERRY
              (nervous)
          They're close.

Frodo gasps in sudden pain.

                    STRIDER
              (thinking hard)
          Sam, do you know the Athelas plant? Sam
          looks blank.

                       SAM
          Athelas?

                       STRIDER
          Kingsfoil.

                       SAM
          Kingsfoil.     Aye.    It's a weed.



                                                    


                      STRIDER
            It may help to slow the poison. Hurry!

                                                        CUT TO:

EXT. TROLLSHAW FOREST -- NIGHT

Sam and Strider desperately search the dark forest floor for
the Athelas plant. Close on: A small, white flowered plant!
Strider drops to one knee, carefully pulling it from the
ground.

SUDDENLY!    STRIDER FREEZES AS A SWORD BLADE TOUCHES HIS NECK.

                      ARWEN (O.S.)
            What is this? A Ranger caught off his
            guard?

Strider slowly looks up.

                                                        CUT TO:

EXT. TROLLSHAW FOREST CLEARING -- NIGHT

Frodo is breathing hard, desperately ill. Frodo's half-
conscious POV: Surreal impression...a SHIMMERING FIGURE IN
WHITE leaps off a horse.

FLASH INSERT: An ethereal vision of ARWEN, as she appears on
the other side...

                      ARWEN
                (ELVISH: with sub titles)
            Frodo, Im Arwen...telin let thaed. I am
            Arwen, I have come here to help you.
                (urgent)
            Lasto Beth nin, tolo Dan na ngalad. Hear
            my voice, come back to the light. Frodo's
            eyes close.

                      PIPPIN
            Who is she?

                      ARWEN
                (worried)
            Frodo?

                      SAM
            She's an elf.

                                                            60.



ANGLE ON: ARWEN

Who now appears in her earth bound form, a young Elven woman
with tousled hair, dressed in mud-splattered riding clothes.

                    ARWEN
          He's fading...he's not gong to last. We
          must get him to my father. Strider
          quickly lifts Frodo...placing him on the
          horse.

                    ARWEN (CONT'D)
          I have been looking for you for two days.

                    PIPPIN
          Where are you taking him?

                    ARWEN
          There are five Wraiths behind you, where
          the other four are, I do not know.

                    STRIDER
              (ELVISH: with subtitles)
          Dartho guin Berian...rych le ad
          tolthathon. Stay with the hobbits...I'11
          send horses for you. Close on: Arwen
          grabbing the Reins of the horse.

                    ARWEN
              (ELVISH: w/subtitles)
          Hon mabathon. Rochoh ellint im. I'll
          take him. I'm the faster rider. Strider
          clamps his hand over Arwen's.

                    STRIDER
              (elvish:subtitles)
          Andelu I ven. The road is too dangerous.

                    ARWEN
              (Elvish: subtitles)
          Frodo Fir. Ae anthradon I hir, tur
          gwaith nin beriatha hon. If I can cross
          the river, the power of my people can
          protect him.

                    PIPPIN
          What are they saying?

CLOSE ON: Arwen reaches for Strider's hand...looking deep
into his eyes.

                    ARWEN
          I do not fear them.

                                                 


CLOSE ON: Strider...we see that it is hard for him to let her
go.

                                                     ANGLE ON:

Arwen mounts her horse, ALSFORTH...

                    STRIDER
          Arwen...ride hard, don't look back.

                                                     ANGLE ON:

Arwen looks down at Strider as she supports Frodo with one
hand.

                    ARWEN
              (elvish)
          Noro Lim, Asfaloth, Noro Lim!

                    SAM
          What are you doing!    Those Wraiths are
          still out there!

                                                     ANGLE ON:

Asfaloth springs away, bearing Arwen and Frodo into the
night.

                                                       CUT TO:

EXT. TROLLSHAW FOREST -- NIGHT

SPEEDING POV: through the forest from the back of the White
Horse.

ANGLE ON: FRODO, BOUNCING IN THE SADDLE,

he lifts his head weakly. SURREAL SLOW MOTION POV: THE HORSES
HEAD BOBBING...trees sliding by...moonlight flickers through
the trees.

                                                       CUT TO:

EXT. AERIAL OF ETTENMOORS ~ MORNING

AERIAL: of Arwen's white horse emerging from the trees...and
galloping across the open land as the sun rises.

                                                       CUT TO:

                                                             62.



EXT. PINE FOREST -- DAY

The white horse charges through a Pine Forest. Suddenly 2
Galloping Ringwraiths emerge from the trees behind! 2 more
Ringwraiths slide in from different directions to join the
chase. Arwen grits her teeth...urges the white horse to
greater speed.

                                                      CUT TO:

EXT. THE EAST ROAD -- DAY

The white horse speeds out of the pine trees...the 4
ringwraiths close behind PAN ONTO: 2 more ringwraiths
galloping down the hillside! AERIAL SHOT: 3 MORE RINGWRAITHS
enter frame from different directions...a total of 9
RINGWRAITHS now pursuing Frodo and Arwen! CLOSE ON: Panting
head of the WHITE ELVEN HORSE.

                    ARWEN
          Noro lim, Asfaloth!

                                                      CUT TO:

EXT. FORD OF BRUINEN -- DAY

CRANE DOWN: As the White Horse races towards Camera, to
Reveal the wide river Bruinen in the foreground.

Without hesitation, the white horse leaps into the shallow
water and thunders across the Ford. The 9 Ringwraiths pull up
short of the Ford, clearly nervous of the water. The white
horse reaches the other side...Arwen pulls up and turns to
defiantly face the Ringwraiths from across the Ford.

                    WITCH KING
          Give up the Halfling, she-elf! She draws
          her sword and yells at the Witch King.

                    ARWEN
              (yelling)
          If you want him, come and claim him.

THE WITCH KING SCREECHES ANGRILY, draws his sword, and leads
the Ringwraiths across the Ford. The water starts flowing
faster...a distant rumble can be heard. Arwen waits until
they are halfway across: she suddenly stands in the saddle
arms raised!

                    ARWEN (CONT'D)
              (Elvish)
          Non o Chithaeglir, lasto Beth daer: Rimmo
          nin Briunen Dan in Ulaer!
                    (MORE)
                                                  
                    ARWEN (CONT'D)
          Nin o Chitaeglir, lasto Beth daer: Rimmo
          nin Bruinen Dan in Ulaer!

THE GROUND SUDDENLY TREMBLES...A MIGHTY ROAR FILLS THE AIR!

Frodo looks up weakly...to see a vast torrent of Water
flooding down the river towards the ford...as if a dam had
burst! The Foaming water seems to form the shape of Dancing
white horses with frothing manes! The Ringwraiths scream in
terror as they are swallowed up in the deluge. Their Piercing
cries are drowned in the roaring of the river as it carries
them away! CLOSE ON: FRODO as he loses consciousness...

                    ARWEN
              (upset)
          No, no...Frodo, no!     Frodo, don't give
          in...not now!

Arwen gathers the small Hobbit in her arms, feeling his life
slip away.

INT. FRODO'S DELIRIUM -- DAY

DELIRIOUS IMAGES AND SOUNDS....

                    ARWEN (V.O.)
          What grace is given me, let it pass to
          him. Let him be spared. Save him.

IMAGE: A BRIGHT LIGHT suddenly flares...Frodo squeezes his
eyes shut, gasping.

                    FRODO
              (frightened)
          Where am I?

A FAMILIAR VOICE cuts through the swirl of sound.

                    GANDALF (O.S.)
          You are in the House of Elrond, and it is
          ten o'clock in the morning on October the
          twenty-fourth, if you want to know.

INT. FRODO'S BEDROOM -- DAY

Frodo's eyes flicker Open He is lying in bed next to an Open
Window...Dappled sunlight plays on richly carved
timbers...the sound of a nearby waterfall drifts through the
Vista of Fir Trees.

                    FRODO
              (weak relief)
          Gandalf!

                                                           64.



ANGLE ON: GANDALF IS SITTING NEXT TO FRODO'S BED...

softly puffing on his pipe.    He smiles at Frodo.

                    GANDALF
          Yes, I'm here and you're lucky to be
          here, too. A few more hours and you
          would have been beyond our aid. You have
          some strength in you, my dear Hobbit.

Frodo sits up, looking at Gandalf questioningly...

                    FRODO
          What happened, Gandalf?    Why didn't you
          meet us?

                    GANDALF
          I'm sorry Frodo.

Close on: Gandalf... troubled.   His eyes drift away.

                    GANDALF (CONT'D)
          I was delayed.

                                                        CUT TO:

EXT. ORTHANC SUMMIT -- NIGHT

SARUMAN stands over Gandalf, gloating...

                    SARUMAN
          Get up! So much for the power of the
          Ring or embrace your own destruction!

With the power of his staff, Saruman raises Gandalf from the
ground, then sends him crashing to the floor.

                    GANDALF
          There is only one Lord of the Ring. Only
          one who can bend it to his will...and he
          does not share power.

SUDDENLY! GANDALF lurches to his feet and Throws himself off
the Tower! Saruman watches Gandalf fly away from
Isengard...on the Back of a GIANT EAGLE.

                    SARUMAN
              (chilling)
          So you have chosen death!

                                                        CUT TO:

                                                           65.



EXT. SKIES OVER MOUNTAINS--DAWN

Gwaihir the Eagle soars majestically over the mountains,
carrying Gandalf towards the dawn.

                                                        CUT TO:

INT. FRODO'S BEDROOM--RIVENDELL

Frodo raises himself up and looks at Gandalf.

                    FRODO
          Gandalf! What is it? Gandalf returns his
          attention to Frodo.

                    GANDALF
          Nothing, Frodo...

Sam runs to Frodo's bedside.   He is overjoyed to find Frodo
awake.

                     SAM
          Frodo!   Frodo!   Bless you, you're awake!!

                    GANDALF
          Sam has hardly left your side.

                    SAM
          We were worried about you--weren't we,
          Mr. Gandalf?

                    GANDALF
          By the skills of Lord Elrond, you're
          beginning to mend. ELROND, LORD OF THE
          HIGH ELVES, steps up to Frodo's

bedside...his face is neither old nor young, though in it is
written the memory of many things both glad and sorrowful.

                    ELROND
          Welcome to Rivendell, Frodo Baggins.
          Frodo sits up, looking at Elrond with
          awe.

                                                        CUT TO:

EXT. RIVENDELL VALLEY -- DAY

WIDE ON: RIVENDELL... a small cluster of elegant Elven
Buildings sitting in a Shangri-la like Valley below towering
cliffs and snow capped mountains.



                                                   


                    ELROND (V.O.)
          You have found your way to the last
          homely house east of the sea. The elves
          of Imladris have dwelt within this valley
          for three thousand years through few of
          my kin now remain. Frodo looks out from
          his balcony.

                                                        CUT TO:

EXT. RIVENDELL GARDENS -- DAY

Frodo and Sam walk together. Suddenly, the voices of Merry
and Pippin can be heard as they bound up to Frodo and throw
their arms around him.

                     MERRY
          Frodo!   Frodo!

Sam looks past Frodo smiling... a bent figure sits alone on a
bench, in the Sun. Close on: Frodo turning, following Sam's
gaze...

                     FRODO
          Bilbo!

                                                        CUT TO:

EXT. RIVENDELL TERRACE -- DAY

Close on: BILBO BAGGINS! He breaks in to a broad grin as
Frodo rushes forward to embrace him. Bilbo has aged
significantly since we last saw him.

                    BILBO
          Hello, Frodo, my lad!

                     FRODO
          Bilbo!

LATER... Frodo is turning the neatly inscribed title page of
a red leather bound journal:

                    FRODO (CONT'D)
              (reading)
          "There and back again: A Hobbit's tale"
          by Bilbo Baggins.

Bilbo smiles Proudly. He is sitting with Frodo on a terrace
overlooking a Waterfall. Frodo looks at Page after page of
beautiful Handwriting, with intricate Maps and Drawings.



                                                    


                    FRODO (CONT'D)
          This is wonderful.

                    BILBO
          I meant to go back...wander the paths of
          Mirkwood, visit Laketown, see the Lonely
          Mountain again...but age, it seems, has
          finally caught up with me.

Frodo turns a page...there before him, is a map of the Shire.

                    FRODO
              (quietly)
          I miss the Shire...I spent all my
          childhood pretending I was off somewhere
          else...off with you, on one of your
          adventures...
              (Looks at Bilbo)
          But my own adventure, turned out to be
          quite different...I'm not like you,
          Bilbo.

                    BILBO
          My dear boy...

                                                        CUT TO:

EXT. RIVENDELL TERRACE -- EVENING

Sam busily tries to stuff more and more things into his
already full pack...pots and pans, blankets, cooking
utensils, provisions, clothes.

                    SAM
          No, what have I forgotten? Pull back to
          reveal Frodo, hands in his pocket,
          watching Sam.

                    FRODO
          Packed already?

Sam looks up, startled.

                    SAM
              (slightly embarrassed)
          No harm in being prepared. Frodo strolls
          to the edge of the Balcony.

                    FRODO
          I thought you wanted to see the Elves,
          Sam?



                                                    


                    SAM
          I do...

                    FRODO
          More than anything.

                    SAM
          I did. It's just...we did what Gandalf
          wanted, didn't we? We got the Ring this
          far, to Rivendell...and I thought...
          seeing as how you're on the mend, we'd be
          off soon. Off home.

                    FRODO
          You're right, Sam. Frodo looks at Sam...

                    FRODO (CONT'D)
          ...we did what we set out to do. Frodo
          opens his hand, the Ring sits in his
          Palm.

                    FRODO (CONT'D)
          The ring will be safe in Rivendell. I am
          ready to go home.

                                                       CUT TO:

EXT. ELROND'S CHAMBER, RIVENDELL -- DAY

Gandalf and Elrond watch Frodo and Sam from Elrond's balcony,

                    ELROND
          His strength returns.

                    GANDALF
          That wound will never fully heal. He will
          carry it the rest of his life.

                    ELROND
          And yet to have come so far still bearing
          the Ring...the hobbit has shown
          extraordinary resilience to its evil.

                    GANDALF
          It is a burden he should never have to
          had to bear. We can ask no more of Frodo.

                    ELROND
          Gandalf, the enemy is moving. Sauron's
          forces are massing in the east. His eye
          is fixed on Rivendell. And Saruman, you
          tell me, has betrayed us. Our list of
          allies grows thin.

                                                   


                    GANDALF
          His treachery runs deeper than you know.
          By foul craft, Saruman has crossed Orc
          with Goblin Men...he is breeding an army
          in the caverns of Isengard. An army that
          can move in Sunlight and cover great
          distance at speed. Saruman is coming for
          the Ring.

Elrond turns and walks away...

                    ELROND
          This evil cannot be concealed by the
          power of the Elves...We do not have the
          strength to fight both Mordor and
          Isengard...Gandalf...the ring cannot stay
          here.

Gandalf turns and looks out the window.

Sounds of arrivals...Gandalf watches as Boromir rides through
Rivendell gate, followed by Legolas and Gimli.

                    ELROND (V.O.) (CONT'D)
          This peril belongs to all Middle earth.
          They must decide how to end it. Not just
          for themselves but for those who come
          after. Elrond approaches Gandalf.

                    ELROND (CONT'D)
          The time of the Elves is over. My people
          are leaving these shores. Who will you
          look to when we have gone? The dwarves?
          They hide in their mountains seeking
          riches. They care nothing for the
          troubles of others.

                    GANDALF
          It is in Men that we must place our hope.

                    ELROND
          Men? Men are weak.      The race of Men is
          failing. The blood     of Numenor is all but
          spent, its pride and    dignity forgotten.
          It is because of men    the Ring survives.

FLASH INSERT: With the broken sword, Isildur slices off
Sauron's finger. Elrond reacts.

                    ELROND (V.O.) (CONT'D)
          I was there, Gandalf...I was there three
          thousand years ago when Isildur took the
          ring.

                                                               70.



FLASH INSERT: ISILDUR PICKS UP THE RING AND STARES AT IT,

ENTRANCED.

                       ELROND
             I was there the day the strength of Men
             failed.

                                                           CUT TO:

INT. CRACK OF DOOM -- DAY

                       ELROND
             Isildur...hurry...follow me! IMAGES:
             ELROND leads Isildur into the steaming
             volcano.

                       ELROND (V.O.) (CONT'D)
             I let Isildur into the heart of Mount
             Doom, where the ring was forged: the one
             place it could be destroyed.

FLASH INSERT: ELROND AND ISILDUR STAND BEFORE THE FIRES OF

MT. DOOM.

                       ELROND
             Cast it into the fire...destroy it!

CLOSE ON: ISILDUR...CAPTIVATED BY THE RING.

                         ISILDUR
             No.

Isildur turns and walks away

                         ELROND
             Isildur!!

INT. ENROND'S CHAMBER, RIVERDELL -- DAY

Elrond turns to Gandalf.

                       ELROND
             It should have ended that day, but evil
             was allowed to endure. Isildur kept the
             Ring...and the line of Kings was broken.
             There's no strength left in the world of
             Men. They're scattered, divided,
             leaderless.




                                                       


                    GANDALF
          There is one who could unite them, one
          who could re claim the thrown of Gondor.

                    ELROND
          He turned from that path a long time ago.
          He has chosen exile.

                                                       CUT TO:

INT. ELROND'S CHAMBER, RIVENDELL -- NIGHT

Strider watches from the shadows...as Boromir strolls through
the darkened gallery. Boromir's eyes are drawn to an old
Fresco on the wall...depicting Isildur defeating Sauron.
Boromir looks with Wonderment at Narsil, the Broken Blade of
Elendil, which lies on a cloth-covered plinth.

                    BOROMIR
              (quiet awe)
          The shards of Narsil...the blade that cut
          the Ring from Sauron's hand. Boromir
          picks up the sword and gently touches the
          Blade. Close on: a small bloom of blood
          appears on Boromir's finger...

                    BOROMIR (CONT'D)
          Still sharp.

Boromir senses Strider's presence...he looks from the blade
to Strider, as if sensing a connection.

                    BOROMIR (CONT'D)
          But no more than a broken heirloom.

                    BOROMIR (CONT'D)
          replaces the Broken blade, but it
          clatters to the floor. Boromir walks
          away, leaving Strider sitting alone.

Close on: Strider picks up the broken hilt, as Arwen appears
behind him.

                    ARWEN
          Why do you fear the past? You are
          Isildur's heir...not Isildur himself. You
          are not bound to his fate.

                    STRIDER
          The same blood flows in my veins...the
          same weakness...



                                                   


                    ARWEN
          Your time will come. You will face the
          same evil...and you will defeat it.
              (Elvish: w/subtitles)
          A si i-duath u-orthor, Aragorn...u or le
          a u or nin. The shadow does not hold
          sway yet...not over you and not over me.

                                                       CUT TO:

EXT. RIVENDELL VALLEY -- NIGHT

Night falls upon the beautiful valley of Rivendell... still
and quiet.

EXT. RIVENDELL WATERFALL -- NIGHT

Strider and Arwen stand upon a stone bridge...the Evenstar at
Arwen's breast shines in the moonlight.

                    ARWEN
              (Elvish: with subtitles)
          Renech I lu I erui govannem?   Do you
          remember when we first met?

                    STRIDER
              (Elvish: with subtitles)
          Nauthannim I ned ol reniannen.   I thought
          I had strayed into a dream.

Arwen reaches up and gently touches the Grey at Strider's
temples.

                    ARWEN
              (Elvish: with subtitles)
          Gwenin in enniath...u-arnech in naeth I
          se celich. Long years have passed...you
          did not have the care you carry now.

Arwen looks into Strider's eyes.

                    ARWEN (CONT'D)
              (Elvish: with subtitles)
          Renech I Beth I pennen? Do you remember
          what I told you? Arwen reaches for
          Strider's hand...

                    STRIDER
              (quietly)
          You said you'd bind yourself to me,
          forsaking the immortal life of your
          people.


                                                  


                    ARWEN
              (whisper)
          And to that I hold. I would rather share
          one lifetime with you than face all the
          ages of this world alone. Strider looks
          down. In his hand lies the Evenstar.

                    ARWEN (CONT'D)
          I choose a mortal live.

                    STRIDER
          You cannot give me this.

                    ARWEN
          It is mine to give to whom I will, like
          my heart.

Arwen closes Strider's fingers around the jewel.

Arwen leans towards Strider, gently kissing him.

                                                        CUT TO:

INT. COUNCIL CHAMBER, RIVENDELL -- DAY

Elrond addresses the council...

                    ELROND
          Strangers from distant lands ... friends
          of old. You have been summoned here to
          answer the threat of Mordor. Middle-earth
          stands upon the brink of destruction.
          None can escape it. You will unite...or
          you will fall. Each race is bound to this
          fate...this one doom...

Frodo sits amongst a council of free-peoples of Middle earth,
Elrond stands before them, addressing Gandalf, Strider,
Legolas, and 20 other elves, Dwarves, and men.

                    ELROND (CONT'D)
          Bring forth the ring, Frodo.

Frodo steps forward and moves towards a stone Plinth. He
places the ring on the plinth and returns to his seat.

                    BOROMIR
              (shocked)
          So it is true!

                    LEGOLAS
              (disbelief)
          Sauron's Ring! The ring of power!

                                                    


                     GIMLI
              (grim)
          The doom of man!

                    BOROMIR
          It is a gift...a gift to the foes of
          Mordor! Why not use this Ring? Long has
          my father, the Steward of Gondor, held
          the forces of Mordor at bay...by the
          blood of our people are your lands kept
          safe. Give Gondor the weapon of the
          enemy...let us use it against him!

                    STRIDER
          You cannot wield it. None of us can.
          The one ring answers to Sauron alone...it
          has no other master. Boromir turns and
          looks at Strider, coolly.

                    BOROMIR
          And what would a ranger know of this
          matter?

Strider says nothing and Boromir turns away dismissively.
LEGOLAS stands...

                    LEGOLAS
          This is no mere Ranger. He is Aragorn,
          son of Arathorn. You owe him your
          allegiance.

Frodo looks at Strider questioningly...Boromir turns sharply.

                    BOROMIR
              (quiet disbelief)
          Aragorn? This is Isildur's heir?

                    LEGOLAS
          And heir to the throne of Gondor.

                    ARAGORN
              (Elvish: with subtitles)
          Havo dad, Legolas...Sit down, Legolas..

                    BOROMIR
          Gondor needs no king.

                    GANDALF
          Aragorn is right...we cannot use it.

                    ELROND
          You have only one choice..the ring must
          be destroyed.

                                                    


The HUM OF THE RING seems to grow louder in Frodo's ears.
Gimli suddenly stands, excited.

                    GIMLI
          Then...what are we waiting for?

Gimli suddenly rushes forward! He swings his axe down on the
ring. The axe shatters with a deafening crack! Gimli falls
backwards, staring in disbelief at the ring...unharmed! Frodo
winces as an angry image of the fiery eye hits him! He slumps
in this chair, clutching his forehead. Gandalf looks at him
with concern.

                    ELROND
          The ring cannot be destroyed, Gimli, son
          of Gloin, by any craft that we

                    ELROND (CONT'D)
          here possess. The ring was made in the
          fires of Mount Doom...only there can it
          be unmade. It must be taken deep into
          Mordor, and cast back into the fiery
          chasm from whence it came. One of you
          must do this.

Stunned silence...the council sits with downcast eyes, as if
a great dread has descended on them. Boromir addresses the
council in a quiet voice

                    BOROMIR
          One does not simply walk into Mordor. Its
          black gates are guarded by more than just
          Orcs. There is evil there that does not
          sleep and the Great Eye is ever watchful.
          It is a barren wasteland, riddled with
          fire and ash and dust...the very air you
          breathe is a poisonous fume. Not with
          ten thousand men could you do this. It
          is folly.

                    LEGOLAS
          Have you heard nothing Lord Elrond has
          said? The ring must be destroyed.

                    GIMLI
          And I suppose you think you're the one to
          do it?

                    BOROMIR
          And if we fail, what then? What happens
          when Sauron takes back what is his?

Gimli leaps to his feet!

                                                    


                    GIMLI
          I will be dead before I see the Ring in
          the hands of an Elf! A STORM OF ARGUMENT
          erupts around the room. CLOSE ON:
          FRODO...sound disappears as he watches in
          slow

motion...the angry faces, the shaking fists, the accusatory
fingers, his eyes move across to the ring...the hum grows
louder in his head.

                    GIMLI (CONT'D)
              (shouting)
          Never trust an Elf!

CLOSE ON: THE RING fills the screen...streams of blood flow
across the surface... flames flicker within the Gold Band.

                    GANDALF
          Do you not understand? While we    bicker
          among ourselves, Sauron's power   grows!
          No one will escape it. You will   all be
          destroyed, your homes burnt and   your
          families put to the sword!

CLOSE ON: FRODO...breathing rapidly, Caught in the grip of
his hideous vision. With a huge effort or will, Frodo tears
his gaze upon the ring. Frodo suddenly stands...he speaks in
a strong, clear voice.

                    FRODO
          I will take it...I will take it...I will
          take the Ring to Mordor.

Sudden silence...Frodo looks around the room at the astounded
faces.

                    FRODO (CONT'D)
              (quietly)
          Though...I do not know the way. Gandalf
          rises to his feet.

                    GANDALF
          I will help you bear this burden, Frodo
          Baggins, as long as it is yours to bear.

                    ARAGORN
          If, by my life or death, I can protect
          you, I will.
              (kneels before Frodo)
          ...you have my sword. Aragorn steps
          forward...followed by Legolas and Gimli.


                                                      


                    LEGOLAS
          And you have my bow.

                    GIMLI
          And my axe.

Boromir looks at them all then walks towards Frodo.

                    BOROMIR
          You carry the fate of us all, little one.

Boromir looks towards Elrond and Gandalf.

                    BOROMIR (CONT'D)
          If this is indeed the will of the
          Council, then Gondor will see it done.

Frodo stares in wonder as the Greatest Fighters in all Middle
earth stand at his side.

                    SAM
              (unseen)
          Here!

A Sudden Noise...Sam pops up from behind a Bush!

                    SAM (CONT'D)
          Mr. Frodo's not gong anywhere without me.

                    ELROND
          No, Indeed...it is hardly possible to
          separate you...even when he is summoned
          to a secret council and you are not.

Merry and Pippin jump up from behind another bush!

                    MERRY
          Oi! We're coming too! You'll have to
          send us home tied up in a sack to stop
          us.

                    PIPPIN
          Anyway...you need people of intelligence
          on this sort of
          mission...quest...thing...

                    MERRY
          Well, that rules you out, Pip.

                                                             78.



ELROND SURVEYS THE GROUP

                    ELROND
              (thoughtfully)
          Nine companions ... so be it.
              (announcing)
          You shall be the "Fellowship of the ring"

                     PIPPIN
          Great.   Where are we going?

                                                       CUT TO:

INT. FRODO'S BEDROOM, RIVERDELL---DAWN

Close on: An old sword sliding out of a shabby leather
Scabbard...its polished, well tendered Blade glitters cold
and bright.

                    BILBO
          My old sword "Sting"...here, take it!

Bilbo offers Sting to Frodo.

                    FRODO
          It's so light!

                    BILBO
          Yes, yes, made by the Elves, you know.
          The blade glows blue when Orcs are
          close...and it's times like that, my lad,
          when you have to be extra careful.

Bilbo unwraps a small shirt of close woven Mail.

                    BILBO (CONT'D)
          Here's a pretty thing. Mithril, as light
          as a feather, and as hard as dragon
          scales. Let me see you put it on. Come
          on.

CLOSE ON: Frodo peels off his shirt... revealing The Ring on
the Chain around his neck.

                    BILBO (CONT'D)
              (entranced)
          Oh! My old Ring... Frodo frowns as Bilbo
          moves toward him.

                    BILBO (CONT'D)
          I should very much like to hold it again,
          one last time. Bilbo reaches forward,
          eyes locked on the ring.

                                                   


Suddenly! A shadow passes across Bilbo...for a split second
he becomes a wrinkled creature with a hungry face and Bony,
groping hands. Frodo pulls away, shocked...the shadow passes.
Bilbo slumps into a chair, his head in his hands. Bilbo
falters...his eyes filling with tears.

                    BILBO (CONT'D)
          Oh!

                    BILBO (CONT'D)
              (sad)
          I'm sorry, that I brought this upon you,
          my boy...I'm sorry that you must carry
          this burden. I'm sorry for everything.

Bilbo sobs and Frodo moves to comfort him.

                                                        CUT TO:

EXT. RIVENDELL VALLEY -- MORNING

                                                      ANGLE ON:

The Fellowship climb the long steep path out of the cloven
vale of Rivendell.

                                                        CUT TO:

EXT. ROUGH COUNTRY, SOUTH OF RIVENDELL -- DAY

                                                      ANGLE ON:

The fellowship trekking through a land of Deep Valleys and
turbulent waters...the misty mountains rise sharply to their
left.

                    GANDALF (V.O.)
          We must hold to his course west of the
          misty Mountains for forty days. If our
          luck holds, the Gap of Rohan will still
          be open to us. From there, our road
          turns east, to Mordor.

                                                        CUT TO:

EXT. EREGION HILLS--DAWN

CLOSE ON: Sam at the campfire. The sound of clashing swords!
Wider: Aragorn and Boromir are giving Pippin Sword tuition...




                                                    


                    BOROMIR
          Get away from the blade, Pippin...on your
          toes...good, very good...I want you to
          react, not think.

                    SAM
          Should not be too hard...

                    BOROMIR
          Move your feet.

                    MERRY
          Quite good, Pippin.

                    PIPPIN
          Thanks.

CLOSE ON: GIMLI has managed to corner Gandalf....

                    GIMLI
          If anyone were to ask for my opinion,
          which I note they have not, I would say
          we are taking the long way round.
          Gandalf, we can pass through the Mines of
          Moria. My cousin, Balin, would give us a
          royal welcome. Gandalf clearly thinks
          that is a bad idea.

                    GANDALF
          No, Gimli. I would not take the road
          through Moria unless I had no other
          choice.

Boromir thrusts, catching Pippin on the hand. Pippin throws
down his sword, kicks and lunges at Boromir, tackling him to
the ground. Much laughter. Legolas' eyes are fixed on a
distant Dark Patch which darts about the sky, like flying
smoke in the wind.

                    SAM
          What is that?

                    GIMLI
          Nothing...it's just a wisp of a cloud.

                    BOROMIR
              (worried)
          It's moving fast...against the wind.

                    LEGOLAS
          Crebain from Dunland!



                                                    


                    ARAGORN
              (urgently)
          Hide!

                    BOROMIR
          Merry..Pippin...Sam...take cover! WIDE
          ON: THE FELLOWSHIP scramble under what
          little cover

there is...as a regiment of Large crows fly low overhead at
Great speed, wheeling and circling above. As their dark
shadow passes over the fellowship, a single harsh croak is
heard...and the crows suddenly wheel away, back towards the
south. Gandalf staggers to his feet.

                    GANDALF
              (worried)
          Spies of Saruman.    The passage South is
          being watched.

Gandalf looks at Aragorn, turns to the others...gesturing
towards a high mountain pass.

                    GANDALF (CONT'D)
          We must take the pass of Caradhras!

                                                          CUT TO:

EXT. SNOWY MOUNTAINSIDE -- DAY

                                                        ANGLE ON:

The Fellowship clamber through Rock and Snow. CLOSE ON: Frodo
slips on some shale...as he scrambles to his feet, the Ring
falls on the ground... CLOSE ON: the ring gleaming in the
snow! Boromir's Hand picks it up by the chain...he stands,
the ring dangling before his eyes. He seems to grow in
stature, as if absorbing its power. Aragorn warily approaches
Boromir...Boromir is motionless...he stares at the ring, as
if transfixed.

                     ARAGORN
          Boromir?

                    BOROMIR
          It is a strange fate that we should
          suffer so much fear and doubt over so
          small a thing...such a little thing.

                    ARAGORN
              (quietly)
          Boromir...give the ring to Frodo.
          ARAGORN'S HAND moves to his sword hilt.

                                                      


Ring's POV...looking up at Boromir's face. The strange hum
vibrates on the soundtrack. CLOSE ON: a Weird beatific smile
lights up Boromir's face...The HUM grows to a Deafening roar!
Boromir suddenly snaps out of his trance and hands the ring
back to Frodo.

                    BOROMIR
              (lightly)
          As you wish. I care not.

Boromir smiles at Frodo, ruffling his hair. CLOSE ON: ARAGON
unhands his sword.

                                                        CUT TO:

EXT. ISENGARD -- DAY

Following the crows as they race deeper and deeper, passing a
vista of Industry, Hundreds of Orcs and writhing
Birthsacks...flying past Saruman, who stands upon a wooden
Gantry. CLOSE ON: Saruman, listening to the Cries of the
crows.

                    SARUMAN
          So, Gandalf...you try to lead them over
          Caradhras. And if that fails...where
          then will you go? THE FELLOWSHIP
          struggles through the snow.

                    SARUMAN (V.O.) (CONT'D)
          If the mountain defeats you, will you
          risk a more dangerous road?

                                                        CUT TO:

EXT. PASS OF CARADHRAS -- DAY

THE FELLOWSHIP are struggling through a blinding blizzard, up
towards the PASS OF CARADHRAS. Legolas the Elf moves lightly
across the top of the snow...he suddenly pauses. Saruman's
voice sweeps by in the wind.

                    LEGOLAS
              (urgent)
          There is a fell voice in the air.

                    GANDALF
          It's Saruman.

THUNDER RUMBLES...ROCK and Shale fall from above.




                                                    


                    ARAGORN
              (urgently)
          He's trying to bring down the mountain.
          Gandalf! We must turn back!

                       GANDALF
          No!

GANDALF RAISES HIS STAFF...HE CHANTS INTO THE WIND.

                    GANDALF
              (YELLING)
          Losto Caradhras, sedho, hodo, nuitho I
          ruith. Sleep Caradhras, be still, lie
          still, hold your wrath.

                                                        CUT TO:

EXT. ISENGARD -- DAY

CAMERA SWEEPS PAST SARUMAN...he stands on the summit of
Orthanc, Chanting. CLOUDS ARE FLOWING FROM ALL DIRECTIONS...
converging on the distant mountains in a stormy Malestrom.

EXT. PASS OF CARADHRAS -- DAY

Saruman's voice strengthens...rolling past the fellowship
like thunder. A LIGHTNING CRACK explodes on the mountainside
above them. Frodo looks up in horror as a huge snow avalanche
thunders down towards them! The Fellowship throw themselves
against the cliff face as snow crashes onto the narrow ledge.
LEGOLAS pulls Gandalf to safety. Aragorn shields Frodo and
Sam as snow piles around them. Within moments, the pass is
blocked and the fellowship are enveloped in snow. Boromir
and Aragorn frantically dig for the hobbits...who are pulled
out Shivering and Fearful.

                    BOROMIR
              (urgent)
          We must get off the mountain! Make for
          the gap of Rohan and take the West road
          to my city.

                    ARAGORN
          The Gap of Rohan takes us too close to
          Isengard.

                    GIMLI
          We cannot pass over the mountain. Let us
          go under it. Let us go through the mines
          of Moria. Gandalf has a concerned look on
          his face.


                                                    


                    SARUMAN (V.O.)
          Moria. You fear to go into those mines,
          don't you? The dwarves delved too
          greedily and too deep.

                    SARUMAN (V.O.) (CONT'D)
          You know what they awoke in, the darkness
          of Khazad-dum. Shadow and flame.

                    GANDALF
          Let the ringbearer decide.

CLOSE ON: FRODO, the weight of the decision weighing heavily
upon him. CLOSE ON: MERRY and PIPPIN shivering in Boromir's
arms.

                      GANDALF (CONT'D)
          Frodo?

Frodo meets Gandalf's eye.

                    FRODO
          We will go through the mines. Gandalf
          slowly nods.

                      GANDALF
          So be it.

                                                         CUT TO:

EXT. MORIA GATE -- NIGHT

The Fellowship are walking along the far shore of dark
lake...directly below great looming cliffs.

                    GIMLI
              (in awe)
          The walls of Moria!

Footing is treacherous on the narrow strip of green and
greasy stones. Gandalf touches the smooth rock wall between
the trees... slowly, faint lines appear like slender veins of
luminous silver running through the stone.

                     GANDALF
          Itidin...it mirrors only starlight and
          moonlight.

A large moon rises over the mountains... The lines grow
Broader and Clearer, forming a glowing arch of interlacing
ancient letters and symbols.



                                                   


                    GANDALF (CONT'D)
          It reads, "The door of Durin, Lord of
          Moria. Speak, friend, and enter."

                    MERRY
          What do you suppose that means?

                    GANDALF
              (confident)
          It's quite simple. If you are a friend,
          speak the password and the doors will
          open.

Gandalf raises his arms...

                    GANDALF (CONT'D)
              (incanting)
          Annon edhellen, edro hi ammen!

The cliff towers into the night, the wind blows cold, Frodo
shivers... and the door stands fast!

                                                         LATER:

GANDALF CONTINUES...

Mumbling spells in his efforts to open the door. Sam packs
pots and pans at his feet...watching sadly as Aragorn un-
saddles Bill the pony. CLOSE ON: ARAGORN whispering to Bill
the Pony.

                    ARAGORN
              (whispering)
          Mines are no place for a Pony, even one
          so brave as Bill.

                       SAM
          Bye, Bill.

                    ARAGORN
          Go on, Bill, go on..don't worry, Sam...he
          knows his way home. Aragorn slaps Bill on
          the rump...Bill goes trotting off. CLOSE
          ON: Sam watching Bill disappear into the
          darkness.

                    SAM
          Goodbye, Bill.

SPLASH! Merry and Pippin are tossing stones into the lake.
Black Rippling rings slowly fan out. Pippin is about to
throw another stone, but Aragorn grabs his arm.


                                                    


                    ARAGORN
              (ominous)
          Do not disturb the water.

Aragorn watches anxiously as the Ripples appear to grow....he
exchanges a look with Boromir.

Aragorn's hand creeps towards his sword. Gandalf gives up in
despair...he sits down beside Frodo. Close on: Frodo peers at
the Elvish inscription...his face breaks into a smile of
comprehension.

                    FRODO
              (quietly)
          It's a riddle...

Gandalf raises his eyebrows...

                    FRODO (CONT'D)
              (explaining)
          Speak, friend, and enter.   What's the
          Elvish for friend?

                    GANDALF
          Oh...mellon.

With that, the rock face silently divides in the middle and
two great Doors swing outwards... revealing a blackness
deeper than the night. As the Fellowship enter the Blackness,
something in the water stirs....

INT. MORIA GATE -- NIGHT

The Fellowship step warily into the darkness of Moria...a
Dank cavern, with winding steps leading deeper into the
mountain.

                    GIMLI
          So, master elf, you will enjoy the fabled
          hospitality of the dwarves; roaring
          fires, malt beer, red meat off the bone.
          This, my friend, is the home of my
          cousin, Balin...and they call this a
          Mine...
              (snorting)
          A mine!

A Glow from Gandalf's Staff suddenly lights    the chamber...
The Fellowship recoil in Horror! Many dwarf    Skeletons are
strewn about, clearly the dead of some old    battle...the
rusting armor and shields are peppered with    arrows and axes.



                                                    


                    BOROMIR
              (grimly)
          This is no mine...it's a tomb!

                    GIMLI
              (in horror)
          Oh...no...no..no... ! Legolas pulls a
          crude arrow out of a skeleton.

                     LEGOLAS
          Goblins!

The Fellowship draw swords and back away, towards the
Entrance.

                    BOROMIR
          We make for the Gap of Rohan.    We should
          never have come here.

EXT. MORIA GATE -- NIGHT

Frodo is suddenly PULLED TO THE GROUND. A long sinuous
Tentacle is wrapped around Frodo's ankle and is dragging him
towards the lake. FRODO CRIES OUT as Aragorn and Boromir rush
forward! Aragorn severs the Tentacle holding Frodo, and pulls
him to safety...Boromir hacks at the other Writhing Limbs. 20
more tentacles ripple out of the Lake! The dark water Boils
as the hideous beast lashes out at the FELLOWSHIP! Again the
creature grabs Frodo and pulls him to the lake, Frodo is
flung in the air as the Fellowship battle the creature.
Aragorn hacks at a tentacle...Frodo is released, falling into
Boromir's arms.

                    GANDALF
          Into the mines!

                     BOROMIR
          Legolas!

Legolas shoots an Arrow into the creature's head, gaining a
few vital seconds for Aragorn and Boromir as they race out of
the water with Frodo. The FELLOWSHIP hurriedly back away from
the Creature... retreating into the Moria Chamber as many
Coiling arms seize the large doors.

INT. MORIA GATE -- NIGHT

With a shattering echo, the creature rips the doors away,
creating a rock slide that crashes down the Cliff Face.
Within seconds, tons of rock seal the doorway... throwing the
Fellowship into Pitch Blackness.



                                                   


A faint light rises from Gandalf's staff, throwing a Creepy
Glow across the old wizards face.

                    GANDALF
              (ominous)
          We now have but one choice...we must face
          the long dark of Moria. Be on your
          guard...there are older and fouler things
          than the Orcs in the deep places of the
          world.

                                                      CUT TO:

INT. NEW CHAMBER, MORIA -- NIGHT

WIDE ON: the Fellowship crossing a precarious bridge above
deep mine workings.

                    GANDALF
          Quietly, now. It's a four day journey to
          the other side. Let us hope that our
          presence will go unnoticed.

INT. MORIA CEMETERY CAVERN -- NIGHT

They continue up a steep stair, passing through a dwarf
cemetery. The graves are despoiled...dwarf skeletons are
strewn about and Goblin Graffiti is scrawled on monuments in
dried Dwarf blood. The Atmosphere is very sinister.

                                                      CUT TO:

INT. MORIA TUNNEL FORK -- NIGHT

The path splits into three passages...each disappearing into
dark tunnels. Gandalf pauses, frowning.

                    GANDALF
          I have no memory of this place.

LATER... The Fellowship are nervously waiting...while Gandalf
sits, staring intently at the 3 tunnel mouths in front of
him. He appears to be in some kind of trance.

CLOSE ON: FRODO

He turns at the sound of a faint noise down the tunnel behind
them.

                    PIPPIN
          Are we lost?



                                                 


                    MERRY
          No. I don't think we are.   Shhhh,
          Gandalf's thinking.

                    PIPPIN
          Merry!

                    MERRY
          What?

                    PIPPIN
          I'm hungry.

Frodo's POV: a sudden glimpse of a creature darting in the
darkness. Frodo is nervous...he approaches Gandalf.

                    FRO DO
              (whispers)
          There's something down there.

                    GANDALF
              (quietly)
          It's Gollum.

                    FRODO
          Gollum!

                    GANDALF
          He's been following us for three days.

TEASING SHOT: and emaciated, leering creature.

                    FRODO
              (disbelieving)
          He escaped the dungeons of Barad- dur?

                    GANDALF
          Escaped...or was set loose. And now the
          Ring has drawn him here...he will never
          be rid of his need for it. He hates and
          loves the ring, as he hates and loves
          himself. Smeagol's life is a sad story.
          Gandalf catches Frodo's look of surprise.

                    GANDALF (CONT'D)
          Yes...Smeagol he was once called...Before
          the ring came to him, before it drove him
          mad.

Gollum's withered fingers are gripping the cave wall...he is
large, Luminous eyes blinking with malice.



                                                   


                    FRODO
             (grim)
         It's a pity Bilbo didn't kill him when he
         had the chance.

                   GANDALF
         Pity? It was pity that stayed Bilbo's
         hand. Many that live deserve death, and
         some that die deserve life. Can you give
         it to them, Frodo? Frodo frowns.

                   GANDALF (CONT'D)
         Do not be too eager to deal out death in
         judgment...even the very wise cannot see
         all ends. My heart tells me that Gollum
         has some part to play yet, for good or
         ill, before this is over. The pity of
         Bilbo may rule the fate of many.

                   FRODO
         I wish the ring had never come to me...I
         wish none of this had happened.

                   GANDALF
         So do all who live to see such times, but
         that is not for them to decide. All we
         have to decide is what to do with the
         time that is given to us. There is a note
         of finality in Gandalf's voice.

                   GANDALF (CONT'D)
         There are other forces at work in this
         world, Frodo, besides the will of evil.
         Bilbo was meant to find the ring. In
         which case, you also were meant to have
         it...and that is an encouraging thought,
             (sudden brightness)
         Ah! That it's that way! Gandalf points
         at the right hand tunnel...the Fellowship
         scramble to their feet.

                   MERRY
             (relieved)
         He's remembered!

                   GANDALF
         No, but the air doesn't smell so foul
         down there. If in doubt, Meriadoc,
         always follow your nose!
             (laughs)
         Ye s...

                                                               91.



INT. DWAROWDELF CHAMBER, MORIA -- DAY

The Fellowship pass under an arched doorway into a black and
empty space. Gandalf pauses...

                    GALADRIEL
          Let me risk a little more light. Gandalf
          taps his staff...for a brief moment a
          light

blazes... like a silent Flash of Lightning.    Great shadows
spring up and flee...

                    GANDALF
          Behold! The great realm and Dwarf city
          of Dwarrowdelf! Frodo gasps at the brief
          sight of a vast roof, far above

their heads, upheld by many mighty pillars hewn of stone.
Before them stretches a huge empty hall, with black walls,
polished and smooth as glass.

                    SAM
          Well, there's an eye opener and no
          mistake!

Ahead of them, a wooden door has been smashed. Black arrows
are embedded in the timbers. Two goblin skeletons lie in the
doorway. Gimli rushes ahead...

                    GANDALF
          Gimli!!

                                                        CUT TO:

INT. BALIN'S TOMB, MORIA -- DAY

Gimli rushes into another vast empty chamber... lit with a
narrow shaft of sunlight, beaming in from a small hole near
the roof. Dwarf and Goblin skeletons are piled high. In the
far corner sits a stone walled Well. A shaft of light falls
directly onto a stone table in the middle of the room: a
single oblong block, about 4 feet high, topped with a great
slab of white stone. Gimli falls to his knees...

                    GIMLI
          No...no...oh, no!

Gimli sobs.

Gandalf quietly reads an inscription of runes, carved onto
the white stone slab.


                                                   


                      GANDALF
            "Here lies Balin, son of Fudin, Lord of
            Moria." He is dead, then. It's as I had
            feared.

Gandalf carefully lifts the rotting remains of a book from
the white stone slab. It has been slashed and stabbed...and
appears to be covered in Dried Blood. The pages crack and
break as he opens it...

                      LEGOLAS
                (urgent whisper to Argorn)
            We must move on, we cannot linger.

                      GANDALF
                (reading)
            "They have taken the Bridge and the
            second hall: we have barred the
            gates...but cannot hold them for
            long...the ground shakes...drums in the
            deep...we cannot get out. A shadow moves
            in the dark. Will no- one save us? They
            are coming."

Unnerved, Pippin backs away nervously...He stumbles against
the well, sending a precariously balanced Armored skeleton
tumbling in! Merry reaches out, Grabbing hold of Pippin
before he falls. The Fellowship freeze in stunned silence as
the armored skeleton clatters down the deep well...echoing
loudly!

INT. MORIA CAVERNS -- DAY

Gandalf turns angrily on Pippin.

                      GANDALF
                (angry)
            Fool of a Took! Throw yourself in next
            time and rid us of your stupidity!

ANGLE ON:    PIPPIN, CHASTENED.

They fall silent. A low rolling boom rises from the depths
below...growing louder...BOOM...BOOM...as if the caverns of
Moria were turned into a vast drum. A great horn blasts
nearby...Answering horns ... running feet...harsh cries...
Sam's eyes glance at Frodo's belt...

                       SAM
                (worried)
            Mr. Frodo!



                                                     


Frodo looks down. A cold blue glow is emanating from Sting's
Scabbard! Frodo draws the Sword...and stares at its glowing
blade!

                     LEGOLAS
          Orcs !

                    ARAGORN
              (to the hobbits)
          Get back! Stay close to Gandalf.

Aragorn and Boromir slam and wedge the doors. Boromir
catches sight of something; he turns to Aragorn with shock in
his eyes.

                    BOROMIR
          They have a cave troll!

Gimli snatches up two rusty dwarf axes and leaps onto the
tomb.

                    GIMLI
              (yelling)
          Let them come! There is one Dwarf yet in
          Moria who still draws breath!

BOOM! The Door bursts open in a shower of wood fragments,
and 20 Goblins charge into the tomb, followed by a huge cave
troll! Gimli ducks a blow and immediately buries his Axes in
2 Goblin helmets. Aragorn and Boromir wade into the mass of
Goblins with their swords. Legolas fires deadly arrows into
Goblin throats, desperately trying to Shield the Hobbits!
Gandalf is clutching his sword and joins in the battle! The
cave troll is sweeping his club at Aragorn...who stumbles
backwards...the huge club descends for the killing
blow...suddenly, in a flash of steel, Boromir's long sword
slices into the Scaly arm of the troll; it rears back,
spewing green blood! Sam is backing up against a wall...a
sword in one hand, a saucepan in the other. In desperation
he swings wildly at a Goblin with a saucepan! It keels
over...Sam looks surprised. He wallops another Goblin and it
too, drops.

                    SAM
          I think I'm getting the hang of this.

The Cave Troll lunges forward, thrusting at Frodo's chest
with his spear.

                     FRODO
          Aragorn!   Aragorn!



                                                  


Sam screams as Frodo is lifted off his feet by the spear tip
and slammed against the wall.

                    ARAGORN
              (shocked yell)
          Frodo!!

The hobbits go crazy. Sam slashes at the cave troll's knee,
bringing him down...Merry and Pippin jump on him...Legolas
fires an arrow...and the cave troll topples, dead. Aragorn
rushes to Frodo's side as he slumps to the floor...Frodo
appears to be dead. Close on: Gandalf, Aragorn, Hobbits
looking horrified... Suddenly Frodo coughs...takes a huge
breath.

                    SAM
          He's alive!

                    FRODO
          I'm alright. I'm not hurt.

                    ARAGORN
          You should be dead. That spear would've
          skewered a wild boar!

                    GANDALF
          I think there's more to this hobbit than
          meets the eye.

Frodo open his shirt to reveal the Mithril Vest.   The Troll
Spear did not pierce the mithril."

                    GIMLI
          Mithril! You are full of surprises,
          Master Baggins.

BOOM. BOOM. BOOM     the sound of the drums rings out again!
Gandalf turns to the others.

                    GANDALF
          To the bridge of Khazad-dum!

                                                         CUT TO:

INT. DWAROWDELF CHAMBER, MORIA -- DAY

Gandalf leads the fellowship into the huge Dwarrowdelf
Chamber.

                      GANDALF
          This way!



                                                   


They hurry towards a distant door...as Goblins start
scuttling down the Pillars behind them, like cockroaches!
Frodo looks with horror at the overwhelming Goblin army
that's rushing toward them! SUDDENLY! A deafening roar fills
the air! A fiery light dances down the hallway... the
pillars casting eerie shadows. The Goblins freeze. They back
Fearfully away from the approaching beast...melting into the
darkness.

                    BOROMIR
          What is this new devilry?

A HUGE SHADOW, surrounded by flame, falls across the
hall..the ground shakes...an unearthly sound rumbles...

                    GANDALF
              (quietly)
          A Balrog..a demon of the ancient world!
          This foe is beyond any of you!
              (urgent yell)
          Run! Quickly!

                                                        CUT TO:

INT. STAIRWAY OF KHASAD-DUM, MORIA -- DAY

The BALROG, a massive creature rises from a chasm, a great
40 foot man-beast, with a mane of flames! In one hand is a
blade...like a stabbing tongue of fire; in the other, a WHIP
of many thongs. Aragorn leads the fellowship to the top of a
dizzying stairway...Gandalf follows, leaning heavily on his
staff. Close on: Aragorn looks at Gandalf, concerned.

                    GANDALF
          Lead them on, Aragorn.   The bridge is
          near.

Aragorn hesitates...Gandalf looks at him.

                    GANDALF (CONT'D)
          Do as I say; swords are no more use here.

THE FELLOWSHIP race down the stairway, Aragorn picks up
Frodo..leaping across a gaping chasm. A NARROW BRIDGE,
spanning a bottomless pit...Gandalf yells to the others:
Aragorn makes to throw Gimli across the Chasm.

                    GIMLI
          Nobody tosses a dwarf! The BALROG smashes
          through the wall and spreads its vast
          wings.
                    (MORE)


                                                    
                    GIMLI (CONT'D)
          It swoops down past the Fellowship,
          disappearing into a flaming pit!

                                                        CUT TO:

INT. BRIDGE OF KHAZAD-DUM, MORIA -- DAY

The Fellowship run into a hall...the floor is split with
fissures that spit flame.

                    GANDALF
              (yelling)
          Over the bridge! Fly!

They race towards the slender bridge of stone...without kerb
or rail...at the far end of the hall. The Fellowship
recklessly hurry over the dizzying bridge..but Gandalf... the
last..pauses in the middle of the span...he faces the
Balrog...staff in one hand...Sword in the other! Frodo looks
back in horror:

                    GANDALF (CONT'D)
          You cannot pass!

                    FRODO
              (alarmed yell)
          Gandalf!

                    GANDALF
              (yelling)
          I am a servant of the Secret Fire,
          wielder of the flame of Anor. The dark
          fire will not avail you, flame of Udun.

Frodo watches as the Balrog puts one foot on the bridge and
draws up to Full Height, wings spreading from wall-to-wall.
Gandalf is a tiny figure, balanced precariously on the narrow
bridge.

                    GANDALF (CONT'D)
          Go back to the shadow! The BALROG slashes
          at Gandalf with its Sword of

flame...Gandalf blocks with his sword...a ringing clash and
the Balrog's sword shatters into molten fragments!

                    GANDALF (CONT'D)
              (booming)
          You shall not pass!! The Balrog places
          one foot onto the bridge. Aragorn and
          Boromir race forward, swords drawn.

GANDALF CRIES ALOUD as he summons up his LAST RESERVES OF
STRENGTH!

                                                    

He thumps the bridge with his staff...a blinding sheet of
white flame springs up... the staff shatters...the bridge
breaks... right at Balrog's feet. The stone bridge drops away
into the gulf...from under the Balrog. For a moment, the
great Beast remains poised in the air...then it plunges down:
in slow motion Relief floods Frodo's face..Gandalf remains
trembling on the lip of the broken bridge. Slow motion: As
the Balrog falls, he lashes out with his whip of fire... Slow
motion: The thongs of the whip lash and curl around Gandalf's
knees, dragging him over the brink! Gandalf just manages to
hand on by his fingertips

                    FRODO
              (screaming)
          Gandalf!

                    GANDALF
              (fierce)
          Fly, you fools!

CLOSE ON: Gandalf lets go his grip and falls away...
following the Balrog into the bottomless Abyss! Frodo cries
out! Boromir scoops him up and carries him away.

                     FRODO
          No!

                     ARAGORN
          Gandalf!

They rush towards an archway.

                                                      CUT TO:

EXT. DIMROLL DALE DOOR -- DAY

The Fellowship tumble out of the Great Eastern Gate on to a
grassy sunlit hillside. Sam, Merry, and Pippin fall slowly to
the ground, Sobbing...Aragorn turns to Legolas and Gimli.

                    ARAGORN
              (urgent)
          Legolas, get them up!

                    BOROMIR
          Give them a moment...for pity's sake!

                    ARAGORN
          By nightfall these hills will be swarming
          with Orcs! We must reach the woods of
          Lothlorien. Come, Boromir, Legolas,
          Gimli, get them up. On your feet, Sam.
                    (MORE)


                                                  
                     ARAGORN (CONT'D)
          Boromir glances towards Frodo, then back
          at Aragorn. Frodo is walking away, as if
          in a daze.

                     ARAGORN (CONT'D)
          Frodo?   Frodo!

CLOSE ON: FRODO SLOWLY TURNS...a look of numb shock on his
devastated face. The Fellowship marches on.

                                                        CUT TO:

EXT. DIMRILL DALE HILLSIDE--DUSK

Aragorn scours ahead of the company, as they stumble on in
the fading light...in the distance the shimmer of a large
forest can be seen...Lothlorien!

EXT. EDGE OF LOTHLORIEN--DUSK

WIDE ON: The fellowship run across a forest floor strewn with
yellow flowers..above is a roof of golden leaves, held up by
silver pillars...the trunks of huge, grey trees. Gimli looks
nervously around...

                    GIMLI
          Stay close, young hobbits..they say a
          Sorceress lives in these woods. An elf-
          witch of terrible power. All who look
          upon her fall under her spell...

Frodo hesitates...a STRANGE VOICE whispers in his head...

                       GALADRIEL (V.O.)
          Frodo...

                    GIMLI
          And are never seen again!

                    GALADRIEL (V.O.)
          ...your coming to us is as the footsteps
          of doom. You bring great evil here,
          Ringbearer.

                       SAM
          Mr. Frodo?

                    GIMLI
          Well, here's one dwarf she won't ensnare
          so easily. I have the eyes of a hawk and
          the ears of a fox!




                                                    


The FELLOWSHIP are suddenly surrounded by ARMED ELVES.
Deadly arrows aimed at their heads. HALDIR, the Elvish
captain steps forward... he looks at Gimli with disdain.

                    HALDIR
          The dwarf breathes so loud we could have
          shot him in the dark.

                    ARAGORN
              (Elvish: with subtitles)
          Haldir of Lorien, we come here for your
          help. We need your protection.

                    GIMLI
          Aragorn! These woods are perilous. We
          should go back.

                    HALDIR
          You have entered the realm of the Lady of
          the Wood. You cannot go back.

Haldir's eyes lock onto Frodo.

                    HALDIR (CONT'D)
          Come, she is waiting.

                                                       CUT TO:

EXT. LOTHLORIEN HILLTOP -- DAY

Haldir leads the Fellowship onto a Hill Top.   They look with
wonderment at the vista spread before them.

Several miles towards the South, a Large Hill rises out of
the woods. Upon the hill rise many mighty Mallorn Trees,
taller than any others...Nestled high in the crown of the
mallorns is a Beautiful City. It Gleams in the low rays of
the late afternoon sun..green, gold, and silver. To the east
of Caras Galadhon, the Woods of Lorien run down the pale
gleam of Anduin, the great river. Beyond the River, the land
appears flat and empty, formless and vague, until far away,
it rises again like a dark and dreary wall. The Sun that lies
on Lothlorien has not power to enlighten the shadows that lie
beyond.

                                                       CUT TO:

INT. CELEBORN'S CHAMBER, CARAS GALADHON -- NIGHT

                                                          100.



ANGLE ON: THE FELLOWSHIP

step onto a wide fleet filled with a soft light. The walls
are green and silver, the roof gold and in its midst is the
trunk of the might Mallorn tree, now tapering toward its
crown. Celeborn steps forward to greet the guests. His hair
is long and silver, his face grave and beautiful, with no
sign of age upon it. Next to him stands Galadriel, the Lady
of the Elves. She has hair of deep gold and timeless,
unsurpassed beauty. Celeborn looks hard at Aragorn...

                    CELEBORN
          Eight there are, yet nine there were set
          out from Rivendell. Tell me, where is
          Gandalf, for I much desire to speak with
          him.

Frodo looks at Galadriel, standing silently beside Celeborn.

                    GALADRIEL (V.O.)
              (softly aloud)
          ...he has fallen into shadow. Galadriel
          looks to Aragorn.

                    GALADRIEL (CONT'D)
          The Quest stands upon the edge of a
          knife. Stray but a little and it will
          fail, to the ruin of all...Yet hope
          remains while the company is true.

Galadriel's eyes settle on Sam.

                    GALADRIEL (CONT'D)
          Do not let your hearts be troubled. Go
          now and rest for you are weary with
          sorrow and much toil. Galadriel's eyes
          turn to Frodo...her voice fades.

                    GALADRIEL (CONT'D)
          Tonight you will sleep in peace.
              (whispered v/o)
          Welcome, Frodo of the Shire... CLOSE ON:
          FRODO looks at GALADRIEL. SUDDEN INSERT:
          GALADRIEL as she is on the other

side... Powerful, divine...no longer of this world..a
Piercing white light surrounds her.

                    GALADRIEL (V.O.) (CONT'D)
          ...one who has seen the eye.

                                                        CUT TO:

                                                          101.



EXT. CARAS GALADHON LAWN -- NIGHT

Gimli, Legolas, Merry, Pippin, Frodo and Sam are in a
pavilion set among the trees near the fountain. They lie on
soft couches as Elves leave food and wine for them. MOURNFUL
SINGING drifts down from the trees above.

                    LEGOLAS
              (sadly)
          A lament for Gandalf...

                    MERRY
          What do they say about him?

                    LEGOLAS
          I have not the heart to tell you. For me,
          the grief is still too near. Boromir is
          sitting alone...Aragorn approaches him.

                     ARAGORN
          Take some rest..these borders are well
          protected.

Moonlight catches the trace of tears on Boromir's face.
Aragorn kneels down beside him.

                    BOROMIR
          I will find no rest here. I heard her
          voice inside my head...she spoke of my
          father and the fall of Gondor, and she
          said to me: "Even now, there

                    BOROMIR (CONT'D)
          is hope left. But I cannot see it...it
          is long since we had any hope.

CLOSE ON: BOROMIR looks at ARAGORN in despair.

                    BOROMIR (CONT'D)
          My father is a noble man, but his rule is
          failing and our..our people lose faith.
          He looks to me to make things right...and
          I would do it, I would see the glory of
          Gondor restored. Have you ever seen it,
          Aragorn? The White Tower of Ecthelion,
          glimmering like a spike of pearl and
          silver, its banners caught high in the
          morning breeze...have you ever been
          called home by the clear ringing of
          silver trumpets?

                    ARAGORN
          I have seen the white city..long ago.

                                                   


Boromir feels Aragorn's love for Minas Tirith and takes
heart,

                      BOROMIR
            One day our paths will lead us there, and
            the tower guards shall take up the call
             "the Lords of Gondor have returned."

Aragorn returns Boromir's smile...betraying his disquiet
sadness only when Boromir looks away.

                                                          CUT TO:

LATER....

The Fellowship are asleep on their beds. Gimli is snoring
loudly. CLOSE ON: BARE FEET tread soundlessly across the
lawn. CLOSE ON: Frodo's eyes flicker open...as if by
instinct. GALADRIEL, her White dress glowing in the
moonlight, glances at him. Frodo follows her...as if drawn by
an invisible force.

                                                          CUT TO:

EXT. GALADRIELS GLADE, LORTHLORIEN -- NIGHT

Upon a low stone pedestal, carved like a branching tree, sits
a shallow Silver Basin. Galadriel leads Frodo into the small
Glade.

                      GALADRIEL
            Will you look into the mirror? Frodo
            looks with apprehension at the silver
            basin.

                      FRODO
                (warily)
            What will I see?

Galadriel pours water into the basin from a silver jug...a
glow rises from the water.

                      GALADRIEL
            Even the wisest cannot tell for the
            mirror shows many things...things that
            were ..things that are...and some things
            that have not yet come to pass.

Frodo slowly steps up to the pedestal...he peers     into the
glossy surface. The night sky is reflected into     the water...
suddenly a figure takes form...the bowed figure     of an old
man, clad in white robes. He walks down a long      road. Frodo
leans closer to the mirror's surface...

                                                          103.



CLOSE ON: GANDALF LIFTS HIS HEAD AND LOOKS DIRECTLY AT FRODO!

FRODO gasps, his face lighting up with hope.

                    FRODO
              (joyous)
          Gandalf!

Gandalf looks at Frodo with a fierce intensity. Frodo
reaches out his hand toward the surface of the mirror.
Suddenly the image flares, burning out to white. The vision
shifts...Frodo gasps in horror! The Shire is in ruins! The
image suddenly widens to fill the screen...buildings
burning...bodies strewn about...Dark Shapes of ORCS looting
and destroying...Bag End, billowing in flames! The Party
tree is hacked down. Frodo reels back as the mirror seems to
grow...the nightmarish image sweeps past his head, engulfing
him entirely.

IMAGE: Hobbiton...now an Industrial wasteland! The fields
and trees destroyed...replaced with Brick factories belching
smoke! IMAGE: ORCS brutally herd manacled Hobbits into the
Factories! We see Sam...Merry... and Rosie Cotton. Soot-
stained and sobbing, they disappear into the factory hell-
hole! Suddenly, the mirror goes dark...and out of the black
abyss a single eye grows. CLOSE ON: FRODO IS FROZEN. Unable
to move or cry out. The ring dangles from his neck, inches
above the water...not shimmering with curls of steam. Fire
erupts around the eye... With a Yell, Frodo pushes himself
away from the pedestal and collapses on the ground. Light
instantly fades from the mirror. Frodo comes to his
senses...he is shocked. Galadriel stands still as a statue,
unmoved, untouched by the horror.

                    GALADRIEL
          I know what it is you saw...for it is
          also in my mind. It is the future,
          Frodo. It is what will come to pass if
          you should fail.

Galadriel looks at Frodo intensely...Frodo looks down...in
his hand he is clutching the ring. Frodo looks up at
Galadriel.

                    GALADRIEL (CONT'D)
          The fellowship is breaking. It has
          already begun. He will try to take the
          ring. You know of whom I speak. One by
          one, it will destroy them all.

                    FRODO (V.O.)
          If you ask it of me, I will give you the
          One Ring.

                                                   


                    GALADRIEL
          You offer it to me freely...I do not deny
          that my heart has greatly desired this.

Galadriel suddenly seems to rise in stature before Frodo's
eyes. Frodo is suddenly afraid of her.

                    GALADRIEL (CONT'D)
          In place of the Dark Lord, you would have
          a Queen, not dark, but beautiful and
          terrible as the Dawn. Treacherous as the
          Sea! Stronger than the foundations of
          the earth...all shall love me and
          despair! Frodo takes a step away from
          Galadriel...

Galadriel suddenly laughs...a slender Elf-woman once more,
clad in simple white, her voice soft and sad.

                    GALADRIEL (CONT'D)
              (gently)
          I pass the test.
              (laughs)
          I will diminish and go into the west and
          remain Galadriel. Frodo's confidence
          drains away.

                    FRODO
          I cannot do this alone...

                    GALADRIEL
          You are the ring-bearer, Frodo...to bear
          a ring of power is to be alone. This task
          was appointed to you, and if you do not
          find a way, no one will.

Frodo realizes what her message is.

                    FRODO
          Then I know what I must do. It's
          just...I'm afraid to do it. Galadriel
          kneels down to Frodo's height, staring at
          him intently.

                    GALADRIEL
          Even the smallest person can change the
          course of the future.

The Ring lies in the palm of Frodo's hand...his fingers close
over it.

                                                      CUT TO:

                                                         105.



INT. ORTHANC CHAMBER -- DAY

Naked, Lurtz's eyes follow Saruman, alight with a mean
intelligence.

                    SARUMAN (V.O.)
              (smiles)
          They were Elves once. Taken by the Dark
          Powers ... tortured and mutilated...a
          ruined and terrible form of life. And
          now...perfected. My fighting Uruk-Hai.
          Whom do you serve?

                    LURTZ
              (gutteral rasp)
          Saruman.

INT. CAVERNS BELOW ISENGARD -- DAY

QUICK CUTS: LURTZ is quickly armored...Breastplate...Leg
guards, Helmet...a sword is thrust in Lurtz's hand. The URUK-
HAI are smearing themselves in white paint...a creepy
ritualistic ceremony...the white hand of Isengard is smeared
on bodies, faces, and armor. SARUMAN address a crowd of 200
fully armed URUK-HAI.

                    SARUMAN
          Hunt them down. Do not stop until they
          are found. You do not know pain. You do
          not know fear. You will taste man-flesh.
          Saruman turns to Lurtz.

                    SARUMAN (CONT'D)
              (coldly)
          One of the Halflings carries something of
          great value...bring him to me...alive and
          unspoiled...kill the others.

EXT. ISENGARD -- DAY

Lurtz is leading 200 URUK-HAI out of Isengard..they run fast,
their powerful legs carrying them at speed.

EXT. SILVERLODE RIVER BANK--DAWN

The Fellowship are in small elven boats. They row away from
the Lothlorien Shore into the Silverlode river. Elves
quietly watch them depart. Galadriel gives Frodo a small
Crystal Phial.

                    GALADRIEL
          Farewell, Frodo Baggins. I give you the
          light of Earendil, our most beloved star.

                                                 


As the Fellowship's boats drift past, Galadriel stands alone,
watching from the banks of the river. In his head, Frodo
still hears her voice...

                    GALADRIEL (V.O.) (CONT'D)
          May it be a light for you in dark places,
          when all other lights go out.

EXT. RIVER ANDUIN -- DAY

The boats pass into the great river Anduin. The Three Elven
boats carry the Fellowship steadily southward. Green trees
slowly give way to a brown and withered land.

EXT. FOREST -- DAY

The Uruk forces are running through the trees with deadly
purpose.

EXT. RIVER ANDUIN -- DAY

A flock of birds circle high above, Black against the pale
sky. Aragorn watches them with concern.

EXT. PILLARS OF THE KINGS, RIVER ANDUIN--DAWN

The Three Elven boats drift slowly through the steep rocky
gorge in the Pre-dawn light. CLOSE ON: ARAGORN, slowly
paddling in the stern.

                    ARAGORN
              (quietly)
          Frodo.

Frodo slowly looks up, his eyes widening with amazement. Wide
on: Two enormous rock statues, towering like 300 foot
pinnacles on either side of the river...carved images of
Gondorian kings of old. They loom over the boats with power
and majesty.

                    ARAGORN (CONT'D)
          The Argonath...

Close on: Aragorn...strangely moved by the beauty of the
silent sentinels. He speaks, almost as if to himself.

                    ARAGORN (CONT'D)
              (deeply moved)
          Long have I desired to look upon the
          kings of old...my kin.

The fellowship stare in stunned silence as the current takes
them through the narrow gap between the Statues' feet.

                                                 


Wide on: Craning up past the statues vast crumbling heads, to
reveal a large lake only a mile down river...

EXT. SHORE OF NEN HITHOEL -- DAY

ANGLE ON: THE FELLOWSHIP

As they leap out of the boats and clamber onto the wooded
shore.

                    ARAGORN
          We cross the lake at nightfall, hide the
          boats and continue on foot..we approach
          Mordor from the North.

                    GIMLI
              (gloomy)
          Oh, yes, just a simple matter of finding
          our way through Emyn Muil, an impassable
          labyrinth of razor sharp rocks. And
          after that gets even better...a
          festering, stinking marshland, far as the
          eye can see.

                    ARAGORN
          That is our Road...I suggest you take
          some rest and recover your strength,
          Master Dwarf.

                    GIMLI
              (indignant)
          Recover my...

Legolas turns to Aragorn with urgency.

                    LEGOLAS
          We should leave now.

                    ARAGORN
          No. Orcs patrol the Eastern shore. We
          must wait for cover of darkness.

                    LEGOLAS
          It is not the Eastern shore that worries
          me.

Legolas casts a glance around into the Parth Galen forest...

                    LEGOLAS (CONT'D)
          A shadow and a threat has been growing in
          my mind. Something draws near, I can
          feel it.


                                                  


Aragorn looks at Legolas, knowing full well what he means.
Sam has slumped asleep...Merry dumps a small pile of kindling
at Gimli's feet...

                    MERRY
          Where's Frodo?

Sam sits up with a start...Aragorn's head snaps round..his
eyes fly to Boromir's shield which lies abandoned by his camp
bed. CLOSE ON: ARAGORN.... as he realizes Boromir has gone!

EXT. SLOPES OF AMON HEN -- DAY

Frodo is walking beneath the trees...lost in thought. His
feet hit the rough edge of an ancient stone slab...his eyes
follow an overgrown path towards stone stairs leading to the
summit of Amon Hen...the seeing seat. A CRACKLING SOUND!
Frodo freezes....

                    BOROMIR
              (quietly)
          None of us should wander alone; you least
          of all. So much depends on you...Frodo?

Frodo turns slowly...he stares at Boromir, tense, cautious.

                    BOROMIR (CONT'D)
          I know why you seek solitude. You
          suffer, I see it day by day. Are you
          sure you do not suffer needlessly?

Frodo stands silent for a moment..the murmur of the Wind in
the trees and the distant roar of the falls of Rauros can be
heard

                    BOROMIR (CONT'D)
          Let me help you. There are other ways,
          Frodo..other paths that we might take.

                    FRODO
          I know what you would say, and it would
          seem like wisdom but for the warning of
          my heart.

                     BOROMIR
          Warning?   Against what?

Boromir has started forward towards Frodo, he pulls himself
up.




                                                    


                    BOROMIR (CONT'D)
          We are all afraid, Frodo. But to let that
          fear drive us to destroy what hope we
          have...don't you see that is madness?

                    FRODO
          There is no other way.

                    BOROMIR
          I ask only for the strength to defend my
          people.
              (angrily drops the wood he has
               collected)
          If you would but lend me the ring...

                    FRODO
          No. . .

Frodo steps hurriedly away from Boromir.

                    BOROMIR
          Why do you recoil?   I am no thief.

                     FRODO
              (wary)
          You are not yourself.

                    BOROMIR
          What chance do you think you have? They
          will find you, they will take the ring
          and you will beg for death before the
          end.

Frodo turns to leave.

                    BOROMIR (CONT'D)
          You fool! It is not yours save by
          unhappy chance...it might have been mine.
          It should be mine. Give it to me! Give
          me the ring.

Boromir leaps on top of Frodo, grasping for the ring! Frodo
has only moments to act. Frodo rips the ring from around his
neck..and rams it on his finger.

                    FRODO DISAPPEARS
          Boromir spins wildly around, yelling into
          thin air!

                    BOROMIR
          I see your mind...you will take the ring
          to Sauron. You will betray us! You go to
          your death and the death of us all.
                    (MORE)
                                                  
                      BOROMIR (CONT'D)
            Curse you! Curse you and your Halflings!
            Boromir stumbles and falls. His body
            shakes as if in the Throes of a
            fit...slowly he comes to.

                      BOROMIR (CONT'D)
                (Disoriented)
            Frodo! Frodo! What have I done. Please,
            Frodo...

EXT. SEEING SEAT -- DAY

                                          IN THE TWILIGHT WORLD:

FRODO races through the misty twilight world, past the foggy
shapes of twisted trees. Somewhere behind him, Boromir's
distraught voice carries from another dimension:

                      BOROMIR (O.S.)
            I'm sorry, Frodo...Frodo...

Frodo suddenly finds himself on the stone steps...he clambers
up the stairs, onto a high seat, perched on four stone
pillars. Frodo cowers on the seat, like a lost child upon the
throne of mountain kings. The world of mist swirls around
him. Frodo peers out from the seat...the world seems to
shrink. In all directions, Views of far off lands telescope
towards him through the mist. IMAGES: ORCS spilling out of
holes in the misty mountains... flames rising from
Mirkwood...grim faced easterlings march to war...black ships
sailing into the south. All the power of the Dark Lord is in
motion. Frodo moves his gaze towards the east...fire explodes
against the smoke, as a huge mass of black battlements fills
Frodo's vision. A mountain of iron, immeasurably strong,
tower of adamant: Barad-dur, FORTRESS OF SAURON!

SUDDENLY!   SAURON'S EYE LEAPS TOWARD FRODO LIKE A FINGER OF

LIGHT.

SAURON (V.O.)

(IN BLACK SPEECH)

They will fall! Frodo leaps off the seat, and tumbles down
the stairs! The eye sweeps Amon Hen like a searchlight,
seeking its ring! With a huge effort, Frodo wrenches the ring
off his finger...

EXT. SUMMIT OF AMON HEN -- DAY

Frodo lies gasping on the summit of Amon Hen...below the
ancient ruins of the seeing seat.

                                                            111.



AT THAT MOMENT: A BLACK BOOT STEPS INTO SHOT!

Frodo looks up as Aragorn towers over him.

                       ARAGORN
          Frodo?

                     FRODO
              (numb)
          It has taken Boromir. ARAGORN moves
          towards Frodo...

                    ARAGORN
              (urgent)
          Where is the ring?

Frodo backs away from Aragorn...Aragorn is shocked by the
movement.

                       FRODO
          Stay away!

                    ARAGORN
          Frodo...I swore to protect you.

                    FRODO
          Can you protect me from yourself?

Frodo uncurls his fist...in is palm lies the ring! It
glints, gold and beautiful in the afternoon sun...Aragorn's
eyes are drawn to it.

                    FRODO (CONT'D)
          Would you destroy it?

                    ARAGORN
              (kneeling to Frodo)
          I would have gone with you to the end...
          into the very fires of Mordor.

                    FRODO
          I know...Look after the others,
          especially Sam...he will not understand.

Aragorn freezes!   He draws his sword.

                     ARAGORN
              (urgent)
          Go, Frodo!

Frodo hesitates.



                                                 


                    ARAGORN (CONT'D)
              (yells)
          Run! Run!!

Frodo backs away into the trees...as 200 URUK-HAI SWARM onto
Amon Hen behind Aragorn!

Aragorn attacks the leading URUK-HAI like a madman... he
brings two down with his sword...leaping into the ruins as
others close in on him. Frodo scrambles down the hillside,
away from the fight. Aragorn battles the URUK-HAI, amongst
the pillars and blocks of Amon Hen. Despite his bravery, he
is quickly surrounded... SUDDENLY: ELVEN ARROWS smash into
the URUK-HAI. Legolas races out of the woods, firing his bow.
Gimli leaps into the battle, wielding his might axe.

EXT. PARTH GALEN HILLSIDE -- DAY

Frodo is darting down the steep hillside as heave feet
thunder down behind him.

                       SAM
          Mr. Frodo!

Sam looks around for Frodo. CLOSE ON: LURTZ ordering his
URUKS.

                     LURTZ
          Find the Halflings ... find the
          halflings!

Frodo stumbles and falls...quickly he crawls behind a
tree...above him the sound of Uruk-Hai crashing through the
forest rings out.

                    MERRY (O.S.)
              (urgent whisper)
          Frodo!

Frodo turns to see Merry and Pippin hidden in a hollow, a few
feet away.

                    MERRY (CONT'D)
          Hide here, quick!

                       PIPPIN
          Come on...

Frodo looks at his friends... slowly shakes his head, a great
sadness in his eyes...

                    PIPPIN (CONT'D)
          What's he doing?

                                                 


Merry's eyes meet Frodo's.        Understanding.

                    MERRY
              (softly)
          He's leaving.

                        PIPPIN
          No!

Pippin stands and makes a move toward Frodo...Merry grabs at
his arm.

                        MERRY
          Pippin!

THE ECHO OF BOROMIR'S HORN reaches Aragorn, Legolas, and
Gimli...they are battling their way down the Slopes towards
the lake.

                    LEGOLAS
          The horn of Gondor!

                        ARAGORN
          Boromir!

Aragorn desperately slashes his way towards Boromir, felling
URUK-HAI in his path...while Legolas and Gimli fight a rear
guard action. MANY URUK-HAI fall to Boromir's sword as he
tries to protect Merry and Pippin...

                        BOROMIR
          Run!   Run!

Lurtz takes aim. A black arrow suddenly thuds into Boromir's
chest. Amazingly, Boromir continues fighting, but another
arrow...and another, brings him to his knees. Merry and
Pippin are scooped off their feet by URUK-HAI.

                        MERRY & PIPPIN
          Aaaaagh!      Boromir! Boromir!

Lurtz aims his bow at Boromir's heart... suddenly Aragorn
charges at him, smashing the Bow with his sword. They lock
into a deadly battle. Aragorn cuts Lurtz down and races
towards Boromir, who lies slumped against a tree...URUK-HAI
arrows sticking out of his chest. At least 20 dead URUK-HAI
lie heaped around Boromir. His horn lies at his feet...Cloven
in two.

                    BOROMIR
              (painful gasp)
          They took the little ones...
                    (MORE)

                                                   
                    BOROMIR (CONT'D)
          Aragorn quickly tries to staunch the flow
          of Blood from Boromir's shoulder.

                    BOROMIR (CONT'D)
              (panicked)
          Frodo...where is Frodo?

                    ARAGORN
          I let Frodo go.

Boromir holds Aragorn's gaze.

                    BOROMIR
          Then you did what I could not.   I tried
          to take the ring from him.

                    ARAGORN
          The ring is beyond our reach now.

                    BOROMIR
          Forgive me, I did not see..I have failed
          you all.

                    ARAGORN
          No, Boromir. You fought bravely. You
          have kept your honor. Aragorn tries to
          bind Boromir's wound.

                    BOROMIR
          Leave it! It is over...the world of Men
          will fall and all will come to darkness
          and my city to ruin..Aragorn..

                    ARAGORN
          I do not know what strength is in my
          blood, but I swear to you... I will not
          let the White City fall, nor your people
          fail...

                    BOROMIR
          Our people...our people...

Aragorn places Boromir's sword in his hand.   Boromir's
fingers tighten around the hilt.

                    BOROMIR (CONT'D)
          I would have followed you, my
          brother...my captain, my King. Aragorn
          lays Boromir down. He is dead.

                    ARAGORN
          Be at peace, son of Gondor. Aragorn bends
          and Kisses Boromir's forehead.
                    (MORE)

                                                     
                     ARAGORN (CONT'D)
           Legolas and Gimli appear behind
           him...Aragorn stands.

                     ARAGORN (CONT'D)
           They will look for his coming from the
           white tower...but he will not return.

EXT. SHORE OF NEN HITHOEL -- DAY

On the lakeshore Frodo stands in front of one of the Elvish
Boats, the ring in his palm. A distraught Sam...running as
hard as he can through the forest...

                        SAM
           Mr. Frodo!

Close on: Frodo looks to the far side of the river...the
camera moves in on the ring.

                     FRODO (V.O.)
           I wish the ring had never come to me..I
           wish none of this had happened...

Tears fall down Frodo's face...

                     GANDALF (V.O.)
           So do all who lie to see such times...but
           that is not for them to decide. All we
           have to decide is what to do with the
           time that is given us.

With renewed determination, Frodo tucks the ring inside his
vest pocket. The small figure of Frodo pushing the Elvish
boat into the water... Sam bursts through the trees and runs
toward the lake...Frodo is already paddling away.

                     SAM
               (anguished)
           Not alone, Frodo. Mr. Frodo! Frodo, in
           the boat, paddling steadfastly away from
           the

shore..tears in his eyes..the voice of Sam carried on the
wind. Frodo whispers to himself

                        FRODO
           No, Sam.

Sam looks at the water...then at the boat.

SPLASH!   FRODO turns to see Sam launching himself into the
water.



                                                     


                    FRODO (CONT'D)
          Go back,Sam. I'm going to Mordor alone.

Sam splashes hopelessly toward the boat.

                    SAM
          Of course you are...and I'm coming with
          you!

                    FRODO
          You can't swim.

Sam starts to go under, spluttering and coughing...Frodo
drops his paddle and scrambles backwards in the boat...

                       FRODO (CONT'D)
                 (frightened)
          Sam!

Sam is underwater...hands flailing helplessly as he sinks.
Close on: Frodo's hand grasping Sam's... Frodo pulls a
bedraggled and half drowned Sam into the boat. Frodo and Sam
look at each other, out of breath, tears and water streaming
down both their faces.

                     SAM
          I made a promise, Mr. Frodo...a promise.
              (fierce passion)
          "Don't you leave him, Samwise Gamgee."
              (sobs)
          And I don't mean to...I don't mean to.

                    FRODO
              (crying)
          Oh, Sam!

Frodo starts to laugh through his tears...the two friends
hug.

                    FRODO (CONT'D)
          Come on then..

The two Hobbits row through the water...

EXT. FALLS OF RAUROS AERIAL -- DAY

Slow motion: Looking down on swiftly flowing
water...Boromir's body slides under camera.

He is lying in one of the boats, his arms across his
chest..his broken horn at his side. Suddenly... the boat
drops away from camera...as it plunges over the massive falls
of Rauros, disappearing into the vapor below.

                                                    


                    LEGOLAS
          If we are quick, we will catch Frodo and
          Sam before nightfall.

Aragorn looks towards the far shore; Frodo and Sam's small
Boat can be seen lying on the distant Riverbank as Frodo and
Sam make off into the forest beyond. He doesn't react.
Legolas turns and looks at Aragorn.

                    LEGOLAS (CONT'D)
          You mean not to follow them...

                    ARAGORN
          Frodo's fate is no longer in our hands.

                    GIMLI
          Then it has all been in vain...the
          fellowship has failed.

                    ARAGORN
          Not if we hold true to each other. We
          will not abandon Merry and Pippin to
          torment and death, not while we have
          strength left.

Aragorn pulls a HUNTING KNIFE out of his pack and straps it
on.

                    ARAGORN (CONT'D)
          Leave all that can be spared behind...
          CLOSE ON: ARAGORN..a steely light in his
          eye.

                    ARAGORN (CONT'D)
              (grimly)
          We travel light. Let's hunt some Orc.

                       GIMLI
          Yes!   Ha!

Aragorn, Legolas, and Gimli disappear into the Woods,
following the URUK-HAI trail.

EXT. EMYN MUIL HILLTOP -- DAY

Frodo and Sam scramble onto a high ridge.

A distant line of Saw toothed mountains below a dark,
oppressive sky. Black volcanic smoke rises behind the
mountains....MORDOR!




                                                    


                     FRODO
          Mordor!   I hope the others find a safer
          road.

                    SAM
              (simply)
          Strider'll look after them.

                    FRODO
          I don't suppose we'll ever see them
          again.

                    SAM
          We may yet, Mr. Frodo.   We may.

                     FRODO
          Sam?

Frodo looks at Sam with great affection..despite the grim
outlook, Sam is undeterred...

                    FRODO (CONT'D)
          I'm glad you're with me.

WIDE ON: THE TWO HOBBITS SETTING OFF TOWARD MORDOR.

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
