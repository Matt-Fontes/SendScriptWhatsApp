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
                         "FERRIS BUELLER'S DAY OFF"

                                     by

                                John Hughes

						SHOOTING SCRIPT
						July 24, 1985


                         "FERRIS BUELLER'S DAY OFF"

  1  BLACK SCREEN                                                  1

     MAIN TITLES

     IT'S SILENT. A BEAT...AND AN EXPLOSION OF SOUND.  A HOUSEHOLD
     IN THE MORNING. KIDS GETTING READY FOR SCHOOL. CLOCK RADIOS.
     KITCHEN APPLIANCES. SHOWERS. FIGHTING. PEOPLE YELLING. DOG
     BARKING. APPLIANCES BUZZING. CAR HORNS. IT SOUNDS JUST LIKE
     YOUR HOUSE DID. STREAMS OF ROCK'N ROLL FADE IN AND OUT. HUEY
     LEWIS TO LIONEL RITCHIE TO HUSKER DU. SURROUND MAKES IT FEEL
     LIKE YOU'RE IN THE ROOM. AN AURAL TOUR OF A HOUSE ON A
     SCHOOL MORNING. BEGINING IN THE KITCHEN AND MOVING UPSTAIRS.

                              FATHER'S VOICE (TOM)
               Where's my wallet?!

                              SEVEN YEAR OLD BOY (TODD)
               YOU IDIOT!!

                              TWELVE YEAR OLD GIRL (KIMBERLY)
               MOM!

                              TODD
               SHUT-UP!

                              EIGHTEEN YEAR OLD GIRL (JEANIE)
               I NEED A TOWEL!!

                              TOM
               JOYCE!

                              KIMBERLY
                          (whispers, sadistic)
               When you turn ten, your head's going
               to swell up real big like a watermelon
               and we're going to have to put you
               to sleep like they do with a dog.

                              TODD
               MOM!

                              TOM
               JOYCE!!

                              JEANIE
               WHO PISSED ON THE TOILET SEAT!? MOTHER!!

                              TOM
               Where's Mom?

                              TODD
               Is my head going to swell up?

                              TOM
               What?!

                              JEANIE
               OH, MY GOD! THE TOILET PAPER'S ALL WET!!!

                              MOTHER (JOYCE)
                          (screams)
               TOM!

     The house falls dead SILENT. We hear footsteps thundering
     through the house. A TENSE STRAIN OF MUSIC FADES UP.

                              TODD
               What's that?

                              KIMBERLY
               Wait! Hold still!

                              TODD
               What?!

                              KIMBERLY
               You heads starting to swell up!!

     Todd screams. We hear the sound of Tom's footsteps running
     through the kitchen, down the hall, up the stairs, up the
     hallway. A door open.

                              TOM
                          (breathless)
               What's the matter?

                              JOYCE
                          (worried)
               It's Ferris!

                              TOM
               What's wrong?

                              JOYCE
                          (snaps)
               What's wrong? For Christ's sake!
               Look at him!

  2  CLOSE-UP. FERRIS                                              2

     An eighteen year-old boy. He's staring lifelessly at CAMERA.
     His mouth's open. His eyes are bugged-out. His tongue is fat
     and dry in his mouth. He's laying in bed, on his side.

  3  INT. BOY'S BEDROOM                                            3

     Ferris' parents, TOM and JOYCE BUELLER are standing at
     bedside. They're in their late forties, early fifties.
     Handsome, upper-middle class parents. They're both dressed
     for work.

                              TOM
               Ferris?

                              JOYCE
               He doesn't have a fever. But he says
               his stomach hurts and he's seeing spots.

  4  CLOSE-UP. FERRIS                                              4

     His lifeless eyes blink.

  5  INT. BEDROOM. PARENTS                                         5

     Tom bends down and touches Ferris' forehead.

                              TOM
               What's the matter, Ferris?

                              JOYCE
               Feel his hands. They're cold and clammy.

     Tom takes one of Ferris' hands.

                              TOM
                          (discreetly)
               Should you call the doctor?

                              JOYCE
                          (whispers)
               He doesn't want me to.

                              TOM
               Why don't you want Mom to call
               the doctor?

     Ferris exhales loudly. He tries to speak but all he can
     manage is a choked gasp.

                              TOM
               What?

     Ferris tries again.

                              FERRIS
                          (raspy)
               Don't make a fuss. I'm fine. I'll get up.

     He starts to get up. Joyce gently pushes him back down.

                              FERRIS
               I have a test today. I have to take it.
               I want to get into a good college
               so I can have a fruitful life...

                              JOYCE
               You're not going to school like
               this.
                          (to Tom)
               Maybe I should call the office and
               tell them I won't be in.

                              FERRIS
               I'm okay, Mom. I feel perfectly...Oh, God!

     He's gripped by a seizure. His body stiffens and he chokes.
     His older sister, JEANIE, walks into the room. She's dressed
     for school. She's cute and stuck-up. A major pill.

                              JEAN
               Oh, fine. What's this? What's his problem?

                              JOYCE
               He doesn't feel well.

                              JEAN
               Yeah, right. Dry that one out
               and you can fertilize the lawn.

                              TOM
               That's enough, Jeanie.

                              JEANIE
               You're not falling for this, are you?
               Tell me you're not falling for this.

                              FERRIS
               Is that Jeanie? I can't see that
               far. Jeanie?

                              JEANIE
               Pucker up and squat, Ferris.

                              JOYCE
                          (annoyed)
               Thank you, Jeanie. Get to school.

                              JEANIE
                          (angry, defeated)
               You're really letting him stay home?
               I can't believe this. If I was bleeding
               out my eyes, you guys'd make me go to
               school. It's so unfair.

                              FERRIS
               Please don't be upset with me, Jeanie.
               Be thankful that you're fit and have
               your health. Cherish it.

                              JEANIE
                          (to herself)
               Oh, I wanna puke.

     She glares at Ferris. Her eyes are mascara and vengence. She
     slips out of the room. Ferris' brother, TODD and sister,
     KIMBERLY peek into the room.

                              KIMBERLY
               Myocardial infarction?

                              JOYCE
               Get your stuff. Daddy'll be right
               down.

                              KIMBERLY
               Syphilitic meningitus? That would be
               a huge family embarrassment.

                              TOM
               Get downstairs!

                              KIMBERLY
               If he dies, I got dibs on his stereo.

     She turns sharply and exits.

                              TODD
                          (worried)
               Dad? Does my head look alright?

                              JOYCE
               Get downstairs! Now!

                              TODD
               Just answer me one question! Is it
               swelling up? Kim said it was going
               to get as big as...

                              KIMBERLY (OC)
               A WATERMELON!

                              TODD
                          (yells out the room)
               Shut-up!

                              JOYCE
               Get downstairs! NOW!

     Todd backs out of the room.

                              FERRIS
               I'll be okay. I'll just sleep.
               Maybe I'll have an aspirin around
               noon.

                              JOYCE
                          (to Ferris)
               I'm showing houses to the family
               from California today but I'll be in
               the area. My office'll know where
               I am, if you need me.

                              TOM
               I'll check it with you, too.

                              FERRIS
               It's nice to know I have such
               loving, caring parents. You're
               both very special people.

  6  CU. FERRIS                                                    6

     He acknowledges Tom with a pathetic flutter of his eyelids.

  7  INT. BEDROOM. JOYCE                                           7

     She strokes Ferris' hair.

                              JOYCE
               I hope you feel better, pumpkin.

     She leans down and kisses his forehead. Tom pats his
     shoulder.

                              TOM
               Get some rest.

  8  CU. FERRIS                                                    8

     Ferris lets out a wheeze. His glassy eyes follow his parents
     to the door.

                              JOYCE (OC)
               We love you, sweetie.

                              TOM (OC)
               Call if you need us.

     They close the door. The lock clicks. Ferris' eyes shift
     from the door to CAMERA. A sly, little smile crawls across
     his lips.

                              FERRIS
               They bought it.

     The MTV theme music ROARS IN.

  9  CU. TV SCREEN                                                 9

     The TV at the foot of Ferris' bed. The MTV logo is playing.

 10  INT. BEDROOM                                                 10

     Ferris yanks open the drapes. The pall of the sickroom
     disappears in the brilliant glow of morning sunlight.

                              FERRIS
               Incredible! One of the worst performances
               of my career and they never doubted it
               for a second.
                          (looks out the window)
               What a beautiful day!

     He turns from the window.

                              FERRIS
               Parents always fall for the clammy hands.
               It's physical evidence of illness. It's
               a good, non-specific symptom. Parents are
               generally pretty hip to the fever scams.
               And to make them work you have to go a hundred
               and one, hundred and two. You get a nervous
               mother and you end up in a doctor's office
               and that's worse than school.

     He flips on his stereo and fills the room with the MTV
     broadcast. A NEW SONG begins.

                              FERRIS
               Fake a stomach cramp and when you're
               doubled over, moaning and wailing, just
               lick your palms. It's a little stupid
               and childish but then so if high school.
               Right?

     He equalizes the sound a little.

                              FERRIS
               This is my ninth sick day with semester.
               If I go for ten, I'm probably going to
               have to barf up a lung. So, I absolutely
               must make this one count.

     He exits into the hallway.

 11  INT. BATHROOM                                                11

     Ferris walks into the bathroom. It's littered with Jean's
     debris. He turns on the shower water.

                              FERRIS
               I don't care if you're fifty five
               or seven, everybody needs a day off
               now and then. It's a beautiful day.
               How can I be expected to handle
               high school?

     He bends down OUT OF FRAME as he loses his briefs. He pops
     up.

                              FERRIS
               I do actually have a test. That wasn't
               bullshit.

     He steps into the shower. Through the pebbled glass of the
     shower door we see Ferris' outline.

                              FERRIS
               That I care about it was.

 12  INT. BATHROOM. SHOWER STALL.                                 12

     Inside the shower. Ferris' hair is standing straight up.
     It's moulded into a fin with shampoo.

                              FERRIS
               It's on European socialism. I mean,
               really. What's the point? I'm not
               European. I don't plan to be European.
               So, who gives a shit if they're socialists?
               They could be fascist anarchists and it
               still wouldn't change the fact that I
               don't own a car.

     He turns the shower head around and uses it like a
     microphone.

                              FERRIS
                          (sings)
               WELL SHAKE IT UP, BABY,
               TWIST AND SHOUT...

 13  INT. HALLWAY. LATER                                          13

     Ferris comes out of the bathroom with a towel wrapped around
     his waist. He's drying his hair with another of a different
     color.

                              FERRIS
               Not that I condone fascism. Or
               and "isms". "Isms", in my opinion
               are not good. A person should not
               believe in an "ism". He should
               believe in himself. John Lennon
               said it on his first solo album.
               "I don't believe in Beatles, I
               just believe in me." A good point
               there. Afterall, he was the Walrus.

     He opens a linen closet and tosses the towel in it.

                              FERRIS
               I could be the Walrus and I'd still
               have to bum rides off people.

     He passes CAMERA and goes into his room.

                              FERRIS (OC)
               I'm not very political? Let me
               put that into perspective...

 14  INT. BEDROOM                                                 14

     Ferris tosses the towel he's dried hair with on the bed.

                              FERRIS
               My uncle went to Canada to protest
               the war, right? On the Fourth of
               July he was down with my aunt and he
               got drunk and told my Dad he felt
               guilty he didn't fight in Viet Nam.
               So I said, "What's the deal, Uncle
               Jeff? In wartime you want to be a
               pacifist and in peacetime you want
               to be a soldier. It took you twenty
               years to find out you don't believe
               in anything?"
                          (snaps his fingers)
               Grounded. Just like that. Two weeks.
                          (pause)
               Be careful when you deal with old
               hippies. They can be real touchy.

     He opens his door.

 15  INT. CLOSET                                                  15

     The door opens and Ferris rifles through his shirts.

                              FERRIS
               My mother was a hippie. But she
               lost it. She got old. If she listens
               to the White Album now? She doesn't hear
               music, she hears memories. Nostalgia is
               her favorite drug. It'll probably be
               mine, too. I hope not.

     He finds a shirt he likes. He steps back from the closet and
     puts it on. He drops the towel.

 16  INT. BEDROOM                                                 16

     He walks across the room to his dresser. He opens his
     underwear drawer. There's an old model of a submarine on the
     top of the dresser. He picks it up.

                              FERRIS
               In eighth grade a friend of mine
               made a bong out of one of these.
               The smoke tasted like glue.

     He pulls out a pair of underwear. He gets dressed as he
     speaks.

                              FERRIS
               His name is Garth Volbeck. He's a
               serious outsider. Not a bad guy, I
               like him. I'm probably his only friend.
               I do what I can for him. I mean, if
               I was him, I'd appreciate it. Do unto others,
               right? Anyway, his mother owns a gas station.
               His father's dead and his sister's rumored
               to be a prostitute, which is complete bullshit.
               She only puts out so people will hang out
               with her. It's sad but I don't hold it
               against her. Better to hold it against the
               guys who use her and don't care about her.
                          (pause)
               My parents never allowed Garth over here.
               It was because of his family. Mainly his
               older brother. He's in jail. I could see them
               not wanting his brother here because he is
               a registered psycho. I wouldn't want him here.
               I once watched the guy eat a whole bowl of
               artificial fruit just so he could see what
               it was like to have his stomach pumped.
               But Garth isn't his brother. It isn't his fault
               that his brother's screwed-up. Alot of fights
               with the parents on that point. I always felt
               for Garth. I was sleeping at his house once
               and I was laying on the dark worrying that
               his brother was going to come in and hack me
               to death with an ax and I heard Garth crying.
               I asked him what was wrong and he said, "Nothing".
               ... Nothing was wrong. There was no
               specific thing he was crying about.
               In fact, he wasn't really even aware that
               he was crying. He just cried himself to
               sleep every night. It was a habit. The
               guy's so conditioned to grief that if
               he doesn't feel it, he can't sleep. How
               could you possibly dump on guy who has to
               deal with that kinda shit? My parents
               acknowledge the trudge of the situation
               and I'm sure that deep down, they do feel
               for him but still the guy's banned from
               our house.

     He looks at himself in the mirror on the back of his closet
     door. He doesn't like what he's wearing. He continues his
     speech as he disrobes.

                              FERRIS
               Unfortunately, now my parents have a
               legit argument. Garth doesn't need his
               brother to give him a rep anymore. He's
               getting one on his own. He's lost. It's
               over for him. He's eighteen. Gone from
               school. Gone from life. His legacy is
               a gas station.

 17  INT. HOUSE. STAIRCASE                                        17

     Ferris comes down the stairs. He's wearing a completely
     different outfit.

                              FERRIS
               One very serious danger is playing
               sick is that it's possible to believe
               your own act.

 18  INT. KITCHEN                                                 18

     Ferris comes into the kitchen and crosses to the
     refrigerator.

                              FERRIS
               That and boredom. Alot of people
               ditch and feel great for about an
               hour. Then they realize there's
               nothing to do. TV and food. I myself
               have ditched and gotten so bored I
               did homework. Figure that shit out.

     He takes a sip out of a bottle of orange juice.

                              FERRIS
               You have to plan things out before
               you take the day off. Otherwise
               you get all nervous worrying about
               what to do and all you get is grief
               and the whole point is to take it
               easy, cut loose and enjoy.

     He crosses to the pantry.

                              FERRIS
               You blow your day and at about three
               o'clock, when everybody's out of school,
               you're going to wish you'd gone to
               school so you could be out having
               fun.

     He emerges from the pantry with a handful of Oreos.

                              FERRIS
               Avoid the misery. Plan your day.
               Do it right.

 19  INT. FAMILY ROOM                                             19

     Ferris walks in and flops down in an armchair.

                              FERRIS
               There's alot of pressure at work
               in my age group. And it's not always
               recognized.

     He reaches over and picks up the telephone. He sets it in
     his lap.

                              FERRIS
               Some guy whose hair is falling out
               and his stomach's hanging over his
               belt and everything he eats makes
               him fart, he looks at someone like
               me and thinks, "This kid's young and
               strong and has a full, rich future ahead
               of him, what's he got to bitch about?"

 20  CU. PHONE                                                    20

     He punches out a number.

 21  INT. FAMILY ROOM. FERRIS                                     21

     He remote controls the TV on.

                              FERRIS
               That's just one reason why I need a
               day off every now and then.

 22  EXT. ANOTHER HOUSE                                           22

     A sleek, modern house on a couple of deeply wooded acres. A
     prime house in a prime location. A telephone rings OVER.

 23  INT. BOY'S BEDROOM                                           23

     It's a dark, dreary sick room. Shades drawn, floor strewn
     with used tissues, nightstand a still-life of over the
     counter remedies. A high school boy, CAMERON FRYE, is laying
     in bed. We don't see his face, only a silhouette with a
     thermometer sticking out his mouth. U2's SUNDAY BLOODY
     SUNDAY is playing. He's mumbling random words.

                              CAMERON
               Food...shelter...no...yes...

     The phone rings. His hand reaches back and hits the speaker
     phone button.

                              CAMERON
                          (weak)
               Hello?

                              FERRIS' VOICE
               Cameron! What's happening?

                              CAMERON
               Very little.

                              FERRIS' VOICE
               How do you feel?

                              CAMERON
               Shredded.

                              FERRIS' VOICE
               Is your mother in the room?

     Cameron takes the thermometer out of his mouth.

                              CAMERON
               She's not home. Where are you?

                              FERRIS' VOICE
               Home.

 24  INT. FERRIS' FAMILY ROOM. FERRIS                             24

     Ferris is sprawled out in the chair.

                              FERRIS
               I'm taking the day off. Get
               dressed and come over.

                              CAMERON'S VOICE
               I can't. I'm sick.

                              FERRIS
               It's all in your head. Come on over.

 25  INT. CAMERON'S ROOM                                          25

     Cameron's insistant.

                              CAMERON
               I feel like complete shit, Ferris.
               I can't go anywhere.

                              FERRIS' VOICE
               I'm sorry to hear that. Now, come
               on over and pick me up.

     Ferris disconnects. Cameron slowly hangs up the phone.

                              CAMERON
               I'm dying.

     The phone rings again. Cameron hits the speaker button.

                              FERRIS' VOICE
               You're not dying. You just can't think
               of anything good to do.

 26  INT. FERRIS' FAMILY ROOM                                     26

     Ferris hangs up.

                              FERRIS
               If anybody needs a day off, it's
               Cameron. He has alot of things to
               sort out before he graduates. He
               can't be wound this tight and go
               to college. His roommate'll kill
               him. I've come close myself. But I
               like him. He's a little easier to
               take when you know why he's like he
               is. The boy cannot relax. Pardon
               by French but Cameron is so tight
               that if you stuck a lump of coal up
               his ass, in two weeks you'd have a
               diamond.
                          (after-thought)
               And Cameron would worry that he'd
               owe taxes on it.

 27  INT. SCHOOL. HALLWAY                                         27

     We hear roll call as CAMERA MOVES ACROSS the tile floor. A
     shoe's POV.

                              TEACHER'S VOICE
               Albers?

                              BOY'S VOICE
               Here.

                              TEACHER'S VOICE
               Anderson.

                              GIRL'S VOICE
               Here.

     CAMERA enters a classroom. It travels past a teacher's Hush
     Puppies and heads up an aisle of desk past dirty yellow
     Reebocks, rotting Air Jordans, scuffed heels, pristine
     loafers...

                              TEACHER'S VOICE
               Anheiser?

                              BOY'S VOICE
               Here.

                              TEACHER'S VOICE
               Busch?

                              GIRL'S VOICE
               Here.

                              TEACHER'S VOICE
               Bueller?

     CAMERA reaches the last desk and rises slowly to reveal that
     it's empty.

                              TEACHER'S VOICE
               Bueller?

                              GIRL'S VOICE
               He's sick.
                          (pause)
               My best friend's sister's boyfriend's
               brother's girlfriend heard from this
               guy who knows this kid who's going
               with a girl who saw Ferris pass-out
               at 31 Flavors last night. I guess
               it's pretty serious.

                              TEACHER'S VOICE
                          (weary)
               Thank you, Simone.

                              GIRL'S VOICE
                          (cheery)
               No problem whatsoever.

                              TEACHER'S VOICE
               Drucker?

                              BOY'S VOICE
               What?

     WOUND-OUT CAR ENGINES COME UP LOUD.

 28  CU. TV                                                       28

     THE ROAD WARRIOR is playing on video cassette. The big chase
     at the end.

     INT. FAMILY ROOM. FERRIS

     He's sitting in the arm chair pretending it's Humongous' war
     wagon. He's wearing a hockey mash. He's steering. He reaches
     down and grabs an imaginary nitrous oxide valve.

     CU. TV

     Humongous reaches down and grabs a real nitrous oxide valve.
     He gives it a twist.

     CU. FERRIS

     He throws himself back against the chair.

     CU. TV

     The force of the rapid acceleration of his vehicle throws
     Humongous back in his seat.

     CU. FERRIS

     He bounces himself in the chair to simulate the bumpy high
     speed ride.

     CU. TV

     The was wagon hurtles down the road.

     CU. FERRIS

     He rears back in horror.

     CU. TV

     The war wagon is heading for a head-on collision with the
     tanker truck.

     CU. FERRIS

     Arms outstretched, head thrown back, braced for collision.

     CU. TV

     IMPACT!

     MOZART COMES UP.

 29  CU. FLOWERING TREE BRANCH                                    29

     Outside a bedroom window. A flowering crabtree branch.
     Petite pink flowers. WE PULL BACK FROM THE WINDOW INTO THE
     ROOM. It's Jeanie's room. A pink and powder blue pig pen.
     Clothes everywhere, make-up, books, records. Ferris is
     sitting on her bed going through a purse.

                          FERRIS
               This is really degrading.

     He comes up with a crumpled dollar bill.

                              FERRIS
               Financing my activities this way.
               Very damaging to the self-image.
               But, hey, I'm broke. In times of
               crisis one must to what one must
               to. I'll pay it back. With interest.

     He comes up with a five.

                              FERRIS
               Regardless of how much shit sisters
               make you eat, how often they rat on
               you, how gross they act or how wicked
               and insensitive they can be, you should
               not alientate them. Because most likely
               they have cash and it's usually very easy
               to get your hands on.

     He holds up a twenty and snaps it. PINK FLOYD'S "MONEY"
     COMES UP.

 30  INT. LIVING ROOM                                             30

     The song plays as Ferris digs through the sofa cushions.

     CU. SOFA

     Ferris extracts a sticky quarter from a crevice.

 31  INT. PARENTS' BEDROOM                                        31

     Ferris is going through his father's pants pockets. Another
     crumpled bill surfaces.

 32  CU. WASHING MACHINE TOP                                      32

     A couple of stiff, hard, bleached singles that have gone
     through the wash lay on top of the washer. A hand scoops
     them up.

 33  CU. LUCITE ENCASED PROOF SET                                 33

     An obvious gift from a grandparent. A U.S. Mint proof set. A
     ten, a five and a single enclosed in a lucite frame. A
     screwdriver tip wedges between the two pieces of Lucite and
     pops them apart. A hand peels the bills off the backing.

 34  CU. KITCHEN DRAWER                                           34

     Hands ripping through the kitchen junk drawer. Locating a
     dollar bill.

 35  CU. COIN COLLECTION                                          35

     The familiar blue collector's album. One-by-one, the
     quarters are being popped out of their slots.

 36  CU. VACCUUM CLEANER                                          36

     The dusty, dirty contents of the bag are emptied on the
     floor. Fingers pick a dime out of a matted wad of filth.

 37  CU. SNOOPY BANK                                              37

     It's being shaken furiously.

 38  CU. BIRTHDAY CARD                                            38

     It's a child's card. It's slowly opened to reveal a crisp,
     new five.

 39  INT. HALL CLOSET                                             39

     The door opens and Ferris thrusts his hands into the pockets
     of the coats. He comes up with a ball of Kleenex. A roll of
     Tums. A squirt gun. Then a modest wad of bills. His face
     lights up as he counts out the cash. He closes the door.

 40  CU. FLOOR AND BED                                            40

     Ferris' face appears between the bed and the floor. His arm
     reaches out for a small metal bank hidden under the bed.

 41  CU. BANK                                                     41

     It's on a work bench. An awl is driven in between the door
     and the jamb. It pries the door open. Inside are trading
     cards, a charred doll's head, a Zippo lighter and, finally,
     a five dollar bill.

 42  INT. KITCHEN                                                 42

     Ferris is on his hands and knees under the kitchen table.

 43  CU. TABLE LEG                                                43

     Ferris lifts the leg and removes a quarter that's been used
     to balance the table.

 44  INT. KITCHEN                                                 44

     Ferris stands up and pockets the quarter.

 45  CU. FERRIS' BED                                              45

     A shower of coins and bills rain down on the sheets. The
     SONG ENDS.

 46  EXT. REAL ESTATE OFFICE. MORNING                             46

     A suburban realty company. A cute little building in town.

 47  INT. OFFICE                                                  47

     Joyce is behind a desk. Across from her are two WOMEN.
     They're also real estate agents.

                              JOYCE
               No one's going to consider a
               house with a black living room.
               Not even those jerks from Vermont.
               Let's be realistic.

                              AGENT 1
               Mrs. Volbeck's dead set against
               putting any money into the house.

     Joyce's phone intercom buzzes. She take the call.

                              JOYCE
               Joyce Bueller.

     Her eyes open wide with alarm.

                              JOYCE
               Oh, my God. I'm so sorry. I
               completely forgot to call.

 48  EXT. HIGH SCHOOL                                             48

     A modern, suburban high school.

                              MAN'S VOICE
               Are you aware that your son is not
               in school today?

 49  INT. SCHOOL. HALLWAY                                         49

     It's a passing period. The hall is clogged with students.

                              JOYCE'S VOICE
               Yes, I am. Ferris is home sick. I
               had a meeting first thing this
               morning. I should have called. It
               completely slipped my mind.

 50  INT. SCHOOL. DEAN'S OUTER OFFICE                             50

     A SECRETARY is at work at her desk. We hear the dean inside
     the office.

                              DEAN'S VOICE
               Are you also aware that Ferris does not
               have what we consider an exemplary
               attendance record?

 51  INT. DEAN'S OFFICE. CU. DESK SIGN                            51

     It reads, EDWARD R. ROONEY. DEAD OF STUDENTS. The dean's
     feet are up on the desk, behind the sign. Moderately priced
     dress shoes.

                              JOYCE'S VOICE
               I don't understand.

                              DEAN'S VOICE
               I just had his file up.

     INT. OFFICE. CU. DEAN

     ED ROONEY is sitting behind his desk. He's tough, clean and
     straight as an I-beam. Short, neatly combed hair, suit and
     tie. He's toying with a pencil. He's confident to the point
     of arrogance.

                              ROONEY
               I just has his file up, Mrs. Bueller.

     Behind him is a computer terminal. He removes his feet from
     the desk and turns in his swivel chair.

                              ROONEY
               If Ferris thinks he coast this last
               month and still graduate, he's sorely
               mistaken.

                              JOYCE'S VOICE
               This is all news to me.

     CU. COMPUTER MONITOR

     The monitor on Rooney's desk displays Ferris' records.

                              ROONEY'S VOICE
               So far this semester alone, he's been
               absent nine times. Including today.

                              JOYCE'S VOICE
               Nine times?

     Under DAYS MISSED we see a number 9 suddenly change to a
     number 2.

     INT. OFFICE

     Rooney turns to the monitor. He reads off the screen.

                              ROONEY
               I have it right here in front of me. He's
               missed...

     He looks closer at the screen.

 52  INT. FERRIS' ROOM                                            52

     Ferris is at his Macintosh computer. He has his record up
     on the screen.

                              FERRIS
               I wanted a car. I got a computer. How's
               that for being born under a bad sign?

 53  INT. JOYCE'S OFFICE                                          53

     She's still on the phone with Rooney.

                              JOYCE
               I can give you every assurance that
               Ferris is home and that he is, in
               fact, very ill. I debated whether
               or not I should even leave him.
               I can appreciate that at this time
               of year children are prone to taking
               the day off, but in Ferris' case,
               he's truly a very sick boy.

 54  INT. FERRIS' BEDROOM                                         54

     MUSIC BLASTS. SOLO GUITAR.

     CU. SPEAKER

     The grille cloth is throbbing.

     CU. LED METERS

     The meters on the amplifier are totally in the danger zone.

     CU. TV MONITOR

     We see Ferris in his room with a guitar around his neck.
     He's playing.

     CU. VIDEO CAMERA

     A home video camera is capturing Ferris on tape.

 55  INT. CAMERON'S ROOM                                          55

     He's sitting on the edge of the bed buttoning his shirt. He
     sighs deeply and fall back on the bed.

 56  INT. SCHOOL. HALLWAY                                         56

     Jeanie is at her locker during a passing period. A
     GIRLFRIEND comes up to her.

                              GIRL
               I'm really sorry about your brother.

                              JEANIE
               What're you sorry for? I have to live
               with the trouser snake.

                              GIRL
               No, I mean I heard he's really sick.

                              JEANIE
               Who said he's sick.

                              GIRL
               A whole bunch of people. They said
               he's like on the verge of death.

     Jeanie stares incredulously at the girl.

                              GIRL
               This guy in my biology class said
               that if Ferris dies he's giving
               his eyes to Stevie Wonder? He's
               really sweet isn't he?

     She smiles and exits. Jeanie cocks her head in bewilderment.
     She kicks her locker shut.

 57  INT. FERRIS' ROOM                                            57

     He's in bed on the phone.

                              FERRIS
               A sample of my blood was sent
               to Atlanta to the Center for
               Disease Control. I don't know,
               man, I'm bricking heavily.
                          (point to the
                           phone)
               Freshman.
                              (to the phone)
               Did you see Alien? When the guy
               had the creature in his stomach?
               It feels like that.

 58  INT. SCHOOL. HALLWAY                                         58

     A FRESHMAN BOY is on the pay phone. A couple of his BUDDIES
     are standing at his side waiting anxiously for news.

                              BOY
               Goddamn! Are you kidding?

                              SECOND BOY
               What?

                              BOY
               Did you see Alien?

                              SECOND BOY
               No.

                              BOY
               You never rented the video cassette?

     Second boy shakes his head, no.

                              BOY
               Oh. He's really wasted.

                              THIRD BOY
                          (to the Second Boy)
               Who's he talking to?

                              SECOND BOY
               Ferris Bueller. You know him?

                              THIRD BOY
                          (excited)
               Yeah. He's getting me out of summer
               school.

                              BOY
               Anyway, I appreciate you letting us
               know how you're doing. We gotta split.
                          (pause)
               Huh?...Yeah, sure. Hold on.

                              SECOND BOY
                          (to Third Boy)
               Shit. I hope he doesn't die.
               I can't handle summer school.

     The boy snatches a passing GIRL.

                              BOY
               Did you see Alien?

                              GIRL
               Yeah, why?

     He hands her the phone.

                              GIRL
               Hello?
                          (pause)
               Who?
                          (pause)
               Hi, Ferris. How's your bod?
                          (jaw drops)
               Oh, my God! You're dying?
               Is it serious?
                          (pause)
               Shiit! Are you upset?

 59  INT. DEAN'S OFFICE                                           59

     Rooney's comparing his computer monitor to hard copy. His
     SECRETARY is standing over his shoulder.

                              ROONEY
               I don't trust this kid any further
               than I can throw him!

                              SECRETARY
               With your bad knee, you better
               not throw anybody, Ed.

     Rooney stares at her for a long beat.

                              ROONEY
               What's so dangerous about a character
               like Ferris Bueller is that he gives
               the good kids bad ideas. The last thing
               I need at this point in my career is
               fifteen hundred Ferris Bueller disciples
               running around these halls.

                              SECRETARY
               He's very popular, Ed. Sportos, motorheads,
               geeks, sluts, pinheads, dweebies, wonkers,
               richies, they all adore him.

                              ROONEY
               That's exactly why I have to catch him
               this time. To show these kids that the
               example he sets is a first class ticket
               to nowhere.

                              SECRETARY
                          (impressed)
               Ooo. You sounded like Dirty Harry just
               now.

     Rooney looks up at her with a proud smile.

                              ROONEY
               Really?

     He unconsciously does an Eastwood squint.

 60  EXT. FERRIS' HOUSE                                           60

     It's a glorious late spring day. A florist's truck drives
     past the house.

 61  INT. FERRIS' ROOM                                            61

     He's on the telephone. As he speaks he does a little
     MacPainting on his MacIntosh. A Modigliani nude.

                              FERRIS
               Cameron, if you're not over here
               in fifteen minutes, you can find
               a new best friend. I'm serious, man.
               This is bullshit, making me wait
               around the house for you.

 62  INT. CAMERON'S BEDROOM                                       62

     Cameron's back in bed.

                              CAMERON
               I'm sick. I feel like shit. Why can't
               you leave me alone?

                              FERRIS' VOICE
               You're not up for some good times?
               It's a beautiful day. It's almost
               summer. If this was Hawaii, we'd be
               surfing.

 63  INT. FERRIS' ROOM                                            63

     He's growing weary of Cameron's wimpishness.

                              FERRIS
               You want to stay home and try
               to have the shits? Try to barf?
               Try to feel worse?

                              CAMERON'S VOICE
               I don't have to try.

                              FERRIS
               Be a man. Take some Pepto Bismol
               and get dressed. You're boring me
               with this stuff.

     The other phone line rings.

                              FERRIS
               Squeeze you buns for a second. I
               got another call.

     He puts Cameron on hold. He clears his throat and answers
     the second line. He sounds like he's on his last breath.

                              FERRIS
               H--hell-o?

 64  EXT. OFFICE BUILDING. DOWNTOWN                               64

     A LaSalle Street office tower.

                              TOM'S VOICE
               Ferris?

 65  INT. TOM'S OFFICE                                            65

     He's behind his desk. Nice office. Two windows. Herman
     Miller desk and chair.

                              TOM
               You sound miserable.

                              FERRIS' VOICE
               Really? Darn! I thought I was improving.

                              TOM
               Were you sleeping?

                              FERRIS' VOICE
               I was trying to do some homework.

 66  CU. COMPUTER MONITOR                                         66

     A closer view of the rude drawing Ferris is making.

                              FERRIS (OC)
               I'm so worried about falling behind.

     INT. FERRIS' ROOM

     He leans back from the monitor and sips a Coke.

                              FERRIS
               Dad? Can you hold on a second?

                              TOM'S VOICE
               Sure, pal. Are you alright?

                              FERRIS
               Just a little phlegm on the phone.
               Hold on.

     He puts his father on hold.

                              FERRIS
               Cameron? It's my Dad.

                              CAMERON'S VOICE
               Oh, that's just great. Are you busted?

                              FERRIS
               It's completely cool. He's just
               checking up on me. Now, listen to
               me. I'm working on getting some
               heavy bucks out of him. So, the least you
               can do is hurry up and get over here.
               Bye.

     He disconnects and gets his father back. He switches back to
     his sick voice.

                              FERRIS
               Sorry, Dad. The moment before you
               called, I had a chest spasm and I
               blew lung fluid all over the place.
               It was making me ill looking at it.
               But gee, it's sure great of you to call.
               I'm sure there're alot of fathers
               who wouldn't take time out from
               their busy schedules to call a dumb,
               sick teenager.

                              TOM'S VOICE
               Hey, pal, what was I supposed to do?

     Ferris reaches out and hits a key on his computer. The
     screen dumps the drawing.

                              FERRIS
               Give yourself some credit, Dad. It
               was a mammoth gesture. It's like those
               savings bonds you used to give me
               every Christmas.
                          (looks at CAMERA and smiles)
               It was that kind of concern.

     CU. COMPUTER SCREEN

     A message is flashing: "TRANSMITTING DATA".

     INT. FERRIS' ROOM

     He turns away from the computer and puts his feet up on the
     desk. He lights a cigarette.

                              FERRIS
               You had to work hard for the money
               to buy those things, right?

                              TOM'S VOICE
               Not any harder than anybody else.

     Ferris mouths Tom's words as he says them.

 67  EXT. CHICAGO LOOP. DIAMONDVISION SCREEN                      67

     Ferris' drawing suddenly appears on the billboard.
     Pedestrians stop to look.

 68  INT. FERRIS' ROOM                                            68

     He blows a smoke ring.

                              FERRIS
               You work so hard I'll bet you don't
               even remember where those bonds are,
               right?

     Ferris points a finger in the air as a cue to his father.

                              TOM'S VOICE
               Wrong.

     He nods.

                              FERRIS
               Oh, yeah? You're pulling my leg. You're
               just trying to cheer me up.

                              TOM'S VOICE
               Like hell I am. They're in a shoebox
               in my closet.

     Ferris smiles. He looks at CAMERA. He's gotten exactly what
     he wants.

                              FERRIS
                          (to CAMERA, normal
                           voice)
               Was that a class move or what?
               The guy gave it up faster than
               a drunk Catholic girl. I hope my
               kids don't pull this shit on me.
                          (thinks)
               Of course, if they didn't, they'd
               be dumb and abnormal and they'd
               probably never move out of my
               house and I'd have to support them
               until I die. I take it back.
                          (to the phone,
                           sick voice)
               Dad? All this talking has made me
               kind of light-headed. I think
               I better lie down.

                              TOM'S VOICE
               Okay, pal. You take care. I'll
               call you after lunch.

                              FERRIS
               You don't have to, Dad.

                              TOM'S VOICE
               I want to. Bye now.

     He hangs up. Ferris sighs.

                              FERRIS
               You win some, you lose some.

     He turns his desk chair around and gets up.

                              FERRIS
               I'm so disappointed in Cameron.
               Twenty bucks says he's sitting
               in his car debating about whether
               or not he should go out.

 69  INT. CAR. CAMERON                                            69

     He's sitting behind the wheel of his car.

                              CAMERON
               We're gonna get caught. No doubt
               about it.

     He cuts the engine.

                              CAMERON
               I'm not doing it.

     He sits for half a beat.

                              CAMERON
               He'll keep calling until I come
               over.

     He sighs and restarts the engine. Another beat.

                              CAMERON
               Actually, what'll happen is I'll
               get caught. Ferris'll escape.

     Another beat. He stops the engine. A CRASH OF HORROR MUSIC.

 70  CU. DRESSER DRAWER                                           70

     Hands curl around the drawer pulls. The drawer is opened
     slowly, ominously. The hands lift a sweater out. A HERALDIC
     STING as we see a men's magazine beneath the sweater.

     INT. FERRIS' ROOM

     He takes out the magazine. He leafs through the pages for
     the pictorials as he speaks.

                              FERRIS
               Cameron'll go on like that for a
               good thirty minutes. The guy
               is a shellfish when it comes to
               making a decision. The reason
               he doesn't fell good is, he
               worries about everything. He's
               the only guy I know who's deeply
               concerned that when he grows up
               there'll be a critical shortage
               of strategic metals.

     He exits the room.

 71  INT. HALLWAY                                                 71

     Ferris comes out of his room and heads down the hallway.

                              FERRIS
               Cameron's also the only guy
               I know who knows what strategic
               metals are.
                          (waves the magazine)
               Pardon moi.

     He goes into the bathroom. We HEAR THE TOILET SEAT SLAM
     DOWN.

                              FERRIS
                          (sings)
               MAYBE I'M JUST LIKE MY MOTHER,
               SHE'S NEVER SATISFIED...

 72  INT. CLASSROOM. LATER                                        72

     A stunningly beautiful girl, SLOANE PETERSON, is sitting at
     her desk in a history class. She's staring out the window as
     a tweedy MALE TEACHER delivers a dry, dusty lecture.

                              TEACHER
               Roosevelt's health had seriously
               deteriorated by the time he met
               with Churchill and Stalin at Yalta.
                          (sneezes)
               Pardon me.

     The classroom door opens and the school NURSE walks in. For
     a moment, the teacher thinks she's come in because she heard
     him sneeze. She crosses to him and whispers in his ear.

     SLOANE

     She, like the others, watches the nurse curiously.

     INT. CLASSROOM. TEACHER AND NURSE

     The teacher's face drops as he's delivered an obvious piece
     of disturbing news. He nods grimly to the Nurse. She looks
     at the kids.

                              NURSE
               Sloane Peterson?

     SLOANE

     Sits up in her seat.

     NURSE

     She's a picture of compassion and understanding.

                              NURSE
               May I see you outside for a moment?
               There's been an emergency.

     SLOANE

     A smile curls across her lips. As she gathers her books she
     looks to the GIRL next to her.

                              SLOANE
                          (whispers)
               Dead grandmother.

 73  INT. HALLWAY                                                 73

     The Nurse is gently holding Sloane's hand.

                              NURSE
                          (nods solemnly)
               Dead grandmother.

 74  CU. ROONEY                                                   74

     He has a suspicious look on his face.

                              ROONEY
               Dead grandmother?

     INT. DEAN'S OFFICE

     Rooney's at his desk. His secretary is standing across from
     him.

                              SECRETARY
               That's what Mr. Peterson said. I
               had Florence Sparrow notify Sloane.

                              ROONEY
               Who's this girl's going with?

                              SECRETARY
               It's so hard to tell. I see her
               alot with Ferris Bueller.

     Rooney smiles. His suspicions are confirmed.

                              ROONEY
               Could you get me Mr. Peterson's
               daytime number?

     As the secretary starts out of the room, Rooney's phone
     rings. She stops and answers the desk phone.

                              SECRETARY
               Edward Rooney's office.
                          (pause)
               Yes. Can you hold? Thank you.

     She puts the call on hold.

                              SECRETARY
               It's Mr. Peterson.

     Rooney is startled. He thinks for a beat then reaches for
     the phone.

                              SECRETARY
               Do you still want his number?

     Rooney answers her with an annoyed look. She smiles and
     backs out. He punches the phone button.

                              ROONEY
               Ed Rooney.

                              MAN'S VOICE
               Ed? This is George Peterson.

                              ROONEY
               How are you today, sir?

                              MAN'S VOICE
               We've had a bit of bad luck this
               morning as you may have heard.

     Rooney rolls his eyes. It's so obvious it's not Mr.
     Peterson.

                              ROONEY
               I heard. And, gosh, I'm all broken
               up. Huh? Oh, sure. I'd be happy to
               release Sloane. You produce a corpse
               and I'll release Sloane. I want to
               see this dead grandmother firsthand.

     The secretary stops cold in the doorway. She turns to Rooney
     in horror. He covers the phone.

                              ROONEY
                          (whispers)
               It's Ferris Bueller. Nervy litttle
               punk. I'm gonna set a trap and let
               his walk right into it!
                          (to phone)
               That's right. Cart the stiff in and
               I'll turn over your daughter. It's
               school policy. Was this your mother?

     Rooney's other line rings.

 75  INT. SECRETARY'S OFFICE                                      75

     She steps out of Rooney's office and picks up the other
     line.

                              SECRETARY
               Ed Rooney's office.

     Her jaw drops.

                              SECRETARY
               Hold, please.

     She puts the call on hold and hangs up. She hurried into
     Rooney's office.

 76  INT. DEAN'S OFFICE                                           76

     Rooney's chewing out the person on the other line.

                              ROONEY
               I'll tell you want, you don't
               like my policies, you can just
               come on down and smooch by big
               old ugly ass. You hear me?

     The secretary comes in. She's waving her arms furiously.
     Rooney tries to wave her away. He's angry. She stomps her
     foot. Rooney covers the phone.

                              ROONEY
               What!?

                              SECRETARY
               Ferris Bueller's on line two.

     CU. ROONEY'S FOOT

     It freezes in mid-tap.

     CU. ROONEY'S HAND

     The pencils falls from his fingers.

     CU. ROONEY'S FACE

     A mask of horror. He glances at the phone.

     CU. PHONE

     The second line light is flashing.

     CU. ROONEY

     He blinks, cocks his head, twitches.

 77  INT. FERRIS' ROOM                                            77

     He's zipping his pants, fastening his belt. The phone's
     cradled against his shoulder. He speaks in the same voice he
     used on his father.

                              FERRIS
               Mr. Rooney? I'm sorry to disturb
               you at work but I was wondering if
               it would be possible for my sister
               to bring home any assignments from
               my classes that I may need.

 78  INT. DEAN'S OFFICE. ROONEY                                   78

     He's staring blankly ahead.

                              FERRIS' VOICE
               Thank you, sir.

     He nods.

     CU. PHONE

     Rooney's finger gingerly presses the button on the waiting
     call.

     CU. ROONEY

     He winces as he returns to the first call.

 79  INT. FERRIS' HOUSE. KITCHEN                                  79

     Cameron's on the phone in the kitchen. He's doing a deep,
     phoney "father" voice.

                              CAMERON
               You oughta be sorry for Christ's
               sake! A family member dies and
               you insult me. What's the matter
               with you, anyway?

 80  INT. DEAN'S OFFICE. ROONEY                                   80

     He apologies profusely to Cameron. He's perspiring,
     trembling.

                              ROONEY
               I don't know. I thought you were
               someone else. You have to know,
               sir, that I would never deliberately
               insult you. I can't begin to tell
               you how embarrassed I am.

                              CAMERON'S VOICE
               Pardon my French but you're an asshole!

     Rooney nods enthusiastically.

                              ROONEY
               Absolutely! I most certainly am.

 81  INT. KITCHEN                                                 81

     Cameron lays into Rooney.

                              CAMERON
               This isn't over yet, buster. You
               just make sure my daughter's out
               in front of the school in ten
               minutes. Do you read me?

                              ROONEY'S VOICE
               Load and clear, Mr. Peterson.

                              CAMERON
               Call me sir, goddamn it!

                              ROONEY'S VOICE
               Sir.

                              CAMERON
               That's better.

     Ferris strolls into the kitchen to catch the last of the
     conversation. Cameron covers the phone.

                              CAMERON
                          (to Ferris)
               I'm scared shitless, Ferris! What
               is Rooney guesses my voice!

                              FERRIS
               Impossible. You're doing great.

     Cameron sighs and goes back to the phone.

                              CAMERON
                          (clears his throat)
               I don't have all day to bark at you
               so I'll make this short and sweet.

     Ferris gives Cameron an enthusiastic thumbs up.

                              FERRIS
                          (mouths)
               Great!

     Cameron smiles proudly.

                              CAMERON
               I want my daughter out in front
               of the school in ten minutes. By
               herself. I don's want anyone around...

     Ferris smacks Cameron. He's said the wrong thing. He covers
     the phone.

                              CAMERON
               What'd I do?

                              FERRIS
               Out in front my herself? It's too
               suspicious! He'll think something's
               up, moron. Cover it.

     Cameron panics. He holds the phone out to Ferris.

                              CAMERON
               You do it!

     Ferris waves his arms angrily.

                              FERRIS
               Talk!

     Cameron takes a deep breath. He clears his throat and puts
     on his father's voice.

                              CAMERON
               I changed my mind, fella. You be out
               in front with her! I wanna have a
               few words with you!

     Ferris slaps Cameron. The phone flies out of his hand.

 82  CU. ROONEY                                                   82

     He winces as the phone hits the floor with a loud CLONK!
     We HEAR THE BOYS SCRAMBLING TO PICK UP THE PHONE, THEN
     CAMERON CLEARING HIS THROAT.

                              CAMERON'S VOICE
               On second thought, I don't have
               time to talk to you. We'll get
               together soon and have lunch.

     We HEAR A SLAP AND THE CALL DISCONNECTS.

 83  INT. FERRIS' KITCHEN                                         83

     Cameron's rubbing the side of his head.

                              CAMERON
               Why'd you hit me?!

                              FERRIS
               Where's your brain?!

                              CAMERON
               Why'd you hit me?!

                              FERRIS
               Where's your brain?!

                              CAMERON
               Why'd you hit me?

                              FERRIS
               Where's your brain?

                              CAMERON
               I asked you first.

                              FERRIS
               How can we pick up Sloane if Rooney's
               going to be there with her?!

                              CAMERON
               I said for her to be there alone
               and you freaked!

                              FERRIS
               My, God, you're so stupid!
                          (aside)
               I didn't hit you, I lightly slapped
               you.

                              CAMERON
               You hit me. Look, don't ask me to
               participate in your crap if you
               don't like the way I do it!

     Ferris is incredulous at Cameron's stupidity. Cameron's
     anger is intensified by his embarrassment.

                              CAMERON
               I was home, sick. You get me out of
               bed, being me over here, make me
               jeopardize my future, make me do
               a phoney phone call on a dean of
               students, a man who could squeeze
               my nuts into oblivion and then
               you deliberately hurt my feelings.

                              FERRIS
               I didn't deliberately hurt your feelings.

                              CAMERON
               Oh, really?

                              FERRIS
               Yeah, really.

     Cameron glares at Ferris.

                              CAMERON
               Hey, Ferris? Have a nice life.

     He turns and heads out of the room. Ferris sighs.
                              FERRIS
               Cameron?

                              CAMERON
               Stick it up your ass, Ferris.

                              FERRIS
               Cameron, I'm sorry. I didn't mean
               to jam you. It was uncalled for.

     Cameron stops.

                              CAMERON
               You're serious?

     He turns around.

                              FERRIS
               Dead serious.

     Cameron smiles. He appreciates Ferris apology.

                              CAMERON
               Thanks.

                              FERRIS
               You did screw up through, right?
               Not that is was necessarily all
               you fault. Right?

                              CAMERON
                          (suspiciously)
               Why?

                              FERRIS
               To fix this situation, I'm going
               to have to ask you for a small favor.

     Cameron's jaw drops.

 84  INT. GARAGE                                                  84

     The door opens slowly, dramatically as we hear a heraldic
     fanfare. Light streams in to reveal Cameron and Ferris
     looking at the car. Ferris is smiling with excitement and
     awe. Cameron is frowning with trepidation and fear.

     CU. FERRARI STALLION

     The prancing black stallion. We move up from the stallion to
     the erotic red hood of a 1958 Ferrari 250 GTS California.

     CAMERON AND FERRIS

     Cameron's face is ashen. The end of the world is at hand.
     Ferris is in heaven.

                              CAMERON
                          (grim monotone)
               1958 Ferrari 250 GTS California. Less
               than a hundred were made. It has a
               market value of $265,000. My father
               spent three years restoring it. It
               is joy, it is his love, it is his
               passion.

                              FERRIS
               It is his fault he didn't lock the
               garage.

                              CAMERON
               Ferris, my father loves this car more
               than life itself. We can't take is out.

                              FERRIS
               A man with priorities so far out of
               whack doesn't deserve such a fine
               automobile.

                              CAMERON
               He never drives it, Ferris. He just
               rubs it with a diaper.

                              FERRIS
               We can't pick up Sloane in your car,
               Cameron. Rooney'd never believe Mr.
               Peterson drives that piece of shit.

                              CAMERON
               It's not a piece of shit.

                              FERRIS
               It's a piece of shit. Don't worry
               about it. I don't even have a piece
               of shit. I have to envy yours. Look,
               I'm sorry but there's nothing else
               we can do.

                              CAMERON
               He knows the mileage, Ferris. He has
               it tatooed on his wrist.

                              FERRIS
               He doesn't trust you?

                              CAMERON
               No.

                              FERRIS
               Alright, look, this is real simple.
     He puts his arm around Cameron.

                              FERRIS
               Whatever miles we put on it, we'll
               take off.

                              CAMERON
                          (suspicious)
               How?

                              FERRIS
                          (big, proud smile)
               We'll drive home backwards.

     Cameron shakes his head, no.

                              CAMERON
               Forget it. I'm putting my foot down,
               Ferris. You'll have to think of
               something else...

     CU. FERRARI GRILLE

     Cameron's protests are drowned out by the distinctive roar
     of the twelve cylinders.

                              CAMERON'S VOICE
               ...You're not talking me into this
               one. I have to live with the man.
               I'm sorry but...

     The roar of the engine is overtaken by the sound of a
     crowded school hallway.

 85  INT. SCHOOL. JEANIE                                          85

     She comes out of a classroom. She stops as Sloane and Rooney
     walk past. Sloane has her coat on and she's carrying her
     books. Jeanie watches her suspiciously.

 86  EXT. SCHOOL                                                  86

     The Ferrari is parked out in front. The top is down.

 87  INT. FERRARI                                                 87

     Ferris is driving. He's wearing a man's hat and sunglasses.
     Cameron's in the back.

                              CAMERON
               Are you crazy?! Put the top back
               up!

                              FERRIS
               This is perfect top-down weather.
                              CAMERON
               What about Rooney?

                              FERRIS
               Cameron, the more obvious we are,
               the less likely we are to get
               caught.

                              CAMERON
               That makes no sense whatsoever.

                              FERRIS
               The adult mind is a suspicious
               machine.
                          (look around at Cameron)
               Stay down, man.

     Cameron squeezes himself lower.

                              CAMERON
               Howcome it's my Dad's car and
               I'm taking all the risk and I have
               to ride back here?

                              FERRIS
               I don't have an explanation.

 88  EXT. SCHOOL                                                  88

     Rooney and Sloane come out the door.

                              ROONEY
               Once again let me say how deeply
               saddened I am by your loss.

                              SLOANE
               Huh?

                              ROONEY
               Were you close to your grandmother?

                              SLOANE
               Oh. Um. Yeah. Very. She was a terrific
               lady. Very hip. Very old. Yeah.

                              DEEP VOICE
               Oh, Sloane! Dear!

     Sloane looks across at the Ferrari. Rooney looks.

     THEIR POV

     Ferris is looking out across the roof of the Ferrari. He's
     careful to keep his nose and mouth below the roofline.

                              FERRIS
               Hurry along now!

     EXT. SCHOOL

     Rooney's suspicious. Sloane smiles and bids Rooney a hasty
     farewell.

                              SLOANE
               I guess that's my Dad. Thanks.
               See ya.

     She hurries to the car. Rooney watches her. Something does
     compute for him.

 89  INT. SCHOOL. JEANIE                                          89

     She's watching out the door. She sees the Ferrari pull away.

 90  EXT. SCHOOL. ROONEY                                          90

     He can't quite put his finger on what's bothering him.

 91  INT. FERRARI                                                 91

     Sloane shrieks with delight. She leans across the console
     and gives Ferris a kiss.

                              SLOANE
               This is so great! I can't believe
               it! Right in front of Rooney!

     She laughs and turns to Cameron.

                              SLOANE
               Hi, Cameron. You comfortable?

                              CAMERON
               Hi. No.

                              SLOANE
               What a fabulous car!

                              CAMERON
               Enjoy it quick. It' s going home.

                              FERRIS
               It was risky, it was bold but
               it was totally necessary.

                              SLOANE
               What're we gonna do?

                              FERRIS
               The question isn't "what are we
               gonna do", the question is "what
               aren't we going to do."

                              CAMERON
               Don't tell me we're not going to
               take the car home. Please.

                              FERRIS
                          (to CAMERA)
               If you had access to a car like this
               would you take it back right away?
               Would you give up feeling like a
               ton just to ease your best friend's
               tension?

     He smiles.

                              FERRIS
               Either would I.

 92  EXT. STREET. FERRARI                                         92

     It accelerates away like a shot.

 93  EXT. SUBURBAN BANK                                           93

     A fresh, modern bank building. The clock outside read 9:53.
     The Ferrari pulls into the parking lot.

 94  INT. BANK. DOORS                                             94

     Ferris, Cameron and Sloane walk in. Ferris is cocky and
     confident. Sloane's still intoxicated with her freedom.
     Cameron's having stomach trouble. Ferris leads the way to an
     open teller window.

     INT. BANK. TELLER

     A WOMAN about seventy with a silver blue beehive. It's about
     four inches higher the highest beehive you're ever seen. As
     she moves the beehive hits a small sign over her head. She's
     been at the bank since they opened. She smiles when she sees
     Ferris.

                              TELLER
               Ferris Bueller?

     FERRIS

     He's at the window. On either shoulder are Cameron and
     Sloane. Ferris smiles. Cameron blanches.

                              FERRIS
               Hello, Mrs. Froeling. How are you?

     TELLER

     She pats the rock-solid mass of blue hair. In doing so she
     locates a missing ball point pen. She withdraws it from the
     hair and smiles at it's reappearance.

                              TELLER
               I passed a kidney stone Tuesday, so
               I'm a little pooped but other than
               that, I'm as chipper as can be.
                          (something occurs to her)
               Say, should you be in school?

     FERRIS

     He lays his savings bonds on the counter.

                              FERRIS
               Me?
                          (polite laugh)
               I'm out of school, Mrs. Froeling.
               In fact. I'm married. This is my
               wife...Madonna.

     Sloane suppresses a laugh.

                              FERRIS
                          (to Cameron)
               And this is my brother-in-law,
               ZZ Top. ZZ, this is Mrs. Froeling.

     Cameron isn't amused.

                              TELLER
                          (to Cameron)
               Is Top a Slavic name?

                              CAMERON
               Yeah.

                              FERRIS
               I'd like to cash these in, please.
               We're having a baby and we need the
               cash for a crib, clothes, diapers,
               food pellets, leash, water dish...

     INT. BANK. TELLER WINDOW

     Mrs. Froeling takes the bonds with a hearty smile. The
     latter part of the conversation sails over her like a line
     drive.

                              TELLER
               A baby!
                          (to Sloane)
               You must be so excited.

     Cameron groans and turns away from the sham.

                              SLOANE
               I'm thrilled, ma'am. I'm especially
               looking forward to wearing those
               jeans with the stretch panel in
               front.

     Mrs. Froeling thumbs through the bonds.

                              TELLER
               Are you hoping for a boy or
               a girl?

                              SLOANE
               Actually, we're hoping for a car.

     CU. CAMERON

     He's spooked by the games playing. He scans the bank
     nervously. He blinks, focuses, blinks again.

     HIS POV

     Joyce is with a MIDDLE-AGED COUPLE and their bored,
     sour-puss teenage son, BOYD. He's sitting in a chair with
     his legs slung over the sides waving a Bic lighter back and
     forth across his rump. The parents are Joyce's clients from
     Vermont. A LOAN OFFICER is discussing the local financing
     situation with them. His is an open office adjacent to the
     teller windows. Joyce's back is to the tellers.

     CU. CAMERON

     It's like he's just witnesses an ax murder.

                              CAMERON
               Shit...

     INT. BANK. JOYCE

     Her back is to the teller windows. She's conducting her
     meeting. Behind her we see Cameron grab Ferris and point her
     out to him. He waves. Cameron slaps his arm.

     INT. BANK. TELLER WINDOW

     Mrs. Froeling shows Ferris the savings bonds.

                              TELLER
               These bonds aren't mature. If you hold
               onto them another two years you'll get
               an additional four dollars...

                              FERRIS
               I'm aware of that.

                              TELLER
               You're throwing away four dollars.

                              FERRIS
               No, ma'am, I'm giving it to the
               government. They need it. Do you
               know what an aircraft carrier's
               going for these days?

     INT. BANK. JOYCE

     She concludes her meeting. She shakes hands with the loan
     officer and stands. The Vermont Couple stands. Boyd scrapes
     the bottom of his shoe on the desk, leaving a glob of mud
     behind and he stands. Joyce turns into the bank. Ferris,
     Cameron and Sloane are gone. She escorts her customers out.

     INT. BANK. DOOR

     Joyce and the Vermont Couple approach the doors. Boyd lays a
     luggie in the drinking fountain. Mrs. Froeling passes with
     the savings bonds. She stops when she sees Joyce.

                              JOYCE
               Mrs. Froeling, how are you?

                              MRS. FROELING
               I passed a kidney stone Tuesday.
                          (shifts gears, to Joyce)
               Say, you must be very proud.

     Joyce doesn't know what she's talking about.

                              MRS. FROELING
                          (whispers)
               I met Madonna.

     She pats Joyce on the arm.

                              MRS. FROELING
               She told me everything. Keep me posted,
               I'll want to send a gift.

     She toodles on her way. Joyce and the Vermont Couple are
     completely baffled.

 95  EXT. BANK                                                    95

     Joyce and the Vermont Couple walk along the side of the
     bank, heading for the parking lot. Boyd's tagging along
     behind. He picks up a stone and hurls it into the parking
     lot.

                              JOYCE
               My son's home sick today. If
               you wouldn't mind, on our way
               back to the office, I'd like
               to just run in and check up on him.

     We HEAR A METALLIC PING! as Boyd's missle hits a car.

                              MOTHER
               Of course.

     They pass a show window. As they pass, we hold on the
     window. It's promoting saving for college educations. A
     mannequin father is congratulating his mannequin son in a
     mortar and gown as a stiff Sloane, Ferris and Cameron look
     on proudly.

 96  INT. DEAN'S OFFICE                                           96

     His secretary is dialing a number for him.

                              SECRETARY
               This is the Peterson's home.

     She hands the phone to Rooney.

                              SECRETARY
               Watch your mouth this time.

     Rooney glares at her.

                              ROONEY
               Ferris Bueller's behind this. There's
               no doubt in my mind. That's what I was
               saying this morning. Why he has to be stopped.
               He's got Sloane Peterson involved in this
               thing now. See?

     The secretary nods.

                              SECRETARY
               And her grandmother, too.

 97  CU. PHONE ANSWER MACHINE                                     97

     It clicks on. We hear a grieved woman's voice. It sounds an
     awful lot like Sloane.

                              SLOANE
               We can't come to the phone right now.
               We've had a death in the family. If
               you need to reach us we'll be at
               the following number...

 98  INT. DEAN'S OFFICE                                           98

     Rooney quickly takes down a number.

 99  EXT. CAMERON'S HOUSE                                         99

     His answering machine clicks on. We hear Cameron's voice.

                              CAMERON'S VOICE
               You have reached the Coughlin Bros.
               Mortuary. We are unable to come to
               the phone right now but if you'll leave
               your name and number...

100  INT. DEAN'S OFFICE                                          100

     Rooney hangs up the phone.

                              ROONEY
               Something's going on, goddamn it.

     The secretary's looking at a newspaper on Rooney's desk.
     She's not listening to him.

                              SECRETARY
               There's a railroad strike.

                              ROONEY
               And I'm going to stop it!

                              SECRETARY
               My brother-in-law'll appreciate it.

     Rooney looks at her, puzzled.

                              ROONEY
               What?

                              SECRETARY
               My brother-in-law rides the train
               to work.

     Rooney stares at her like she's crazy.

                              ROONEY
               Who gives a good goddamn?

101  EXT. EDENS EXPRESSWAY                                       101

     The major thoroughfare into the city of Chicago from the
     suburbs. The Ferrari streaks past. In the distance we see
     the Sears Tower, the Hancock Building and the Standard Oil
     Building.

102  INT. SCHOOL. HALLWAY                                        102

     Jeanie's walking down the hall. She's stopped by a KID with
     a Coke can.

                              KID
               Yo. We're collecting money to
               buy Ferris Bueller a new kidney.

     Jeanie stares at him. She's flabbergasted at the proportions
     her brother's scan has reached.

                              KID
               They run about fifty g's so it
               you could help out...

                              JEANIE
               Go piss up a flagpole!

                              KID
               Huh?

     She knocks the can out of his hands and storms down the hall.
     The kid yells after her.

                              KID
               Hey, babe! Some day you might
               need a favor from Ferris Bueller!
               Then where'll you be?!

     He reaches for the can.

                              KID
               Heartless wench...

103  EXT. CHICAGO LOOP. PARKING GARAGE                           103

     The Ferrari pulls into a large parking garage.

     EXT. GARAGE

     Ferris, Sloane and Cameron get out. Cameron's having fits.

                              CAMERON
               We can't leave the car here!

                              FERRIS
               Why not?
                              CAMERON
               Because we can't! I want it back
               home where it belongs!

                              SLOANE
               What could happen to it?

                              CAMERON
               It could get stolen, wrecked, scratched,
               you name it.

                              FERRIS
               I'll give the guy a five to watch it.

                              CAMERON
               What guy?

     CU. PARKING ATTENDANT

     He smiles with relish at the car. 6'6", 240. An IQ that
     equals his hourly wage. Shoulder-length hair stuffed into a
     hairnet Gold teeth. Earring. Goatee.

     EXT. PARKING LOT

     The Attendant swaggers over to the car. Ferris slips him a
     give.

                              FERRIS
               You speak English?

                              ATTENDANT
               Since I was three.

                              FERRIS
               Great. I want to you take extra special
               care of this vehicle, okay?

     He pats the Attendant on the arm. He smiles.

                              ATTENDANT
               Like it's a beautiful woman.

                              FERRIS
               I appreciate it.

     The Attendant very gingerly gets into the car. Ferris turns
     to Cameron. The Ferrari pulls into the lot very slowly, very
     carefully. No squealing tires, no revving engine.

                              FERRIS
               See what a finski can do to
               a person's attitude? He's going
               to treat it like a beautiful
               woman.

                              CAMERON
               Yeah, sure. Whip it with a stick
               and piss on the hood.

                              SLOANE
               Oh, please, Cameron. Do you have to
               be so graphic?

     She heads down the street.

                              SLOANE
               This is so right!

     Ferris nudges Cameron on. They exit the garage and head
     after Sloane. A long beat and the Ferrari creeps down the
     exit ramp of the garage. It's gone in the entrance and out
     the exit. Another attendant jumps in the passenger side.
     He's skinny, tall, with a huge knit hat willed with dreads.
     He lets out a spirited laugh and the Ferrari peels out of
     the lot. It heads down the street away from Sloane, Ferris
     and Cameron.

104  EXT. FERRIS' HOUSE                                          104

     Joyce's care pulls in the driveway. She gets out and heads up
     the house.

105  INT. FERRIS' ROOM                                           105

     It's dark. There's a figure in the bed. We hear soft
     snoring. A wire runs from under the bed covers to the closet
     door to the door to the room itself.

     INT. ROOM. DOOR KNOB

     The wire is tied to the doorknob. It's taut. Downstairs, we
     hear a door open and close.

106  INT. HOUSE. STAIRWAY                                        106

     Joyce quietly walks up the stairs.

107  INT. HOUSE. HALLWAY                                         107

     Joyce comes up the stairs and crosses to Ferris' room. She
     listens at the door. WE HEAR THE SNORING.

     CU. DOORKNOB

     Joyce slowly turns the doorknob and pushes the door open a
     crack.

     HER POV

     The door opens and the figure-like lump in the bed moves.

     CU. JOYCE

     She smiles and closes the door.

108  INT. ROOM. CLOSET                                           108

     The closet door is open. The wire from the bedroom door is
     strung over the top of the closet door. A trophy is attached
     to the end of the wire and it's resting on a yard stick. As
     the bedroom door closes, the trophy lifts up off the
     yardstick and the lump in the bed goes back down to it's
     original position.

     CU. FERRIS' SYNTHESIZER

     Little LED's are lighting up to the rhythm of the snoring.
     The snoring it simulated.

109  INT. HALLWAY                                                109

     Joyce listens at the door another beat. She's smiles with
     relief and affection.

110  EXT. SEARS TOWER. LATER                                     110

     HELICOPTER SHOT moves in on the world's tallest building. As
     it passes we see three figures pressed against the windows.

                              FERRIS (VO)
               This is the world's tallest building.
               From our vantage point here on the
               103 floor, we are provided with a
               view of four states.

                              CAMERON (VO)
               Do you think the car's alright?

                              FERRIS (VO)
               Illinois, Michigan, Wisconsin and
               my personal favorite, Indiana.

111  INT. SEARS TOWER OBSERVATION DECK                           111

     Ferris, Cameron and Sloane are standing against the window.

                              CAMERON
               I don't feel good, Ferris. Are
               we gonna stay long?

                              FERRIS
               Take a step back...

     Ferris steps back. Sloane and Cameron follow suit.

                              FERRIS
               Now, lean against the glass. Like
               this...

     He leans forward, putting all his weight on his forehead.

                              FERRIS
               And look down.

     Sloane leans forward. Cameron follows, reluctantly.

                              SLOANE
               Oh, shit!

     HER POV

     The street far, far below. A dizzying view.

     INT. OBSERVATION DECK

     The three are leaning against the glass.

                              SLOANE
               What if the glass gives?

                              FERRIS
               Death.

                              SLOANE
               Cool.

     CU. CAMERON

     He's looking down.

                              CAMERON
               I think I see my Dad.

112  EXT. STREET LEVEL                                           112

     A middle-aged man, Cameron's father, HORACE FRYE, is
     standing on the street corner. He's lean, clean, tough and
     humorless. He's wearing a puzzled look on his face.

                              CAMERON'S FATHER
               I think I see my car.

     HIS POV

     The Ferrari screams down the avenue and disappears down the
     underground ramp.

113  INT. SEARS TOWER LOBBY                                      113

     Ferris and Sloane bound down the escalator. Cameron follows
     glumly. They dance past the giant Calder mobile. They're
     singing.

                              FERRIS AND SLOANE
               I BEEN ALL 'ROUND THIS GREAT BIG WORLD
               AND I'VE SEEN ALL KINDS OF GIRLS
               YEAH, BUT I COULDN'T WAIT TO GET
               BACK IN THE STATES
               BACK TO THE CUTEST GIRLS IN THE WORLD
               I WISH THEY ALL COULD BE CALIFORNIA
               I WISH THEY ALL COULD BE CALIFORNIA

114  EXT. STREET                                                 114

     Ferris and Sloane burst out the doors garnering the annoyed
     stares of the business people busily going in and out of the
     building. Cameron politely waits his turn to exit. Ferris
     and Sloane head down the street. Cameron follows.

                              FERRIS AND SLOANE
               I WISH THEY ALL COULD BE CALIFORNIA GIRLS!

115  EXT. CHICAGO MERCANTILE EXCHANGE                            115

     Giant old monolith.

116  INT. CHICAGO MERCANTILE EXCHANGE. TRADING ROOM              116

     Traders are frantically buying and selling commodities.

117  INT. GALLERY                                                117

     Ferris, Cameron and Sloane are sitting in the gallery
     watching the proceedings.

                              SLOANE
               Do you love me?

                              FERRIS
               Do you love me?

                              SLOANE
               I asked you first.

                              FERRIS
               Yes. You?

                              SLOANE
               Yes.

                              FERRIS
               Would I trash a day of education to
               be with you if I didn't love you?

                              SLOANE
               Yes.

                              FERRIS
               Would I risk damaging a deep and
               wonderfully enriching relationship
               with my parents if I didn't love you?

                              SLOANE
               Yes.

                              FERRIS
               Would I have introduced you as my wife
               if I didn't love you?

                              SLOANE
               Wait a minute. That was a lie.

                              FERRIS
               True.

     Ferris puts his arm around Sloane.

                              FERRIS
               Would you want to get married? I
               mean if I wasn't an asshole.

                              SLOANE
               Sure.

                              FERRIS
                          (serious)
               Today?

     Sloane stares at him. Is he serious.

                              FERRIS
               I'm game.

                              SLOANE
               No way!

                              FERRIS
               I'll do it, if you will.

     Cameron suddenly adds his two cents.

                              CAMERON
               You need a blood test.

     Ferris looks around at him.

                              FERRIS
               Huh?

                              CAMERON
               If your blood's not compatible,
               you could produce a pinhead. The
               state requires a blood test.

                              FERRIS
               So?

                              CAMERON
               So, you can't get married today.

                              FERRIS
               Tomorrow?

                              CAMERON
               If you get a blood test today.

                              SLOANE
               I'm not getting married.

                              CAMERON
               I'm with you, babe.

                              FERRIS
               Why not?

                              SLOANE
               What do you mean, why not? Think
               about it.

                              FERRIS
               Besides being too young and your
               father hating my guts and not
               having any place to live and feeling
               awkward about being the only cheer-
               leader with a husband, give me a
               good reason why not.

                              CAMERON
               I'll give you two. My mother and
               father.

     Ferris and Sloane look at him curiously.

                              CAMERON
               They're married and they hate each other.
                          (to Ferris)
               You've seen them. Am I right?

                              FERRIS
               You're father's a toad and your
               Mom's always wired out, but so what?
               They're old. That's natural.

                              CAMERON
               It makes me puke. Seeing people
               treat each other like that. It's
               like the car. He loves the car.
               He hates his wife.

                              SLOANE
               My parents are divorced. So what?
               It's not like it doesn't happen
               ten thousand times a day.

                              CAMERON
               Just because it happens doesn't
               make it right. Are you comfortable
               with it?

                              SLOANE
               No. It's not something I can get comfortable
               with. I've tried. Are yours divorced?

                              CAMERON
               They may as well be.

                              SLOANE
               Do you think they're staying together
               because of you?

     Cameron hasn't seen it that way. He shrugs.

                              SLOANE
               Do they like you?

     It hasn't occured to Cameron that his parents might not like
     him. That parental love might not be a given.

                              CAMERON
               Yeah. Sure.

                              SLOANE
               Consider this...my father canned me
               and my brother and my Mom for a
               twenty five year old dipso with fake
               tits. He dropped us like a rock. Everything
               was cool at our house. I thought so.
               We all thought so. Then BLAM! It's over.

                              FERRIS
                          (to CAMERA)
               This is all news to me. She keeps a
               pretty good secret.

                              SLOANE
                          (to Cameron)
               It was pure selfishness. When I have
               a kid, I don't care how much I want
               something, if it's gonna screw-up the
               kid, forget it.

                              FERRIS
                          (to CAMERA)
               She's not lying.

                              CAMERON
               You could change.

                              SLOANE
               Yeah. But I'm gonna try not to.
               I'm gonna think about it. I'm
               gonna try to prevent it.

                              FERRIS
               This is optomism. It's a common
               trait with my age group. Adults
               think it's cute, it's like a charming
               quick that infests youth. But it's
               a cool thing and I think, deep down,
               crusty old shits wish they had some.
               They wish they had her, too.
                          (points to Sloane)
               Sorry. She's taken.

                              CAMERON
               I'd rather not have my family break
               apart, thank you.

                              SLOANE
               Well, you know what? It ain't up
               to you. It's out of your hands.

                              CAMERON
               So, I in other words, I should just
               sit back and watch it crumble?

                              SLOANE
               You're merely an inhabitant in their
               universe.

                              FERRIS
               Frightening choice of words.

                              SLOANE
               They call the shots. When you split
               from them, you call the shots.

                              CAMERON
               So, you're saying I should run away?

                              FERRIS
               No. She's saying it's time for lunch.

                              SLOANE
               What?

                              FERRIS
               Let's go feed Cameron.

     They stand up and head out. Ferris hangs back a moment. He
     cups his hands to his mouth. He yells at the top of his
     voice.

                              FERRIS
               BUY!

     And he exits. Cool and casual.

118  INT. CHICAGO MERCANTILE EXCHANGE.  TRADING FLOOR            118

     It explodes with activity in response to Ferris' shout.
     We HEAR A RADIO ANNOUNCER.

                              ANNOUNCER
               Commodity prices rose sharply today
               in unusually heavy trading...

119  EXT. RESTAURANT                                             119

     A French restaurant on the Gold Coast.  It's noon.

120  INT. RESTAURANT                                             120

     Ferris, Sloane and Cameron are standing in the restaurant.
     Ferris is looking at the maitre 'd's reservations book.

     HIS POV

     His fingers runs down to a party of three for 12:00.

     INT. RESTAURANT

     The maitre'd returns.

                              MAITRE'D
                          (to Ferris)
               May I help you?

                              FERRIS
               Yes. I'm Abe Frohman. Party of
               three for 12:00.

     The maitre'd looks at Ferris curiously.

                              FERRIS
               Is there a problem?

                              MAITRE'D
               You're Abe Frohman?

                              FERRIS
               I'm Abe Frohman.

                              MAITRE'D
                          (chuckles)
               I'm sorry, son. I'm very busy right
               now. If you have trouble finding the
               door...

     Sloane tugs Ferris' sleeve. He ignores her.

                              FERRIS
               Are you suggesting that I'm not
               who I say I am?

                              MAITRE'D
               Shall I call the police?

                              CAMERON
               Let's go...Abe.

                              FERRIS
               I'm not going anywhere.
                          (to the Maitre'd)
               Call the police. Go ahead. Better
               yet...
                          (grabs the phone)
               ...I'll call myself.

     Cameron chokes. Sloane grits her teeth. The maitre'd smiles
     smuggly.

     CU. PHONE

     Ferris punches out a number. A beat and the restaurant's
     second line lights up and the phone rings.

     INT. RESTAURANT

     The maitre'd motions for the phone so that he can answer the
     call. Ferris waves him off angrily.

                              FERRIS
               You touch me and I yell "rat!"
               There's another phone around here.
               Find it.

     The maitre'd backs off.

                              CAMERON
               Ferris, let's split, please?

                              SLOANE
               Cameron's right. We're gonna
               get busted.

                              FERRIS
               Not a chance in the world.

     He hands the phone to Sloane.

                              FERRIS
               Ask for Abe Frohman.

     INT. RESTAURANT. LATER

     Ferris, Sloane and Cameron are seated in the restaurant. The
     maitre'd is hovering over Ferris.

                              MAITRE'D
               I appreciate your understanding.

                              FERRIS
               Don't grovel, Charles. Just leave
               us to our repast and all will be
               forgotten.

                              MAITRE'D
               Enjoy your luncheon.

                              FERRIS
               Thank you.

     The maitre'd backs away. Ferris smiles. Sloane is impressed.
     Cameron is flushed with nerves.

                              FERRIS
               Darling, you were wonderful.

                              SLOANE
               Oh, but I had a wonderful teacher.

                              FERRIS
               Cameron, dear friend?

     Cameron looks to Ferris.

                              FERRIS
               And you thought we wouldn't have
               any fun. Shame on you.

     Ferris disappears behind his menu.

121  EXT. SCHOOL                                                 121

     We HEAR HALLWAY SOUNDS AND JEANIE.

                              JEANIE (VO)
               Ferris Bueller's days are numbered.

122  INT. GIRL'S LOCKER ROOM                                     122

     Jeanie's sitting on a bench in a field hockey uniform. She's
     talking to a FRIEND.

                              JEANIE
                          (mean, vicious)
               I'm gonna bust his buns.

                              FRIEND
               Why? What's the point?

                              JEANIE
               Why? Because I'm sick of the little
               dope. He manipulates my parents, he
               does whatever he wants, whenever he
               wants and he never gets nailed.
                          (wicked pause)
               Well, babe, today I'm the hammer.

     She yanks angrily on the velcro strap on her sneakers. The
     straps rip off in her hand.

                              FRIEND
               I think he's cute.

                              JEANIE
               Sweetie, it's an established fact that
               you have no taste. Ferris is not cute.
               He's not charming. He's not nice. He's
               not a wonderful person. He's an ignorant
               mule and the sooner everybody in this
               school comes to that realization the
               better off we'll all be.

     She displays the velcro straps to her friend.

                              JEANIE
               See? My brother strokes you, you
               sympathize with him, I get pissed
               off and this is what happens!

     Jeanie tosses the straps on the floor.

                              JEANIE
               Let me tell you something. I study
               hard, I work hard, I'm polite, I'm
               considerate, I'm friendly and fair
               to all kinds of people. Except
               morons. I try to be everything a
               good, decent person should be and
               you know what?

                              FRIEND
               Everybody thinks you're an asshole.

     Jeanie freezes with her next sentence pinned to her tongue.

                              JEANIE
               Excuse me?

                              FRIEND
               I don't think you're an asshole.

                              JEANIE
               Who does?

     Her friend smiles sheepishly.

                              JEANIE
               Rachel?

     Jeanie's friend shrugs, wags her head, does everything but
     verbally confirm.

                              JEANIE
               Rachel's a dirt bag. Who else?

                              FRIEND
               I don't know. Just forget it.

                              JEANIE
               Forget that everybody thinks I'm an
               asshole? Would you like everybody to
               think you're an asshole?

                              FRIEND
               Not everybody thinks you're an
               asshole. Mr. Rooney likes you.

                              JEANIE
               Oh, hey. That's exciting. A fat
               fifty year old clod with B.O.
               likes me.

     Jeanie shakes her head in disbelief.

                              JEANIE
               Would everybody be happier if
               maybe I were to die in a flaming
               car accident or something?

                              FRIEND
               Maybe if you didn't cat like and
               asshole...

                              JEANIE
               Am I acting like an asshole?

                              FRIEND
               I didn't mean it that way.

                              JEANIE
               I this a conspiracy to shit all
               over me or something? Is my brother
               behind this? Tell me if he is or I'll
               sock your tits.

                              FRIEND
               You really do have a problem, Jeanie.

                              JEANIE
               Me? I have a problem?

                              FRIEND
               Somebody who threatens to sock people's
               tits has a problem.

                              JEANIE
               Alright. How about if I sock your
               face?

     Jeanie's friend gets up.

                              FRIEND
               Take a walk, Jeanie.

     Her friend exits.

                              JEANIE
                          (yells after her)
               If it means anything to you, I
               have my period! MY BODY'S RIDDING
               ITSELF OF OLD EGGS, GODDAMN IT!

     She snarls and slumps against the lockers.

                              JEANIE
               He's gone. He's over. He's monkey meat.

123  INT. MEN'S ROOM. CHEZ PAUL                                  123

     Ferris is standing at the urinal.

                              FERRIS
               She's a person who views life as
               an ordeal that must be endured. Her
               body is a transport vehicle for her
               anger. I don't know where she gets
               this shit. Basically, the family's
               pretty cool.

     He looks down at the urinal.

                              FERRIS
               I wonder if everybody shoots at
               cigarette butts in urinals? Probably
               not many women.
                          (continues)
               I used to think that my family was
               the only one that had weirdness
               in it. It used to worry me. Then I
               met Cameron and I saw how his
               family functioned.

     He zips this trousers and steps away from the urinal.

                              FERRIS
               Cameron's home life is really shit.
               He wasn't lying. That's why he's sick
               all the time. It really upsets him.
               What he said about his parents hating
               each other? I refuse to sleep over at
               his house. His parents fight all the
               time. Even when I'm there. Is there
               anything worse than being at somebody's
               house when their parents are fighting?
               It's the absolute height of social
               discomfort.

     He checks his hair in the mirror.

                              FERRIS
               When they go after each other, Cameron
               tightens up. It's scary. He gets so
               wadded-up, you couldn't pry his buns
               apart with a crowbar. The thing with
               taking his old man's car? It's good
               for him. It teaches him to deal with
               his fear. Plus, and I must
               be honest here, I love driving it.
               I highly recommend picking one up.

     He exists the men's room. We hold a beat. A toilet flushes.
     Another beat and Tom walks out of the stall. He crosses to
     the sink.

124  INT. RESTAURANT                                             124

     Cameron and Sloane have been served their lunches. They're
     staring at the plates.

                              CAMERON
               What is it?

                              SLOANE
               I don't know. But it looks like
               it's already been eaten and digested.

                              CAMERON
               I knew it was a mistake letting
               Ferris order for us.

     Ferris slides over to the table and drops into his seat.

                              FERRIS
               What are you doing?

     Cameron looks at Ferris.

                              CAMERON
               What is this shit?

                              FERRIS
               You got me. I don't speak French.

     He puts his napkin in his lap and smells his plate.

                              FERRIS
               I think it's a land-based beefoid
               creature.

     He takes a bite. He savors the taste.

                              FERRIS
               Splendid.

                              CAMERON
               Really?

                              FERRIS
               Superb.

     Cameron and Sloane try theirs. They chew tentatively.

                              FERRIS
               Good?

     Sloane and Cameron shrug. It's not bad. A WAITER passes.
     Ferris stops him.

                              FERRIS
               Yo, Clouseau!

     The waiter stops and looks at Ferris indignantly.

                              FERRIS
               I have a growth on my brain that
               causes memory lapses. Could you
               tell me what we ordered here?

     The waiter glances at the plates.

                              WAITER
               Sweetbreads.

                              FERRIS
               Uh, huh. And what might that be?

                              WAITER
               Pancreas.

                              FERRIS
               As in the gland that has important
               functions in digestion and metabolism?

     CU. SLOANE AND CAMERON

     They stop chewing. They're holding their sweetbreads in their
     mouths.

     CU. FERRIS

     He continues his questioning.

                              FERRIS
               ...That secretes a thick, colorless fluid
               containing digestive enzymes? The home
               of the world famous isles of Langerhans?

     CU. WAITER

     He nods broadly, knowing that he's spoiling the kids' meal.

     CU. SLOANE AND CAMERON

     They look at each other.

     CU. FERRIS

     He pats his mouth with his napkin. He looks to Cameron and
     Sloane. He raises a finger, holds it a beat and gives a cue.

     CU. WAITER

     He turns away as Sloane and Cameron spit out their food.

     CU. FERRIS

     He watches Sloane and Cameron then glances at the waiter.

                              FERRIS
               Check, please!

125  EXT. RESTAURANT                                             125

     Tom and his two GUESTS are standing at the curb, talking. A
     cab is waiting. The door's open. In the B.G. Ferris, Sloane
     and Cameron come out of the restaurant. They approach the
     cab. Tom's back it to Ferris. Ferris stops cold.

     FERRIS, SLOANE, CAMERON

     They turns on cue at Tom, now in the B.G., turns toward the
     restaurant.

                              FERRIS
               40,000 restaurants in the downtown
               area and I pick the one my father
               goes to.

                              CAMERON
               We're gonna get nabbed, for sure.

                              FERRIS
               No way, Cameron. Only the meek
               get nabbed. The bold survive.
               Let's go.

     He turns to the cab. Sloane and Cameron turn slowly.

     EXT. STREET. CAB

     Tom and his party are still jawing at curbside. Ferris,
     Sloane and Cameron slowly approach the cab. Behind the backs
     of the men, Ferris scoots Sloane into the cab. Cameron
     dashes in. The Ferris hops the cab.

     INT. CAB

     Ferris slams the door.

     CU. CAB DOOR HANDLE

     A man's hand reaches for the handle as the cab pulls away.

     EXT. RESTAURANT

     Tom and his guests watch in bewilderment at their cab takes
     off. MUSIC COMES UP.

126  EXT. MUSEUM OR SCIENCE AND INDUSTRY                         126

     The grand old Chicago museum.

127  INT. MUSEUM. OVERHEAD SHOT                                  127

     The main gallery is crowded with school kids.

     INT. MUSEUM. FLOOR

     A class of kids walking along holding hands. Among the
     second graders are Ferris, Sloane and Cameron, holding hands
     looking like giant grade schoolers.

     INT. MUSEUM. DISPLAY CASE

     Baby chicks are hatching in a huge, round incubator. Sloane,
     Ferris and Cameron are intently watching the process.

     INT. MUSEUM. COAL MINE

     Sloane, Ferris and Cameron ride in the coal train in the
     coal mine replica. Ferris and Sloane are making out.

     INT. MUSEUM. INDUSTRIAL DISPLAY

     Sloane operates a metal press to produce a tin ashtray.

     INT. MUSEUM. HEART REPLICA

     A giant, walk-thru replica of a human heart. Ferris staggers
     out of it, clutching his heart, feigning a massive heart
     attack.

     INT. GERMAN U-BOAT

     Ferris is examining the controls of the captured U-Boat. He
     checks to see if he's being watched then he presses a button
     and pulls a lever.

     CU. PROPELLER

     For the first time in forty years, the screw turns.

     CU. HUMAN FETUS IN A BOTTLE

     The famous stages of life display which features bottled
     fetuses. The ninth month. A tiny human being in a jar.

     CU. SLOANE, FERRIS, CAMERON

     Sloane wants to cry. Cameron's stomach is in his throat.
     Ferris is lost in thought. The MUSIC ENDS.

                              SLOANE
                          (remorsefully)
               I wonder if he has a name?

                              FERRIS
                          (blank)
               Ninth Month.

128  EXT. CHICAGO RIVER. LONG, HIGH SHOT                        128

     From the Merchandise Mart, looking down the fetid, green
     swath of water. A boat is rolling up the man-made canyon.

                              CAMERON (VO)
               Are you guys worried about nuclear war?

                              FERRIS (VO)
               Cameron, it's a beautiful day, we've
               won our freedom, we're traveling down
               one of American's most scenic polluted
               waterways and you have to bring up
               nuclear war?

                              SLOANE (VO)
               It is kind of raggy subject, Cam.

                              CAMERON (VO)
               Regardless. It's with us every day.
               The possiblity of global destruction.

                              SLOANE (VO)
               Don't you think it's an issue because
               people need something to worry about?
               They have to like, have some major
               problem that puts all their little
               bullshit into some kind of persepective?

                              CAMERON (VO)
               Maybe.

                              FERRIS
               They used to have Viet Nam. They
               used to have the oil crisis stuff
               and Iran. That's over and people
               have to have their big issue. It's
               not like somebody came up with the
               nuclear holocaust yesterday at
               noon, you know.

                              SLOANE (VO)
               To answer your question...No, I'm not
               worried about it at all.

                              FERRIS (VO)
               We don't know when the bombs going
               off. We do know, however, that college
               starts in the fall.

                              CAMERON (VO)
                          (dramatic, deadly serious)
               Do you know what a nuclear winter is?

     Long beat.

                              SLOANE (VO)
               Yeah. Everybody's dead, it's real
               cold and the skiing's for shit.

     The boat makes the turn in the river and CLEARS FRAME.

     EXT. BOAT DOCK

     The three are sitting on the aft deck of the tour boat.
     Their feet are up on the railing. Very casual, very relaxed.
     Discussing the end of the world.

                              SLOANE
               My step-father's always going off about
               how when he was young he was committed to
               all these causes.

                              FERRIS
               He's full of shit. All the old hippies
               are full of shit.

                              SLOANE
               He says I don't care about things like
               he did.

                              FERRIS
               What's he care about now?

                              SLOANE
               Baldness, fatty meats and money.

                              FERRIS
               I rest my case.

                              CAMERON
               What's spooky is they still control
               everything. They took over when they
               were young and they never gave it up.

                              FERRIS
               One of the most frightening experiences
               of my young life has been observing
               my parents and our neighbors playing
               the Baby Boom Edition of Trivial Pursuits.
               It's chilling to see people crazed with
               the minutia of their past.

                              CAMERON
               It's human nature to like what you had
               better than what you have.

                              SLOANE
               Agreed.

     A loud speaker on the boat identifies a point of interest.

                              LOUDSPEAKER
               TO YOUR LEFT IT THE WORLD'S TALLEST
               BUILDING...

     The three look to the left.

                              LOUDSPEAKER, FERRIS,
                              SLOANE, CAMERON
               The Sears Tower.

                              CAMERON
               You know, this is all very interesting
               but I'm starving.

                              FERRIS
               An hour ago you wanted to yack.

                              CAMERON
               I feel better now.

                              FERRIS
               Lean over and grab a fish.

     Cameron looks over the side of the boat. An obtuse thought
     flashes through Sloane's brain.

                              SLOANE
               What comes after a nuclear winter?

                              FERRIS
               Nuclear spring.

129  EXT. SCHOOL                                                 129

     Meanwhile...

130  INT. HALLWAY OUTSIDE THE DEAN'S OFFICE                      130

     Jeanie is having a small moral debate with herself.

                              JEANIE
               It's reprehensible to squeal on
               your own flesh and blood...but it's
               for his own good. His cavalier
               attitude will get him into trouble
               later in life...and it'll continue
               to piss me off and I'll get so
               wadded-up that it'll cause cervex cancer
               and he'll ruin my life. Screw him.

     She slips into the Dean's outer office.

131  INT. DEAN'S OUTER OFFICE                                    131

     Rooney's secretary is behind her desk. Jeanie walks in. The
     secretary looks up and greets her with a weary smile.

                              SECRETARY
               Hello, Jeanie. Who's bothering
               you now?

     Jeanie scowls at her.

                              JEANIE
               Is Dean Rooney in?

                              SECRETARY
               I'm sorry, he's out. Can I help you?

                              JEANIE
                          (condescending)
               I seriously doubt it. When's he back?

                              SECRETARY
               I don't know. He left the grounds
               on personal business.

132  EXT. STREET. CU. CURB                                       132

     A car tire rolls into FRAME and stops. Slide across to the
     sidewalk. Rooney's dress shoe steps out onto the pavement.
     Move up to reveal Rooney standing at the door of his
     bile-green LeBaron. Rooney peels off his shades and looks
     around like he's Dirty Harry. In his mind he is Dirty Harry.

     CU. FIRE HYDRANT

     Rooney's dres shoe on the hydrant. He ties his lace and
     pulls up his sock.

     EXT. STREET

     Rooney straightens his tie and jacket and slips into a rowdy
     hot dog joint.

133  INT. HOT DOG STAND                                          133

     It's jammed with construction workers, secretaries, suburban
     businessmen. It's loud and confusing. Rooney pushes his way
     in and scopes the crowd.

     HIS POV

     A young person is playing a video game in a far corner.

     CU. ROONEY

     He suspects it's Ferris. It look sort of like Ferris. He
     smiles and cuts into the crowd.

     CU. THE BACK OF THE VIDEO PLAYER'S HEAD

     MOVE IN on the player.

                              ROONEY (OC)
               I've been waiting a long time
               for this.

     The player looks up.

                              ROONEY (OC)
               Your ass is mine.

     The player turns around. It's a GIRL.

     CU. ROONEY

     The blood evacuates his face. He stares at the girl.

     CU. GIRL

     She stares at him. She picks up her Coke. She puts the straw
     to her lips and sucks.

     CU. ROONEY

     He's still staring. He can't think of anything to say.

     CU. GIRL

     Holding the straw in the mouth, she draws it out of the cup.
     She raises it, pointing it directly in Rooney's face.

     CU. ROONEY

     He squints

     CU. GIRL

     She blows a strawful of Coke in Rooney's face.

     CU. NAPKIN HOLDER

     A hand yanks a napkin hold.

     INT. HOT DOG STAND. SERVICE COUNTER

     Rooney wipes his face. Behind him is the kitchen and a
     grease-covered TV set broadcasting a Cubs baseball game.
     There's a long foul ball. The TV camera follows the ball
     into the stands. A kid makes a stab at the ball. Rooney
     wipes his suit off. The TV camera zooms in on the boy
     triumphantly holding the foul ball aloft. It's Ferris.
     He does a little celebration dance. Rooney wads up the
     napkin and tosses it in a trashbin. The TV camera returns to
     the game. Rooney glances at the screen.

                              ROONEY
               What's the score?

                              HOT DOG MAN
               Zero to zero.

                              ROONEY
               Who's winning?

                              HOT DOG MAN
               Cubs.

     Rooney nods and exits.

134  EXT. WRIGLEY FIELD. STANDS                                  134

     Ferris sits down with the baseball. He shakes his stinging
     paw. On either side of him are Cameron and Sloane. Cameron's
     scarfing nachos.

                              FERRIS
               I think I broke my thumb.

                              SLOANE
               Can we leave now?

                              FERRIS
               You want to leave? We just got here.

                              SLOANE
               You got a call, you broke your thumb,
               what's left to do?

     Cameron offers his nachos to Sloane. She looks at them with
     disgust.

                              SLOANE
               No wonder you're always sick.

     Ferris leans back, puts his hands behind his head and turns
     his face to the bright sun.

                              FERRIS
               Do you realize that if I played by
               the rules, right now I'd be in gym?

135  EXT. HIGH SCHOOL. PLAYING FIELD                             135

     A boy's gym class is doing laps. A blue Fiat pulls into the
     shot.

136  INT. FIAT                                                   136

     Jeanie's at the wheel. She sneaks a glance at the school.

                              JEANIE
               I can't believe my brother's making
               me put myself in a position where I
               could get expelled. Selfish little
               moron.
                          (pause)
               Ferris? You're overshadowed
               me long enough. I'm gonna get
               you, buddy.

     She puts the car in gear and drives out of the shot.

137  EXT. STATE STREET                                           137

     A parade is underway. Floats and politicians. Marching
     bands, drum and bugle corps, soldiers, school kids. Figure
     skating club in outfits and skates performing their routines
     on pavement. It's GERMAN-AMERICAN APPRECIATION DAY.

     EXT. STATE STREET. FLOAT

     Riding atop on a float is Ferris. He's waving to the crowd.
     He and half a dozen homely German-American Beauty Queens.
     He's leading the girls in singing, "DANKE SHOEN".

     EXT. STATE STREET. SLOANE AND CAMERON

     They're watching Ferris go by. They wave to him.

                              SLOANE
               I love him.

                              CAMERON
               It's hard not to.

     Cameron breaks a smile. As worried as he is about the day
     and getting caught, he has to admire Ferris for his lack of
     inhabitions. Cameron mumbles a few words.

                              CAMERON
               Stop...water...want...

                              SLOANE
               Do you believe in reincarnation?

                              CAMERON
               Huh?

                              SLOANE
               Do you believe that you lived before?

                              CAMERON
               Yeah. Sort of.

                              SLOANE
               DO you ever wonder what you were?

                              CAMERON
               I don't have to wonder. I know.

     Sloane looks at him with amazement.

                              CAMERON
               I was a tractor tire.

     EXT. STATE STREET. FLOAT

     Ferris is on his knees, reaching down from the float,
     shaking hands with people in the crowd.

                              FERRIS
               Guten tag, dude!

     EXT. STATE STREET

     Sloane and Cameron continue their conversation.

                              CAMERON
               What were you in a previous life?

                              SLOANE
               I'm not sure but I think I know
               who Ferris was.

                              CAMERON
               Hannibal.

                              SLOANE
               From the A-Team?

                              CAMERON
               No. The guy who rode the elephants
               into Switzerland.

     Sloane laughs at herself. They step out of the crowd and
     head down the street in the direction the parade's heading.

                              SLOANE
               I think if he was anybody, he
               was Magellan. You know, the guy
               who went around the world.

     Cameron nods.

                              SLOANE
               I could see him ignoring popular
               belief and taking off on some
               impossible mission.

                              CAMERON
               Yeah. As long as I've known him,
               everything works for him. There's
               nothing he can't handle. I can't
               handle anything. School, parents,
               the future. Ferris can do anything.

     EXT. STATE STREET. FLOAT

     Ferris is playing "TWIST AND SHOUT" on the accordian. The
     girls on the float are singing.

                              FERRIS
               WELL, SHAKE IT UP, BABY, NOW!

                              GIRLS
               SHAKE IT UP, BABY

                              FERRIS
               TWIST AND SHOUT!

                              GIRLS
               TWIST AND SHOUT!

                              FERRIS
               COME ON, COME ON, COME ON, BABY ON!
               COME ON AND WORK IT ON OUT!

                              GIRLS
               WORK IT ON OUT!

     EXT. STREET. SLOANE AND CAMERON

     They continue their conversation.

                              SLOANE
               The future's worse for a boy, isn't
               it?

     Cameron doesn't understand what she means.

                              SLOANE
               A girl can always bail out and
               have a baby and get some guy
               to support her.

                              CAMERON
               That's a pretty grim thought.

                              SLOANE
               True, but it's an option. No options
               is worse.

                              CAMERON
               I don't know what I'm gonna do.

                              SLOANE
               College.

                              CAMERON
               Yeah, but to do what?

                              SLOANE
               What are you interested in?

                              CAMERON
               Nothing.

                              SLOANE
               Me either.

     They walk on for a few beats. We HEAR "TWIST AND SHOUT"
     GROWING LOUDER AND LOUDER. The sons is taking over all the
     other tunes in the band. It's infecting the entire parade.

                              CAMERON
               What do you think Ferris is gonna
               do?

     EXT. STATE STREET. MARCHING BAND

     They're playing TWIST AND SHOUT.

     EXT. STREET. MOUNTED POLICE OFFICER

     He's singing.

                              POLICE OFFICER
               YOU KNOW YOU LOOK SO GOOD!

     EXT. STREET. PUNKS

     A band of PUNKS are dancing on the roof of a news kiosk.

                              PUNKS
               LOOK SO GOOD!

     EXT. STREET MOTHER AND HER CHILDREN

     A WOMAN and her two TODDLERS sing along.

                              WOMAN
               YOU KNOW YOU LOOK SO FINE!

                              TODDLERS
               LOOK SO FINE!

     EXT. STREET. BLACK TEENAGER

     He's wearing a shower cap and a maroon overcoat.

                              TEENAGER
               COME ON AND TWIST A LITTLE CLOSER!

     EXT. STREET. OLD NEWSPAPER SELLER

     He singing along.

                              NEWSPAPER SELLER
               TWIST A LITTLE CLOSER!

     EXT. STREET. CHOIR GROUP

     They're marching down the parade. They're singing in their
     angleic voices.

                              CHOIR
               AND LET ME KNOW THAT YOU'RE MINE!

     EXT. STREET. STREET CLEANERS

     With their brooms ready...

                              STREET CLEANERS
               KNOW THAT YOU'RE MINE!

     EXT. STREET. DECK

     The entire parade is singing and playing "TWIST AND SHOUT".

     EXT. STREET. VIEWING STAND

     The POLITICIANS and their WIVES stand up.

                              POLITICIANS AND WIVES
               AH!

     EXT. STREET. VIEWING STAND

     The CLERGYMEN stand.

                              CLERGYMEN
               AH!

     EXT. STREET. VETERANS

     Marching in formation and in WWII uniforms.

                              VETERANS
               AH!

     EXT. STREET. FLOAT

     Ferris leads the Beauty Queens in the rousing finale.

                              FERRIS
               AH!

     EXT. STREET. WIDE AND HIGH

     The entire parade is at frenzy pitch.

                              PARADE
               AHHHHH!

     The SOUND OF THE VOICES blends with the SOUND OF A RED-LINED
     HIGH PERFORMANCE ENGINE.

138  EXT. CALUMET CITY                                           138

     The Port of Chicago. Grim, gritty waterfront. Suddenly,
     Cameron's father's car flies OVER CAMERA. Like the opening
     shot in Star Wars. The Starship Ferrari. SLO-MO.

     CU. FERRARI UNDER-CARRIAGE

     It travels past to reveal a beautiful blue sky. SLO-MO.

     CU. PARKING ATTENDANT

     His eyes are wide with exhilaration. Mouth open, tongue out.
     Maniac at the wheel. SLO-MO.

     CU. RASTAMAN

     His eyes are closed. Big smile. SLO-MO,

     EXT. STREETS. KIDS

     They're looking up in the air, following the car as it flies
     over them. Broad, excited smiles. The car's shadow passes
     over them. SLO-MO.

139  CU. CAR GRILLE                                              139

     It fills the frame and stops. We MOVE UP to reveal Rooney
     behind the wheel of his car.

     EXT. FERRIS' HOUSE

     Rooney gets out of his car. He looks at the house, looks up
     and down the street, then crosses to Ferris' house.

140  INT. HOUSE. FOYER                                           140

     Rooney's at the front door. We see him peek in a window at
     the top of the door. The doorbell rings.

141  INT. HOUSE. FERRIS' ROOM. COMPUTER                          141

     It acknowledges the doorbell.

     CU. CASSETTE PLAYER

     It clicks on.

142  EXT. HOUSE. FRONT PORCH                                     142

     The house intercom activates. We HEAR FERRIS' VOICE.

                              FERRIS
               Who is it?

     Rooney presses the intercom.

                              ROONEY
               This is Ed Rooney, Ferris. I'd
               like to have a word with you.

                              FERRIS' VOICE
               I'm sorry I can't come to the door
               right now. I'm very ill and I'm
               afraid that in my weakened condition,
               I could take a nasty spill down the
               stairs and subject myself to further
               school absenses.

     There's a pause. Rooney presses the intercom again.

                              ROONEY
               B.S. Come down here.

                              FERRIS' VOICE
               You can reach my parents at their
               places of business. Thank you for
               stopping by. I appreciate your concern
               for my well-being. It will be remembered
               long after this illness has past.

     His voice clicks off. Rooney presses the intercom again.

                              ROONEY
               I'm not leaving until you come
               down and talk to me.

                              FERRIS' VOICE
               Have a nice day.

     Rooney presses the intercom.

                              ROONEY
               I'm not leaving, Ferris.

     There's no response. Rooney rings the doorbell again. The
     pre-recorded litany starts over.

                              FERRIS' VOICE
               Who is it?

     Rooney doesn't realize that he's listening to a recording.

                              ROONEY
               Don't get smart with me Ferris!

                              FERRIS' VOICE
               I'm sorry I can't come to the door
               right now. I'm very ill and I'm
               afraid that in my weakened condition...

     Rooney leans back from the door. He can't quite figure out
     what's going on. But's it's highly suspicious.

143  INT. HOUSE. LIVING ROOM                                     143

     Rooney steps through the hedges and peeks in the windows. We
     HEAR FERRIS' VOICE inside.

                              FERRIS' VOICE
               You may reach my parents at their
               places of business.

144  INT. HOUSE. KITCHEN                                         144

     Rooney tries to peak in the kitchen window.

                              FERRIS' VOICE
               I appreciate your conern for my
               well-being. It will be remembered
               long after...

145  EXT. HOUSE. BACKDOOR                                        145

     A black rubber doggie door. The type that allows a dog to
     come and go as it pleases. Rooney is crouched down. He lifts
     the doggie door and peeks in the house.

     HIS POV

     Along the kitchen floor. Through the kitchen, into the
     dining room. We hear a LARGE DOG GROWL.

     CU. ROONEY

     He's peaking through the door. He hears the dog. His face
     freezes.

                              FERRIS
               Have a nice day.

     EXT. HOUSE. DOGGIE DOOR

     A Rottweiler bursts through the doggie door in a fury of
     gnashing teeth and foam.

146  CU. LARGE BREASTS                                           146

     Tassled pasties twirl like airplane propellers.

     CU. CAMERON, FERRIS AND SLOANE

     They're sitting in a booth in the garish, nearly deserted
     strip joint. Cameron's mouth is open in amazement. Sloane is
     embarrassed and revolted.

                              CAMERON
               How does she do that? One goes
               one way, one goes the other.

                              FERRIS
               She's probably schizophrenic.

                              SLOANE
               Ferris, this is nauseating me.
               Really. I'm losing respect for
               you by the bucket.

                              FERRIS
               You don't think it's amazing that
               we got in?

                              SLOANE
               Who wants to get in?

                              FERRIS
               Cameron looks like a toddler, for
               Christ's sake. I'm talking about
               a major achievement in false
               identification.

                              SLOANE
               I'm not interested in watching
               someone jiggle their mammary glands.

                              FERRIS
               Point well taken. But consider why
               she does it. Why she does it and
               you don't.

                              SLOANE
               I'm not a tramp.

                              FERRIS
               Maybe her life fell apart. Maybe she
               lost somebody. A lover. A boyfriend.
               A parent. A child...
                          (to CAMERA)
               This kind of thing makes me a little
               depressed. You may think because I'm
               the age I am that I'm a sex maniac.
               That sex is all I think about.
               But that's not true. I'm a romantic.
               I think alot of people my age are.
               We think about love and matters of
               the heart. And SAT scores and acne
               aside, we worry about lonliness. It's
               a terrible thing. And we feel it. I
               feel it.

     He flips his collar up, curls his lip and affects an Elvis
     impression. A sappy, do-wop track FADES UP. The club lights
     go down. Cameron and Sloane disappear into darkness. Ferris
     stands up from the booth. He strolls slowly through the
     empty club as the stripper bumps and grinds in a pool of
     blue light.

                              FERRIS
               You know, someone said the world's a
               stage and each must play a part.
               Fate had me playing in love, with you
               as my sweetheart. Act one was when we
               met. I loved you at first glance. You
               read your lines so cleverly and never
               missed a cue. Then came act two. You
               seemed to change. You acted strange.
               And why, I've never known.

     He climbs up on the little runway. The stripper disappears
     in darkness as Ferris takes over the spotlight.

                              FERRIS
               Honey, you lies when you said you
               loved me and I had no cause to
               doubt you. But I'd rather go on
               hearing your lies than to go on
               living without you. Now, the stage
               is bare and I'm standing there with
               emptiness all around and if you won't
               come back to me, then they can bring
               the curtain down...

     Elvis fades up. The orignal recording. Ferris lip synchs
     with the big, dramatic florish that was the King's trademark
     ballad sign-off.

                              ELVIS
               IS YOUR HEART FILLED WITH PAIN?
               SHALL I COME BACK AGAIN?
               TELL ME DEAR, ARE YOU LONESOME TONIGHT?

     Ferris drops his head. Like the King would.

147  EXT. DOWNTOWN STREET. CAMERON'S CAR                         147

     Cameron's father is looking at the car. He's studying it. It
     looks terribly familiar. He leans into the open car and
     reaches for the glovebox to see if the contents will confirm
     if it's his. He freezes. He looks up slowly.

     HIS POV

     The Attendant and the Rastaman are glowering at him. They're
     holding bags of fried chicken.

                              ATTENDANT
               You looking for something in my
               car?

     CU. CAMERON'S FATHER

     He shakes his head, no.

                              CAMERON'S FATHER
               No.

148  EXT. FERRIS' TOWN. JEANIE                                   148

     Jeanie's standing at her car. She's staring incredulously
     into the distance. Her mouth's open. She's shaking her head
     slowly.

     HER POV

     Spray-painted on the town water tower in gigantic black
     letters -- SAVE FERRIS BUELLER.

     CU. JEANIE

     She's furious.

                              JEANIE
               I'm gonna microwave his nuts...

149  EXT. MICHIGAN AVENUE                                        149

     Afternoon traffic.

150  INT. TAXI CAB                                               150

     Ferris, Sloane and Cameron in the backseat of a checker.
     Ferris is on one window, Cameron on the other. Sloane's in
     the middle. Ferris is talking to the DRIVER.

                              FERRIS
               So...

     He leans forward and reads the driver's name off the city
     license.

                              FERRIS
               So, Yuri, how long have you been
               in America?

                              DRIVER
               One year.

                              FERRIS
               What's your overall impression?

                              DRIVER
               It's very good here.

                              FERRIS
               Better than Russia?

                              DRIVER
               Much better here than in Russia.

                              FERRIS
               Clearly you've never been to an
               American high school.

     Ferris sits back. He puts his arm around Sloane.

                              CAMERON
               It's getting late, Ferris. I have
               to get the car home. I know you
               don't care, but it means my ass.

                              FERRIS
               You think I don't care?

                              CAMERON
               I know you don't care.

                              FERRIS
               That hurts, Cameron.

                              SLOANE
               Jump back, Ferris, Cameron's been
               a good sport.

                              FERRIS
               Cameron, what'd you see today?

     Cameron looks at him.

                              FERRIS
               You saw four states, a submarine,
               a giant heart, seventy five dollars
               worth of cooked pancreas, two of the
               most incredible breasts ever to come
               out of modern plastics, major
               league baseball and...
                          (quizical look)
               Are you gonna chuck your nachos?

     Cameron's staring past Ferris. He's frozen. Ferris realizes
     he's looking at something out the window. He turns. He
     freezes.

     HIS POV

     In the gridlock traffic, their cab is squeezed tight
     alongside another cab. In that cab is Tom. He's about a foot
     from Ferris. He turns and looks right into CAMERA.

     TOM'S POV

     Ferris' frozen face.

     FERRIS' POV

     Tom glances back at his paper. He pauses. Looks up. Thinks.
     Turns back to CAMERA.

     TOM'S POV

     Sloane is sitting where Ferris was. She's wearing
     sunglasses, looking bored. She turns and glances out the
     window. Fakes a yawn.

     HER POV

     Tom stares at her. He's baffled. He looks away.

     INT. CAB. FLOOR.

     Cameron and Ferris are on the floor. On their asses, with
     their backs to the back of the front seat, feet up on the
     seat.

                              FERRIS
                          (to Sloane)
               What's he doing?

                              SLOANE
                          (revolted)
               He's looking at me and he's licking
               the glass and making obscene gestures
               with his hands.

                              FERRIS
               What?!

     Sloane bursts out laughing.

                              SLOANE
               Roast!

     She licks her finger and touches Ferris knee. She makes a
     sizzling sound. She collapes on the seat in hysterics.

     INT. TOM'S CAB

     Tom's looking into Ferris' cab.

     HIS POV

     Sloane's bouncing up and down.

     CU. TOM

     He can't quite figure out what's going on. He turns and
     slowly raises his newspaper over his face. We see on the
     back of the paper a small story with the headline: COMMUNITY
     RALLIES AROUND SICK YOUTH.

151  EXT. FERRIS' HOUSE. BACKYARD. DOG                           151

     The Rottweiler's chewing on a shoe. Tearing it apart.

     EXT. BACKYARD. ROONEY

     He's standing outside the fence. He's missing a shoe. His
     suit pants are torn from the crotch to the knee. His suit
     coat pocket is torn off. His hair's messed and there're
     grass-stains on his knees and elbows. He's looking in at the
     dog.

                              ROONEY
               That's a $28.00 dress shoe, you
               worthless mutt!

     HIS POV

     The Rottweiler leaps at CAMERA.

152  EXT. CITY STREET                                            152

     Ferris is leading the way down Michigan Avenue. He's
     hustling through the crowd. He has Sloane by the hand. She's
     jogging to keep up. Cameron's a few steps behind. He keeps
     bumping into people. Ferris and Sloane make the turn at
     Wacker Driver and disappear into the Stone Container
     Building. Cameron follows, mumbling again.

                              CAMERON
               Money...tits...please...

153  EXT. HOUSE. FRONT                                           153

     A florist truck pulls up in front of the house. A DELIVERY
     MAN gets out iwth a huge floral arrangement. He heads up to
     the house.

154  EXT. HOUSE. PORCH                                           154

     Rooney's sitting on the porch patting a bloody knee with his
     handkerchief. The delivery man hops up on the steps. Rooney
     looks up at him. He greets Rooney cheerily.

                              DELIVERY MAN
               Howdy!

     He presses the doorbell. A beat and we hear Ferris'
     recording.

                              FERRIS' VOICE
               Who is it?

     The Deliver Man presses the intercom.

                              DELIVERY MAN
               Focus on Flowers. I have a delivery.

                              FERRIS' VOICE
               I'm sorry but I can't come to the
               door right now. I'm very ill and I'm
               afraid...

               ROONEY                              FERRIS' VOICE
     It's a recording, asshole.        ...that in my weakened
                                       condition, I could take a
               DELIVERY MAN            nasty spill and subject
     What's your problem?              myself to further school
                                       absenses...
               ROONEY                        (pause)
     He's one of my students.          You can reach my parents
                                       at their places of
               DELIVERY MAN            business. Thank you for
     Little bugger's dying.            stopping by. I appreciate
                                       your concern for my well-
               ROONEY                  being. It will be
     What?                             remembered long after
                                       this illness has passed.

                          DELIVERY MAN
               As I heard it from our mailman
               he was supposedly born with only
               half a kidney.

                              FERRIS' VOICE
               Have a nice day.

                              DELIVERY MAN
                          (to the intercom)
               Thank you.
                          (continues)
               I don't know the details. But my
               boss had to send to Milwaukee to
               get more orchids. He's very
               popular.

     Rooney is flabbergasted.

                              DELIVERY MAN
               Nobody's home here?

                              ROONEY
               No.

                              DELIVERY MAN
               You gonna be around for awhile?

                              ROONEY
               I imagine so.

                              DELIVERY MAN
               You wanna keep an eye on these?

     Rooney looks at the flowers. Then he looks at the Delivery
     Man.

                              DELIVERY MAN
                          (happy sigh)
               It really touches me that so many people
               are rallying behind this guy. I guess
               there's hope for the human race afterall.

     He hands the arrangement to Rooney.

                              DELIVERY MAN
               Gotta run.

     He bounds off the porch and trots to the truck. Rooney looks
     incredulously at the arrangement. He opens the attached
     card.

                              ROONEY
                          (defeated)
               Oh, Christ...

     CU. CARD

     It's signed:

               ALL OUR BEST FOR A SPEEDY RECOVERY
               THE ENGLISH DEPT. FACULTY AND STAFF

155  INT. RADIO STATION STUDIO                                   155

     The number one afternoon FM rock'n roll D.J. is sitting
     behind his microphone.

                              D.J.
               I don't know who that was or
               what they were playing but I
               apologize for it nonetheless.
                          (pause)
               I have a guest with me today...

156  INT. STUDIO. FERRIS                                         156

     He put his headphones on.

157  EXT. FERRIS' HOUSE                                          157

     Jeanie's car pull in the driveway. We hear her car radio.

                              D.J.
               His name is Ferris Mueller.

                              FERRIS
               Bueller. Ferris Bueller.

     INT. CAR. JEANIE

     She goes into shock. Her eyes blink, her head cocks.

                              D.J.
               Sorry about that.

                              FERRIS
               It's cool.

     Jeanie draws back and punches out her radio.

     CU. CAR ANTENNA

     The impact of her blow to the radio shoots the antenna in
     the air.

158  INT. STUDIO                                                 158

     Ferris leans forward and adjusts the microphone.

                              D.J.
               He has an incredible story.

     Ferris turns to CAMERA.

                              FERRIS
               I'm going to tell a massive lie here.
               It's going to by very thick and very
               steamy. I think radio's a facinating
               medium, it challenges the imagination.
               Unlike television which provides the
               images, radio...
                          (pause)
               You know this. Anyway, it's always been
               a dream of mine to be on the radio.
               I have what I consider to be an excellent
               broadcast voice. I practise it in the
               bathroom all the time. I used to play
               records and do introductions to them.
               But I've never had the chance to sit
               behind a microphone and try it out
               for real. This is a 50,000 watt outlet.
               I'm going out to several million people
               so let me just say, I'm in a very pleasant
               groove right now.
                          (clears his voice,
                           speaks into the
                           mike, affects a
                           "radio" voice)
               Well, Steve, you and your listeners are
               probably not going to believe this but...

159  INT. SCHOOL                                                 159

     A group of kids are sitting around a blaster.

                              FERRIS' VOICE
               ...I'm the first Chicago area youth
               to be selected to participate in
               a space shuttle mission.

160  INT. STUDIO                                                 160

     Ferris turns from the mike to CAMERA.

                              FERRIS
               I was going to say I knew Springsteen's
               home phone number and I was going
               to give out the number of the New
               Jersey State Police but I thought I
               might get busted. After I got flunked
               in driver's ed for sideswiping a mail
               box, which was not in any way, shape
               or from my fault. I was putting out a
               cigarette, like I was told. It was weird.
               I'm so used to getting in a car and
               lighting up, because I'm not allowed to
               smoke at home, that I got in the driver's
               ed. car and spaced completely, pulled out
               of the lot, lit up a 'boro and Mrs. Heller
               looked at me like I'd just pulled a bunny
               out of my nose or something and I realized
               what the hell I was doing and I went to
               put it out and hit the mail box. Anyway,
               I was so pissed off at her reaction to
               the whole thing that I considered running
               an ad in a sleaze magazine for a school
               teacher that does phone sex and I was gonna
               use Mrs. Heller's home number but is cost
               too much. I took it again and passed. But
               I had to work at Burger King to get the
               cash to pay for the driver's ed. car. The
               car got fixed in auto shop for nothing and
               I think Rooney pocketed the cash. But I
               can't prove it? I'm in high school, remember?

     He turns back to the DJ.

                              D.J.
               How did you get picked for this.

                              FERRIS
               It's kind of a long story but I've
               been doing alot of programming for
               NASA.

161  INT. SCHOOL. HALLWAY                                        161

     A even larger group of kids is listening to the blaster.
     They're cheering him on.

162  EXT. FERRIS' HOUSE. BACKYARD                                162

     The Rottweiler is laying unconscious on the lawn. The flower
     arrangement is scattered all over the yard and the ceramic
     vase the flowers were in has obviously struck the dog. The
     broken pieces are all around the dog's head.

     EXT. FERRIS HOUSE. BACKYARD. ROONEY

     He's smiling with great satisfaction.

                              ROONEY
               Sleep tight, pooch.

     He hears something in the house. His head snaps around. He
     drops down and peek in the windows.

     HIS POV

     A glimpse of a fleeting figure.

     CU. ROONEY

     His eyes dance in anticipation of revenge.

163  INT. HOUSE. FERRIS' ROOM                                    163

     Jeanie kicks the door open. The yardstick flings the covers
     and the pillows beneath them in the air. She stomps in and
     turns off the snoring synthesizer.

                              JEANIE
               I knew it!

     She grabs the phone and sits down. She dials a number.

164  EXT. HOUSE. FRONT                                           164

     Rooney sneaks around the side of the house. He slinks up on
     the porch. The front door's open. He peeks in.

165  INT. FERRIS' ROOM                                           165

     Jeanie's on the phone.

                              JEANIE
               Is Mrs. Bueller there? Where is she?
               This is her daughter. Do you know where
               she is? Do you know when she'll be back?
               Do you know anything?

     She slams the phone down.

                              JEANIE
               The worm has luck like clams
               have body odor...

     She's startled by a noise downstairs. A smile spreads across
     her face. He's back and she's going to nail him.

166  INT. HOUSE. FOYER                                           166

     Rooney sneaks into the house. He looks around the foyer and
     heads into the kitchen.

167  INT. HOUSE. UPSTAIRS HALLWAY                                167

     Jeanie tiptoes down the stairs.

168  INT. HOUSE. KITCHEN                                         168

     Rooney sneaks through the kitchen into the den.

169  INT. HOUSE. FOYER                                           169

     Jeanie comes down the stairs into the foyer.

170  INT. HOUSE. KITCHEN                                         170

     Rooney comes out of the den, back into the kitchen. He
     crosses back toward the foyer.

171  INT. FOYER                                                  171

     Jeanie sneaks into the kitchen.

172  INT. KITCHEN                                                172

     Jeanie and Rooney come face-to-face. Jeanie squeals in
     horror. She doesn't recognize Rooney as himself but as an
     intruder. She drops into a karate stance and kicks Rooney in
     the face. He hits the deck. She flees back up the stairs.

173  INT. CAR                                                    173

     Boyd is sitting in the backseat of Joyce's car listening to
     the radio.

                              FERRIS' VOICE
               My input on the Star Wars defense
               plan was pretty substantial so I
               guess this is their way of rewarding
               me. I'm pretty flattered.

     EXT. CAR

     Joyce and her clients leave a show house and head toward the
     car.

     INT. CAR

     Boyd looks out the window as his parents and Joyce appear.

                              D.J. VOICE
               Can you stay around and take a few
               phone calls?

                              FERRIS' VOICE
               I'd really like to but I have a kidney
               operation in about an hour.

     EXT. CAR

     Joyce and her clients take one last look at the house.

                              JOYCE
               If you're willing to commit a
               little time and a little money
               to this place, you can really
               have something to be proud of.
               Don't let the black living room
               throw you off.

     She opens the car door.

     INT. CAR

     The door opens.

                              D.J. VOICE
               I wish you the best of luck.

                              FERRIS' VOICE
               Thanks, Steve.

                              D.J. VOICE
               A very interesting guy, Ferris Bueller.

     Joyce gets in. The clients get in the other side. A song
     starts.

                              JOYCE
                          (to the kid)
               Well, Boyd, how are you bearing
               up?

     The kid stares at her.

                              JOYCE
               Did I tell you I have a son
               your age?

                              BOYD
               Twice.

                              JOYCE
               His name is Ferris. I think you'd
               like him.

     Boyd sits up in the seat at the mention of Ferris' name.

                              BOYD
               Is he going up in the space shuttle
               in September?

     Joyce looks around at Boyd. She gives him a curious look.

                              JOYCE
               Not that I know of.

                              BOYD
               I knew he was bullshitting.

                              MOTHER
               Watch your mouth.

                              BOYD
               How do you watch your mouth?

                              JOYCE
               Do you know my son?

                              FATHER
               Don't pay any attention to him.
               He thinks it's cute to bait adults.

                              BOYD
               I don't think it's cute. I think
               it's fun.

     Joyce give him a puzzled smile and starts the car.

174  INT. FERRIS' ROOM                                           174

     Jeanie's on the phone. She's in a panic.

                              JEANIE
               This is not a phoeny phone call. There's
               an intruder, male caucasian, possibly armed,
               certainly weird, in our kitchen.
                          (pause)
               My name is Bueller.

     There's another pause. Jeanie's face drops.

                              JEANIE
               It's real nice that you hope my
               brother's feeling better but I'm
               in danger, okay? I'm very cute,
               I'm very alone and I'm very
               protective of my body. I'd rather
               not have it violated or killed.
               I need help!

175  INT. KITCHEN                                                175

     Rooney's plugging his bloody nose with paper towel. The
     intercom goes on.

                              JEANIE'S VOICE
               Excuse me. If whoever's in the house
               is still in the house, I'd like you
               to know that I have just called the police.
               If you have any brains whatsoever, you'll
               get your ass out of my house real quick.

     Rooney stiffens with fear.

                              JEANIE'S VOICE
               I'd also like to add that I have
               my father's gun. And a scorching
               case of herpes.

176  EXT. STREET                                                 176

     Rooney's car is hooked to a tow truck. It's parked in front
     of a fire hydrant and the windshield is decorated with
     parking citations. In the distance SIRENS WAIL.

177  EXT. PARKING LOT                                            177

     The three are waiting for the Ferrari. We HEAR TIRES
     SQUEALING, AN ENGINE REVING-OUT. Then the Ferrari pulls down
     the ramp and jams to a frightening stop. A BLACK GUY jumps
     out. Ferris hands him the parking stub.

                              FERRIS
               Just out of curiosity, what was
               your top speed coming down the
               ramp?

                              BLACK GUY
                          (matter-of-fact)
               About 60.

                              FERRIS
               Stunning!

     He hands him a buck and opens the door and pulls the
     passenger seat forward for Cameron.

                              FERRIS
               This is probably the last time you'll
               have to ride back here. Keep that in
               mind.

     Cameron gives him a look and squeezes in.

178  EXT. DOWNTOWN STREET                                        178

     The Ferrari cruises through traffic.

     INT. FERRARI

     Sloane's in the passenger seat. Ferris is driving and
     Cameron is crammed in the back.

                              SLOANE
               What's next.

                              CAMERON
               Nothing. We return the car.

                              SLOANE
               We could go to my house. My parents
               aren't coming home until late.

                              FERRIS
               We have enough cash left for a quick
               flight to Peoria and back.

                              CAMERON
               Very funny.

     Ferris looks in the mirror and changes lanes. He glances
     down at the speedometer, then to the road. And back to the
     speedometer.

                              FERRIS
               Cameron? How many miles did you
               say this thing had when we left?

                              CAMERON
               One hundred and twenty six and
               halfway between three and four
               tenths. Why? How many miles are
               on it now?

     He glances down at the speedometer.

     CU. SPEEDOMETER

     The odometer reads 432.7.

                              FERRIS
                          (to CAMERA)
               Here's where Cameron goes berserk.

     EXT. TRAFFIC

     The Ferrari pulls up at a stop light. We HEAR A THUNDERING,
     MUFFLED SCREAM.

     EXT. EXPRESSWAY

     The Ferrari is buzzing through traffic.

     INT. FERRARI

     Sloane turns in her seat and looks at Cameron. Her gesture
     is one of genuine support.

                              SLOANE
               You okay?

     CU. CAMERON

     His eyes are frozen in a mindless, vacant stare.

     CU. FERRIS

     He looks at Sloane. He's concerned.

                              FERRIS
               Hey, Cameron. It's okay. We'll fix
               it.

     CU. CAMERON

     He's still holding the stare. He starts to breathe heavily.
     He's trembling.

     CU. SLOANE

     She whips around in the seat and grabs his arms.

                              SLOANE
               Cameron! Cut it out! What's
               wrong?! Ferris!

     CU. FERRIS

     He shoots Sloane a look.

                              FERRIS
               Cameron, are you okay? It's
               no problem, really. Your old
               man won't know a thing. It's
               completely fixable.

     INT. FERRARI

     Sloane fires an angry look at Ferris.

                              SLOANE
               Shut-up! It is a problem! For
               him it's a problem. Nothing's
               a problem for you. But it's
               a problem for him! So, just
               shut-up.

     She turns back to Cameron.

                              SLOANE
               What can I do, Cameron?

     CU. FERRIS

     Eyes front. He knows what he's doing.

179  INT. FERRIS' HOUSE. FOYER                                   179

     The doorbell rings. The Ferris' tape is activated.

                              FERRIS VOICE
               Who is it?

     We hear a MALE VOICE over the intercom.

                              VOICE
               Anybody home?

                              FERRIS' VOICE
               I'm sorry that I can't come to
               the door right now...

     The tape continues as Jeanie hurtles down the stairs.

                              JEANIE
               I'm saved! Thank you, God!
               Thank you, thank you, thank you!

     She jumps the last few stairs and slides to the front door.
     She whips it open.

180  EXT. HOUSE. FRONT DOOR                                      180

     The door swings open.

                              JEANIE
               Thank...you...

     Her jaw goes slack. She blinks her eyes.

     HER POV

     The Delivery Man and a young ASSISTANT are standing at the
     door with floral arrangements. Spread all around them are
     more flowers. A sexy singing NURSE and a BALLOON MAN steps
     up on the porch.

                              NURSE
                          (sings)
               WE HOPE YOU'RE FEELING BETTER
               WE HOPE YOU'RE FELLING FIT
               WE...

     The door slams shut.

181  EXT. NEIGHBORHOOD STREET                                    181

     Rooney's walking down the street. A school bus is crawling
     alongside him as kids hang out the windows. From inside we
     hear SHOUTING and seventeen different SONGS PLAYING ON
     BLASTERS. A top forty montage.

                              KID
               Hey, Mr. Rooney! What're you doing?

     Rooney doesn't respond.

                              ANOTHER KID
               Did you get in a fight?

     Rooney keep walking. The bus doors open. The DRIVER calls
     out to him.

                              DRIVER
               You want a lift?

     Rooney takes a few more steps. He stops. The bus stops.
     Rooney takes a deep breath. He climbs aboard the bus.

182  INT. BUS                                                    182

     The bus is jammed with WONKS and WEINERETTES. The passengers
     are silent as they watch Rooney shuffle down the aisle and
     take an empty seat next to a skinny, myopic GIRL.

     CU. GIRL

     She looks at Rooney and smiles. She pushes her Coke bottle
     glasses up on her nose.

     CU. ROONEY

     He looks vacantly at her.

     CU. GIRL

     She holds her smile.

                              GIRL
               I'll bet you never smelled a
               real school bus before.

     CU. ROONEY

     He stares at her.

     CU. GIRL

     She holds up a candy package.

                              GIRL
               Gummi Bear?

     CU. ROONEY

     He stares at her.

     CU. GIRL

     She puts one in her mouth.

                              GIRL
               They've been in pocket. They're
               real soft and warm.

     CU. BOY

     A rotund FRESHMAN BOY sitting across from Rooney is staring
     at him.

     CU. ROONEY

     He looks across to the kid.

     CU. BOY

     He leans forward.

                              FRESHMAN BOY
               It's kind of like being in the
               belly of the beast isn't it?

     CU. ROONEY

     He turns him eyes to the front. The bus jerks forward and
     pulls away.

183  EXT. BUS                                                    183

     It grinds through the gears as it heads down the quiet
     street. The BLASTERS go back on, the SHOUTING RESUMES.

184  EXT. PARK                                                   184

     Cameron's laying on a picnic table. Sloane's sitting beside
     him on the table. She's stroking his hair. Ferris WALKS INTO
     THE FOREGROUND. He addresses CAMERA.

                              FERRIS
               This may very well be for real. I
               think Cameron might have blown a
               micro-chip or two. He's always been
               a little keyed-up. All I wanted to do
               was give him a good day. We're
               gonna graduate in a couple of months.
               Then we have the summer. He'll work
               and I'll work. And we'll see each
               other at night and on the weekends
               but then he'll go to one school and I'll
               go to another. And basically that'll
               be it. As much as we like each other,
               the process of growing up will
               separate us.

     He begins to walk. We follow him.

                              FERRIS
               Sloane's a bigger problem. She still
               has another year of high school. How
               do I deal with that? I was serious when
               I said I'd marry her. I would. This isn't
               just teenage infatuation. That's what my
               parents call it. What do they call what they
               have? If that's love, I'll take infatuation.

     CU. CAMERON

     His eyes are closed. Sloane's stroking his hair.

                              FERRIS (VO)
               Cameron's never been in love. At
               least no one's ever been in love
               with him. He's gonna marry the first
               girl he lays. And she's gonna treat
               him like shit because he's gonna
               kiss her ass for giving him what he's
               built-up in his mind as the end-all,
               be-all of human existance. She won't
               respect him because you can't respect
               someone who kisses your ass. It just
               doesn't work.

     CU. SLOANE

     She's studying Cameron's face. She looks away.

                              SLOANE
               Ferris?

     CU. FERRIS

     He looks to the picnic table. Then back to CAMERA.

                              FERRIS
               I'm being tested here.

     He starts back to the picnic table.

                              FERRIS
               My best friend has flipped-out.
               Conventional wisdom would suggest
               a visit to the nearest trauma
               center. I wouldn't fault anybody
               for doing that. My, personally,
               I think this calls for something
               new, something bold, something wet
               and wild.

185  CU. JACUZZI JET                                             185

     UNDERWATER SHOT. A hyrdojet spews a gush of air bubbles.

     CU. BLASTER

     A finger pushes the PLAY button on the cassette. MUSIC COMES
     UP.

     CU. BEER CAN LID

     The finger pops a beer.

     CU. OREO PACKAGE

     A painted fingernail pierces the cellophane wrapper.

     INT. JACUZZI

     Ferris and Sloane are in Sloane's parents' Jacuzzi. Their
     clothes are tosssed around the deck. Cameron's been placed
     in a patio chair at the edge of the Jacuzzi. He's still
     catatonic. He's mummbling softly. Ferris is drinking a beer.
     Sloane's eating Oreos.

                              FERRIS
               You feeling any better, Cameron?

                              SLOANE
               The water's really nice. I wish
               you'd come in.

     CU. CAMERON

     Staring into space.

                              CAMERON
               Surgery...fire...move...

     CU. SLOANE AND FERRIS

     They look at each other. She offers him a cookie. He offers
     her his beer.

                              FERRIS
               Cameron? Do you think this because
               of the car or is it a combination
               of everything shitty in your life?

     CU. CAMERON

     He doesn't respond.

                              CAMERON
               Music...kiss...attack...

     CU. SLOANE AND FERRIS

     Sloane sips the beer.

                              FERRIS
               You just can't deal with anymore
               shit? The car took you into the
               red zone? Time for a reality check?

                              SLOANE
               Cameron? I could flip real easy, too.
               There's nothing wrong with it. At one
               time or another, everybody goes to
               the zoo.

                              FERRIS
               Maybe he was actually sick. Maybe
               he wasn't bullshitting himself.

     CU. CAMERON

     No response.

                              CAMERON
               Gesundheit...God...mercy...

     EXT. BACKYARD

     Ferris and Sloane watch their catatonic friend.

     CU. CAMERON

     He smiles.

     CU. SLOANE

     She leans forward and stares at Cameron.

     CU. FERRIS

     He cocks his head, wondering what Cameron's up to.

     CU. CAMERON

     He keels over forward.

     EXT. BACKYARD

     Cameron falls out of the chair and splashes down,
     face-first, into the water. Sloane screams. Ferris leaps for
     him.

     UNDERWATER

     Ferris struggles with Cameron's lifeless bulk.

     CU. SLOANE

     She's screaming. Ferris thrashes around in the water.

     UNDERWATER

     Ferris grabs Cameron's collar and rips him out of the water.

     EXT. BACKYARD

     Ferris sits Cameron on the edge of the Jacuzzi.

                              FERRIS
               CAMERON!

     CU. CAMERON

     His eyes are closed. He's lifeless.

     CU. FERRIS

     His face is a mask of terror. He shakes Cameron.

     CU. SLOANE

     She's screaming.

     CU. CAMERON

     A smile spreads across his face.

     CU. FERRIS

     He sees the smile. He stops shaking Cameron.

     EXT. JACUZZI

     Ferris and Cameron are looking at each other. Sloane's still
     screaming. She realizes that Cameron's okay. She stops
     screaming.

                              SLOANE
               What?

                              FERRIS
                          (Cameron)
               You asshole!

     Cameron's smiling.

                              SLOANE
               What?

     Ferris starts to laugh. Cameron explodes with laughter.
     Sloane's bewildered.

                              SLOANE
               What's so funny?

186  INT. POLICE STATION. WAITING ROOM                           186

     Jeanie's sitting on a wooden bench with a WASTED TEENAGE BOY
     in a Triumph t-shirt, long hair, torn jeans, creepers, studs
     and chains. He's studying her.

                              BOY
               Drugs?

                              JEANIE
               No, thank you. I'm straight.

                              BOY
               I meant, are you here for drugs?

     Jeanie stares at him.

                              JEANIE
               Why are you here?

                              BOY
               Drugs.

                              JEANIE
               I don't know why I'm here.

                              BOY
               Then why don't you go home?

                              JEANIE
               Why don't you put your thumb
               up your butt?

     The boy stares at her.

                              BOY
               You want to talk about your problem?

                              JEANIE
               With you? Are you serious?

                              BOY
               Yeah, I'm serious.

                              JEANIE
               Blow yourself.

     Jeanie turns away. The boy crosses his legs. Jeanie looks
     back at him.

                              JEANIE
               You really want to know what's wrong?

     The boy shrugs.

                              JEANIE
               Alright. If you've got the time,
               I've got the troubles. In a nutshell,
               I hate my brother. How's that?

                              BOY
               That's cool. Did you shoot him or
               something?

                              JEANIE
               No, not yet.

     The boy nods. He understands the emotion.

                              JEANIE
               I went home to confirm that the
               shithead was ditching school and
               a guy broke into the house and I
               called the cops and they picked me
               up for making a phoney phone call.

                              BOY
               What do you care if your brother
               ditches school?

     Jeanie stares at the boy.

                              JEANIE
               Why should he get to ditch school
               when everybody else has to go?

                              BOY
               You could ditch.

                              JEANIE
               I'd get caught.

                              BOY
               So, you're pissed at him because
               he ditches and doesn't get caught?

                              JEANIE
               Basically.

     The boy nods knowingly.

                              BOY
               Then your problem is you.

                              JEANIE
               Excuse me?

                              BOY
               Excuse you. You oughta spend a little
               more time dealing with yourself and
               a little less time worrying about
               what your brother does. It's just
               an opinion.

     Jeanie stares angrily at him. Partly because he's so bold
     and partly because he's so right.

                              BOY
               There's somebody you should talk
               to.

     Jeanie stares at him threateningly.

                              JEANIE
               If you say Ferris Bueller, you lose
               a testicle.

                              BOY
               You know him?

     CU. JEANIE'S HAND

     It curls into a fist.

187  CU. FERRARI TIRE                                            187

     It's spinning rapidly.

     CY. ACCELERATOR

     A brick's resting on the accelerator, holding it down.

     INT. CAMERON'S GARAGE

     Ferris, Cameron and Sloane are sitting in the garage. The
     Ferrari is jacked up. The wheels are turning. The engine's
     racing.

                              CAMERON
               The whole time I was just thinking
               things over. I was like, meditating.
               I was thinking about the future.
               And I realized it doesn't make
               and difference if the present
               goes to shit.

                              FERRIS
               I have a agree with you there.

                              SLOANE
               Really.

                              CAMERON
               I've been thinking all day that if
               you could only have the use of one
               word, what would it be?

                              FERRIS
               Sloane is naked before your eyes and
               you're thinking about words?

                              SLOANE
               God bless you, Cameron.

                              CAMERON
               Thank you, Sloane.

                              CAMERON
               If you guys only had one word, what
               would it be?

                              FERRIS
               I can't believe you'd think up something
               like with a naked girl in a jacuzzi
               right in front of you.

                              SLOANE
               Come on, Ferris, answer his question.

                              FERRIS
               Bathroom.

                              SLOANE
               I'd say...

     She thinks.

                              FERRIS
               Cash.

                              CAMERON
               It's the only word you could
               ever use.

                              FERRIS
               Hello.

                              SLOANE
               Love.

                              FERRIS
               And what is you loathe somebody?
               Are you going to say "love" every
               time you see them?

                              SLOANE
               It's better than "hello".

                              FERRIS
               Hellos' generic.

                              SLOANE
               You wanna be generic?

                              CAMERON
               It's help.

     Cameron smiles at his wisdom. Ferris and Sloane think about
     it. It's a good choice. Cameron gets up and walks to the
     Ferrari.

                              CAMERON
               The word is help.

     Cameron peeks in the window.

     CU. ODOMETER

     Nothing's happening.

     INT. GARAGE

     Cameron pulls his head out of the car.

                              CAMERON
               Ferris? It's not working.

     Ferris looks up.

                              CAMERON
               The miles aren't coming off, running
               it in reverse.

                              FERRIS
               I thought that might be a problem.
               Let's crack open the odometer and
               roll it back by hand.

     Cameron shakes his head.

                              CAMERON
               I got a better idea. It's cool.

     He walks back around behind the Ferrari.

                              CAMERON
               Seventeen years and I've never
               taken a stand. Now, I'm gonna
               do it. I'm taking a stand against
               my father, against my family,
               against myself, against my past,
               my present and my future. I will
               not sit idly by as events that affect
               me unfold to change the course of
               my life. I will take a stand and I
               will defend it. When my father comes
               home tonight, he's finally going
               to have to deal with me. Good or
               bad, I'm taking a stand.

     CU. FERRIS

     He turns to CAMERA.

                              FERRIS
               This is a big U-2 fan.

     CU. SLOANE

     She smiles proudly at Cameron. She applauds him.

     CU. CAMERON

     He's serious and determined. He has made up his mind and it
     appears that it won't be changed by anyone but himself.

     CU. TIRES

     It's spinning wildly.

     CU. MERCEDES BUMPER

     Cameron's foot rests on the bumper. A beat and it gives a
     mighty shove.

     CU. TIRE

     The spinning tires slam down on the cement.

     INT. GARAGE

     Cameron has kicked the Ferrari off the jack. It squeals out
     of the garage in a cloud of blue tire smoke. A $50,000
     unmanned investment heading backwards down a driveway.

     CU. SLOANE AND FERRIS

     They're in shock.

     EXT. HOUSE

     The Ferrari shoots down the driveway.

     INT. GARAGE

     Cameron watches the car go. He's strangely placcid about the
     impending disaster. Ferris and Sloane are bewildered.

     THEIR POV

     The Ferrari travels down the driveway, across the street,
     over the curb into the wooded property opposite the house.

     CU. TREE

     The Ferrari's brief journey ends as it smacks a tree trunk.

     INT. GARAGE

     Ferris and Sloane exchange baffled looks. They look at
     Cameron. He's proud and bold.

                              FERRIS
               What was that about?

                              SLOANE
               This has to be a dream.

                              FERRIS
               Cameron? One quick question.
               Why'd you do that?

     Cameron holds his proud posture for a beat. Then a look of
     bewilderment comes over his face. He shoots a look to
     Ferris. A puzzled look.

                              FERRIS
               You trashed the car.

     Cameron looks across the street.

                              SLOANE
               Why?

                              CAMERON
               I took a stand.

                              FERRIS
               No, Cameron. You wrecked a car.

     Cameron thinks for a moment. Then he regains his confidence.

                              CAMERON
               It's okay.

     Ferris looks across the street at the car.

                              FERRIS
               I have an idea. If you're interested.

     Cameron looks at him. He shakes his head.

                              CAMERON
               I'm gonna handle it.

                              FERRIS
               I think this could work.

                              CAMERON
               No, thanks. I want to deal with
               it by myself.

                              SLOANE
               What about your one word?

                              CAMERON
               You already did it. If I need it
               again, I'll use it.

     He smiles. He raises am impish eyebrow.

                              CAMERON
               It's cool. I'm loose.

188  INT. POLICE STATION. OFFICE                                 188

     Joyce is talking with the juvenile officer. Outside the
     office, on the bench, we see Jeanie and the boy making out.

                              JOYCE
               She's never been in trouble before.
               This is a shock to me. First, I
               don't know why she wasn't at school.
               Second, I don't know why she'd call
               you with this story about a rapist.

                              OFFICER
               For whatever reasons she did it,
               I think she'd had a good scare.

                              JOYCE
               I hope so. I appreciate your calling
               me. I can assure you that her father
               and I will have a long talk with her.

     The gathers her purse and jacket and stands.

                              JOYCE
               Thank you.

                              OFFICER
               Oh, by the way, I hope you son's
               feeling better.

     Joyce looks at the officer curiously.

                              OFFICER
               Tell him, all the guys at the
               station here are pulling for
               him.

189  INT. POLICE STATION. WAITING ROOM                           189

     Jeanie quickly breaks the embrace with the boy as Joyce
     steps out of the juvenile officer's room. She's still a
     little bewildered that everybody knows Ferris was ill.
     Jeanie wipes her lips and sits up straight. The boy adjusts
     his pants to better hide his passion.

                              JEANIE
                          (to the boy)
               If you keep this to yourself, I
               think we can probably get it on
               pretty good.

                              BOY
               For sure.

     Jeanie stands up.

                              JEANIE
               Hi.

                              JOYCE
               Don't "hi" me, young lady. Get
               your stuff.

     Jeanie reaches down for her purse.

                              BOY
               What's your name?

                              JEANIE
               Jean. What's yours?

                              BOY
               Garth Volbeck.

190  EXT. SLOANE'S BACKYARD                                      190

     Sloane and Ferris are standing at the back fence.

                              SLOANE
               I had a great time today.

                              FERRIS
               Yeah. It was pretty cool.

                              SLOANE
               You think Cameron's gonna be
               alright?

                              FERRIS
               Sure. He had to so it, I guess.
               His old man had it coming. He'll
               be okay. I'd be worried if he'd
               taken my idea.

     Sloane smiles knowingly.

                              SLOANE
               You didn't have an idea, did you?

                              FERRIS
               Not a glimmer.

                              SLOANE
               You're so smart.

                              FERRIS
               No. I'm just real loose.

     He kisses her.

                              FERRIS
               I'll call you tonight.

     Sloane nods. Ferris jumps the fence and takes off across the
     backyards. Sloane watches him go. A huge smile spreads
     across her face.

                              SLOANE
               I LOVE YOU!

     She backs away from the fence. MUSIC FADES UP.

                              SLOANE
               He's gonna marry me. I know it.

     She turns and runs into the house.

191  EXT. BACKYARD                                               191

     Ferris sprints across a backyard. He jumps a plaster elf.

192  EXT. ANOTHER BACKYARD                                       192

     Ferris vaults a fence. He runs directly for a swimming pool.
     He's approaching it from the side. He leaps, hits the diving
     board, springs off, does a flip and lands on the grass on
     the other side of the pool.

193  CU. BEDSPREAD                                               193

     Neatly bundles stacks of bills and rolled coins. A
     significant amount of cash.

     CU. SLOANE

     She's writing.

     CU. PIECE OF PAPER

     We see a portion of the typewritten letter as she signs it.

               "...in the amount of $1,765.33. It
               gives us great pleasure to assist
               you in performance of your worthy
               and much needed survives to those
               so desperately in need.

                              Sincerely,

                              Sloane Peterson
                              Executive Director
                              The Ferris Bueller Foundation"

194  EXT. FERRIS' STREET                                         194

     He's running down the middle of the street. A car honks.
     Ferris moves to the side. The car pulls around him.

     INT. CAR.

     Tom's at the wheel. He glances in the mirror. He does a
     take.

     HIS POV. MIRROR

     We see Ferris cut across a front lawn and into a house.

     CU. TOM

     He realizes it couldn't be Ferris.

195  INT. HOUSE                                                  195

     Ferris runs through the kitchen, past a WOMAN, fixing dinner
     and out her backdoor. The Woman looks up curiously.

196  EXT. FERRIS' HOUSE                                          196

     Tom pulls in the driveway. He parks and gets out. Joyce
     pulls in from the other direction.

197  EXT. HOUSE. BACK PORCH                                      197

     Ferris tries the door. It's locked. He reaches down and
     lifts the doormat.

     CU. PORCH

     The outline of a key in the dirt under the mat. The key's
     gone. The toe of a chewed-up dress shoe steps INTO FRAME. An
     OMNIOUS CHORD IS STRUCK.

     CU. FERRIS

     He stares up in horror.

     HIS POV

     Rooney's looking down at him. He's holding the house key.

     EXT. PORCH

     Ferris stands up. He smiles.

                              ROONEY
               Looking for this?

                              FERRIS
               Yes.

                              ROONEY
               I got you, Ferris. This time I finally
               got you.

     Ferris is caught. There's no way out. Rooney gloats
     severely.

                              ROONEY
               How does another year of high
               school sit with you?

     Suddenly, the backdoor opens. Jeanie looks out. She feigns
     joy and relief. She rushes Ferris and hugs him.

                              JEANIE
               Thank God, you're alright! We've
               been worried sick!

     CU. FERRIS

     A moment of curiosity. Then it dawns on him what's
     happening. He smiles.

     CU. ROONEY

     His eyes dart from Ferris to Jeanie to Ferris. His victory
     is evaporating.

     EXT. PORCH

     Jeanie breaks the embrace.

                              JEANIE
                          (to Rooney)
               Thank you for bringing him home,
               Mr. Rooney.
                          (to Ferris)
               You better get up in bed tight
               now.

     Ferris limps into the house.

                              JEANIE
               Can you imagine someone as sick as
               Ferris trying to walk home from the
               hospital?
                          (shakes her head)
               Kids!

     CU. ROONEY

     He's dumbfounded.

     CU. JEANIE

     She raises her hands and strikes a karate pose. A huge smile
     passes over her face.

     CU. ROONEY

     A look of terror as he realizes that is was Jeanie who
     kicked him and that Jeanie knows it was he who she kicked.

     EXT. PORCH

     Jeanie steps into the house.

198  INT. HOUSE                                                  198

     The door closes on Rooney's defeated, lost, dejected,
     bewildered face. Not only has he lost Ferris again, he has
     Jeanie to deal with next year.

199  EXT. YARD. CU. DOG                                          199

     The click of the door wakes him up. His head pops up off the
     grass.

     CU. ROONEY

     He senses new danger. We hear AN O.C. GROWL. Rooney squeezes
     his eyes shut.

200  INT. KITCHEN                                                200

     Kimberly and Todd are sitting at the kitchen table watching
     TV and eating cereal. They look up at Ferris as he comes in
     from outside.

                              TODD
               Ferris?  Does my head look like
               it's getting bigger?

     Ferris leans against the counter as he tries to catch his
     breath. He looks at his little brother.

                              FERRIS
               No, but Kimberly's is.

     He crosses to the refrigerator and opens it. Kimberly feels
     her head.

                              KIMBERLY
                          (to Todd)
               Is he serious?

                              TODD
               I think so.

                              KIMBERLY
               Oh, shit!

     Ferris takes out a bottle of orange juice out of the
     refrigerator and drinks straight from the bottle. Jeanie
     comes in.

                              FERRIS
               Thanks, Jeanie.

                              JEANIE
               No problem.

                              FERRIS
               By the way, I borrowed some cash
               from you. I'll pay you back.

                              JEANIE
               You don't have to.

                              FERRIS
               I want to.

                              JEANIE
               You don't have to. I've been ripping
               off your wallet for years.

     Ferris gives her a proud smile.

201  EXT. HOUSE                                                  201

     Joyce and Tom head up to the kitchen.

202  INT. KITCHEN                                                202

     Ferris and Jeanie exit the kitchen as Joyce and Tom enter.

                              JOYCE
                          (to Todd and Kimberly)
               Hi, guys.

                              KIMBERLY
               Is my head swelling up?

203  INT. HOUSE. FOYER                                           203

     The foyer is jammed with floral arrangements, plants and
     gifts. Ferris and Jeanie step gingerly through the flowers
     and head upstairs.

                              JEANIE
               I'm sorry I've been riding your
               buns for so long.

                              FERRIS
               It's completely cool.

                              JOYCE (OC)
               Ferris!

     Ferris continues up the stairs. He affects a sickly voice.

                              FERRIS
               Upstairs, Mom!

204  INT. SECOND FLOOR LANDING                                   204

     Ferris and Jeanie stop.

                              JEANIE
               Do you know a guy named Garth
               Volbeck?

                              FERRIS
               Vaguely.

                              JEANIE
               Is he cool?

                              FERRIS
               He's cool. But stay away from his
               brother.

     Ferris walks into the room, brushes the crumbs off his hands
     and peels off his shirt. He climbs into bed. No sooner are
     the covers over him than the bedroom door opens and Joyce
     and Tom walk in. They walk over to the bed. Joyce sits down.

                              JOYCE
               Honey?

     CU. FERRIS

     The same deathly face he had in the morning. Tongue out,
     eyes bulging.

                              TOM (OC)
               Ferris? How do you feel?

     He pulls in his tongue to speak.

                              FERRIS
                          (deathly gasp)
               150% better, thank you.

205  INT. BEDROOM                                                205

     Tom and Joyce hover over him with deep concern.

                              FERRIS
               I'm much better, really. Please,
               don't make me stay home again. I
               want to go to school. I'm graduating
               in June and I...

                              TOM
               Ferris. You're sick. There's no point
               pushing yourself and making it worse.

                              FERRIS
               Maybe you're right, Dad.

                              TOM
               I know I'm right.

     Joyce leans over and kisses him forehead.

                              JOYCE
               How did you get so sweet?

                              FERRIS
               Years of practice.

     Tom pats Ferris on the rump. He and Joyce exit.

     CU. FERRIS

     The hideous face. A beat and we HEAR THE BEDROOM DOOR CLOSE.
     Ferris looks at CAMERA.

                              FERRIS
                          (happy sigh)
               Yeah, life is a carousel. A
               great big crazy ball of pure
               living, breathing joy and delight.

     He rolls over on his back and puts his hands behind his
     head.

                              FERRIS
               You gotta get one.

     He smiles.

     MUSIC UP BIG

     END TITLES

                              THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
