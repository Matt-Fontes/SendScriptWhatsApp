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
2 FAST 2 FURIOUS

(HIP-HOP MUSIC PLAYING)

(MECHANICAL WHIRRING)

(HYDRAULIC WHOOSHING)

(INDISTINCT CHATTERING)

(MAN YELLING)

(WOMAN WHOOPING)

(CELL PHONE RINGS)

Yo, Jimmy, man. Give me the status.
Tell me we good.

- You got it, man.
- Beautiful.

It's gonna be an all-timer tonight.

(CAR ENGINE REVVING)



All right, all right, all right, fire them up!

We go live in five!

It's time for ignition
and straight automobile pimping.

- Girl!
- Sorry! My bad!

All right, ladies! We're good.

We're good.

JULIUS: That's it, babies.

(JULIUS SPEAKING SPANISH)

Come on, Tej! Let's get this race going!

Whoa, whoa, man. Wait a second, man.

You cats are first wave, man.
Where's your fourth at?

It was Joaquin, man,
but he had to work the graveyard shift.

TEJ: What? Graveyard shift, man.

- Why don't you run with us, Tej?
- Hell, no, I'm not running with y'all, man.



And I tell you what, either you find a fourth
or you don't race. How about that?

We should find two, so we don't have
to roll with skirt here.

(SPEAKING SPANISH)

(SUKI AND JULIUS ARGUING IN SPANISH)

Whoa, wait a second, wait a second.

Why don't I just find y'all a fourth
and we settle this on the streets?

- Bring him on.
- Anybody I want?

(SPEAKING SPANISH)

- No matter who it is?
- Yeah.

BRIAN: Yeah

Yeah, man. You want to race tonight?

- Yeah, you know I could use the money.
- You got four minutes, man.

All right. I'll be there.

(ROCK MUSIC BLARING)

(RAP MUSIC BLARING)

TEJ: The race starts in four minutes.

All right, girls, let's do this.

(GIRLS SPEAKING JAPANESE)

(RAP THEME SONG PLAYING)

- You think you're gonna win, baby?
- What do you think?

- You better. We got rent to pay.
- I know this.

(SPEAKING SPANISH)

I'll get you when you get a car worth racing.

There's our fourth right there.

Shit. It's Brian.

(ENGINE REVVING)

(CROWD CLAMORING)

- What's up, Tej?
- What's happening, dude?

- Thanks for the invite.
- No problem at all, man.

Just remember me when you wax, all right?

They got deep pockets?

Real deep.

- What's up, Suki?
- What's up, Bullitt?

What do you say we kick it a nickel?

(SPEAKING SPANISH)

Nobody said nothing
about raising the stakes.

If that's the case,
why don't you ask these nice people here

to back off the line so you can go home.

(CROWD BOOING)

Okay. $3,500.

(SPEAKING SPANISH)

(CURSING IN SPANISH)

$3,500?

Either that or you can go home, bruh.

- It's all there.
- Better be.

Damn, Suki, when are you
going to pop my clutch?

As soon as you get the right set of tools.

Yeah, all right. All right.

(CROWD CHEERING)

(ENGINES REVVING)

All right, back up, back up.
Let's go, let's go.

Yeah, yeah. Back y'all asses up!

Back up. Back up before
you turn into barbecue around here.

It's not a game. This is serious.

All right, back up, back up.
Get off the street. Off the street. Let's go.

Back it up, back it up. Everybody
keep your heads real, real clear, all right?

'Cause I got a surprise for y'all this evening.

(ENGINE REVVING)

Go, Slap Jack! Go, baby!

I got this. I got this.

(SPEAKING SPANISH)

(ENGINE REVVING)

Ready?

Go!

(TIRES SCREECHING)

(CROWD SCREAMING)

Oh, hell, no!

(TIRES SCREECHING)

You ain't passing me, dawg,
you ain't passing me. Come on.

What you got, man?

I told you, you weren't gonna pass me!

Move, bitch!

(TIRES SCREECHING)

(GRUNTING)

(YELLING IN SPANISH)

(SPEAKING SPANISH)

Not tonight, baby!

Bend over, boy.

Damn, girl!

Last turn, last turn.

Too wide.

Home stretch, baby.

(NITROUS OXIDE HISSES)

(EXCLAIMING)

Got to go, dawg!

(YELLING IN SPANISH)

Yes!

(YELLING IN SPANISH)

I can smell you!

Yo, Jimmy, hit it, baby. Hit it.

All right. Y'all see that?

I told y'all I had a surprise.

How you like that for a finale?

Bridge.

(NITROUS OXIDE HISSING)

(NITROUS OXIDE HISSES)

(EXCLAIMS)

(WHOOPING)

Shit!

(HISSES)

Oh, hell, no!

(TIRES SCREECHING)

Smack that ass!

(TIRES SCREECHING)

(GROANING)

Yes!

Tell me I saw that, man.
Bullitt and Suki sprayed the bridge.

I need to start making
y'all pay to even see this shit.

I got over $10,000
for my man right here, all right?

That's what I'm talking about, man.
Play with it.

- Smells good, don't it?
- Yeah, how about that, right there?

Right, right, right. Y'all see this?
Everybody take a real good look.

This is what you call mutual respect.
All right, let's clear out.

Anybody down for another race?

Shit.

Hey, make sure you bring that body
by the garage later

so we can work on that front end of yours.

Watch out.

Maybe I will.

Where are you going?

- It's time to get out of here.
- Why is that?

(POLICE SIREN WAILING)

(PEOPLE CLAMORING)

Nissan Skyline! Got him!

Shit! Shit! Shit!

Shit.

(ELECTRICAL BUZZING)

(GLASS SHATTERING)

Damn!

Let me see your hands! Put them up!

OFFICER: Yeah, this is him. We got him.

So, how long you been in South Florida?

- A while.
- Before that?

We know you're Brian O'Conner,
formerly of the LAPD.

- Man, You got the wrong guy.
- Really?

(KNOCK AT DOOR)

How you doing, O'Conner?

Let's take a walk.

MARKHAM: Carter Verone.

Born in Argentina,
but he's lived most of his life in Miami.

Now he owns the biggest
import-export business in the state.

You see, unfortunately, the cartels have
been successful getting drugs into Miami.

But they've had a hard time
getting the cash out.

We've been surveilling him for a year.

But we've never been able to put him
and the money together.

- We've swept his house, his warehouses...
- Nothing.

Customs here has done a great job
of getting us this far.

I'm just here to help get them over the top.

I was able to get an agent in undercover,

working travel and logistics for him.

Recently Verone put her in charge
of finding some new drivers.

Right, although we can't confirm
her status right now.

- You think she's flipped?
- She's one of mine. She's all right.

She's been in with Verone nearly a year.
Even lives at the compound with him now.

Look, it was the FBI's idea
to bring you in here. I'm against it.

But we need some good drivers that can
put this asshole and his money together.

You're gonna roll with Agent Dunn here.

And if I don't?

Here's a list of the laws you broke in L.A.

Obstruction of justice, aiding and abetting.
You know the rap sheet.

We can make this all go away
in the interest of justice

if you're willing to play ball.

So what's the idea here? Dunn and I
are supposed to be street racers?

That's right.

(SLURPING)

So, Dunn,

looks like we're going to be partners, bro.

Could you tell me,
what would be a better motor

for my Skyline, a Gallo 12 or a Gallo 24?

(CLEARING THROAT)

Twenty four.

I didn't know pizza places made motors.

See, man, come on, I can't do this.

I mean, seriously,
if this is what you're gonna give me,

I may as well take my chances in Chino.

BILKINS: We'll get someone else.

BRIAN: No way, man.

The only way I'll do this is
if I get to pick the driver.

(BILKINS SIGHING)

All right, O'Conner. Who you got in mind?

- This dude I grew up with in Barstow.
- Who's that?

Roman Pearce.

(ENGINE REVVING)

(EXCLAIMING)

- That your boy in the Monte Carlo?
- BRIAN: Yeah, that's him.

Yeah, he's got some skills.

And he's crazy as hell, I'm telling you.

In a good way, though.
He's the man for the job.

And he's got quite a record,
including three years upstate.

Says here, he's on house arrest now.

Can't go more than
100 yards from his home.

(ANNOUNCER CHEERING ON PA)

(ANNOUNCER WHOOPING)

(MUMBLING)

He always said he'd be famous.

BRIAN: Pearce!

Roman Pearce!

Yo, whatever happens next, just let it go.

I ain't in it.

(WHISTLES)

Rome!

Only my homeboys call me Rome,

Pig.

- I'm not a cop anymore, bro.
- Is that true?

Blondie here is not a cop anymore?

That's true. No badge.

BILKINS: Here we go.

(BRIAN AND ROME GRUNTING)

You still fight like shit.
You still fight like shit.

You better chill.

- What the hell are you doing here?
- I'm gonna choke you.

I told you to stay away from me.

(BRIAN AND ROME GRUNTING)

You should have told me.
I did three years, Brian.

I told you it wasn't my fault.

Why did you come here, O'Conner?

I got a deal for you.

When I needed your ass,
you were nowhere to be found.

Now you're trying to hand out deals?

I need you to come to Miami
and drive with me.

If you do, they'll take off that anklet
and they'll clear your entire record.

I did three years in jail.

Three years in jail over you, Brian.

- I know you better than you think.
- Maybe you don't.

Maybe you don't.

You guys finished?

This deal legit?

That's right. If you do this job for us.

- I told you.
- Shut up, punk.

So you're gonna clean my record
and get this thing off my ankle.

That's right.

I thought you couldn't wander
more than 100 yards from your home.

Why do you think
I'm parked so close to the derby?

Man, quit playing
like you're gonna pass this up.

You stupid...

Wait. Hold on.

Bro, what's going on?

I don't know if
I should be trusting you, man.

Just think of it this way.
It's an opportunity for a fresh start.

Now, let's just go do this, all right?

I wouldn't need a fresh start
if it wasn't for you.

Man, you've been using that
since the day you got busted.

- Now, let's just chill out and go do this.
- I don't need to chill out.

Yes, you do. And you need to stop
blaming me for your every mistake.

And Roman Pearce needs to start taking
responsibility for his own actions.

- You need to go to hell.
- And you need to go back to Barstow.

I'm not going back to Barstow.

Brian O'Conner, Roman Pearce,
meet Monica Fuentes.

- Do they have background on Verone?
- They've been briefed.

MONICA: Good. All right, here's the deal.

Verone's looking for drivers.
I've arranged for both of you to join up.

I've also hired some thugs,
you know, to make it legit.

- When do we start?
- Right now.

What are we driving?

(ROME WHOOPING)

ROME: Don't even think about
taking the convertible.

It might loosen your mousse.

BRIAN: That's cool.
That's too much chrome for me anyways.

ROME: Damn! Where do you all
confiscate these rims from, man?

Check in with us after you meet him.

You think you're gonna have any problems
with these two knuckleheads?

I can handle them.

If they give you any trouble at all,
you let me know.

Thanks, Markham.

I ride with you, cowboy.

- ROME: Why she gotta ride with you?
- You get the convertible. Let's go.

Turn right here.

- So, you used to be a cop?
- Yeah.

How long you been under?

I lost track.

You all right?

You might want to keep
your eyes on the road, playboy.

- What, you think we're gonna crash?
- I haven't decided yet.

(ENGINE REVVING)

What are you doing, Brian?

(TIRES SCREECHING)

He did the "stare and drive" on you,
didn't he? He got that from me.

MONICA: Once we get in here,
you're on your own.

Look at that one.

Where'd you get them cars?
At the bottom of a cereal box?

Real funny, Fonzie.

Ass.

Roberto, Enrique,
I need pictures of the drivers,

their license plates, their cars,
and anything else you can find.

(SPEAKING SPANISH)

(WHISTLES)

Let's go.

Keep your mouth shut
and follow my lead, all right?

- I got this.
- No, I'm serious now.

Handle your business. I'll handle mine.

(SPEAKING SPANISH)

Watch your hands, bruh.

ENRIQUE: Go in line.

Let's go.

Carter.

- The drivers are here.
- Good.

Come on.

Stay.

(SPEAKING SPANISH)

What's going on here, bro? Tell me.

VERONE: Thank you for coming
on such short notice.

My red Ferrari was confiscated yesterday

and it sits in an impound lot in Little Haiti.

It's about 20 miles from here.

The car isn't important. What is important
is the package I left in the glove box.

The first team back here with the package

will have an opportunity to work for me.

What are you saying? We got to audition?

Nobody's got a gun to your head.

That's it.

Driver's licenses. Pass them up.

Before Christmas, guys.

(SPEAKING SPANISH)

MAN: Let's go!

Come on, cuz!

All right, let's see what this thing can do.

(HORN BLARING)

Agent Markham.
I've got them heading south on I-95.

Yeah, I got it.

They're running. What a surprise.

Come on, stick with me, Rome.
What you got?

Why must I chase the cat?

Smart-ass.

Oh, yeah, you think you're the bomb, Rome?

(TIRES SCREECHING)

(MAN SCREAMING)

(TIRES SCREECHING)

(EXCLAIMING)

Let's see if you still got it, Brian.

All right, Rome,
I got something for your ass.

Watch this, bro.

Shit.

Damn, Rome, how do you like them apples?

Show-off!

That's the Brian O'Conner
school of driving right there, baby!

Crazy-ass white boy!

Shit!

(TIRES SCREECHING)

(REGGAE MUSIC PLAYING)

MAN: Bumbaclot.

WOMAN: You better get yourself
out of the street!

That's some bad shit, man.

What do we got?

That's good. Show me his partner.

Cars, cars. Where are the cars?

Stinking boats. Where are the cars?

Come on, I need the cars.
Where are the cars at?

- Look in the center. Look in the center.
- What?

Cha-ching!

- Now put your blouse back on.
- Hater.

(CARS APPROACHING)

ROME: Shit!

- Don't let him get away.
- Not a problem.

Sit on it, Fonzie!

(POLICE SIREN WAILS)

What the hell?

Shit. Cops.

ROME: What the hell are they doing here?

BRIAN: Rome, no!

Time to go.

Son of a bitch!

MONICA: Juvy record for popping cars.
Two years in J.D.

Then another year for aiding and abetting
an armed robbery.

He's clean. Dirty, but clean.

All right.

Hey, man. You got something
to eat up in there?

We hungry.

Sit them by the pool.

Nice. Come on.

- What are you checking her out for?
- I'm not checking her out.

- Yes, you were.
- No, I wasn't.

- I seen you checking her out, man.
- Okay, I was. Now shut up.

You shut up. Don't tell me to shut up.

Both you girlies shut up. Unbelievable.

You sure are cozy in this big old mansion.

Sleeping with the enemy.

No, no, no, no. Sit down.

Nice Ferrari you got in the driveway.

I'm glad you like it.

Darling, will you hold that?

We did all that for a damn cigar?

No. You did that for a job.

Do you really think that
I would let somebody impound my car?

The boatyard is mine.

By the way, you two owe me a gate.

I'll just take it off your cut.

(SCOFFS)

- Off our cut?
- Yeah.

- I like that.
- Good.

What's this job you got for us, anyway?

Come with me.

The house has ears in it.

I have something I want you to carry
from North Beach to the Keys.

What is it?

Just put in the car what I tell you to
and drive it to me

and don't let anybody stop you.
Understand?

Yeah. Any chance of cop trouble?

No, I'm buying you a window of time,
but it's not gonna be open very long.

You make it,

and I'll personally hand you
$100,000 at the finish line.

Make it $100,000 a piece, papi.

Look, man,

obviously

your pockets ain't nervous.

- Don't ever touch me.
- Ours are empty.

Like I said,

we hungry.

I got an idea. Why don't you two boys
join us at the club a little later tonight?

Yeah. Pearl at midnight?

- Get to know each other a little bit better.
- That sounds good.

- We'll see you tonight.
- See you.

Hey, you!

- Your pockets aren't empty.
- Damn.

I'll take my cutter back.

BRIAN: Stupid ass.

Hey, man, I figured you
had like 12 or 13 of these

You're not too bright, are you?
Just get out of here. Get out of here.

Same old Rome
doing the same old stupid shit.

Get off me, man.

Look, running your mouth?
Insulting people? Stealing Verone's shit?

You think I'm gonna let somebody
stare me down?

I didn't let nobody
stare me down in jail, homeboy.

You think I'm gonna let it fly on a beach?

"And you, I'll take my cutter back."

His rich ass.

- And you're packing.
- Like you ain't.

Exactly.

- From here on out, I do the talking.
- You want to do more than that.

What's that supposed to mean?

It means you're always getting in trouble
over a female, Brian.

BRIAN: Man, Tej's garage is ridiculous.
He's got the best of everything.

Snap-on tools. All these lifts are brand new.
They're only maybe a couple of months old.

- Hey, yo, Jimmy. What's up, man?
- JIMMY: Hey, what up, Bullitt?

That's Rome right there. Do me a favor.

When you get a second, I want you
to check out the Evo and Spyder.

Make sure everything's copasetic.

Evo? Where'd you get an Evo from?

- It's a long story.
- I got you, man.

- Thanks, Jimmy.
- Come check this out.

Man, it's so hot and humid,
I can't even wear drawers.

Man, tell me about it.

Look at all this potential out here.

Ray, don't do that, man.
You're making me lose money.

Come on, stop that.
I know you're better than that. Come on.

Damn.

(CROWD CHEERING)

(RAP MUSIC PLAYING)

Girl, you know your boy can help you
put that fire out! Look at the bubble on that.

- Let's go.
- ROME: That's serious.

TEJ: Come on, Ray,
you're making me lose money.

Don't do that. Don't do that to me right now.

Come on, Ray. Do it.

Tej Parker? This is Roman Pearce.

Basically, he's the man to know in Miami.
He's got his finger in absolutely everything.

- It's just the way it is.
- Come home to daddy. Come on now.

- What's going on, Suki?
- What's up, baby?

- How you doing?
- I'm good. How you doing?

What's this? What's the latest?

It's a work in progress. It's not finished yet.

That's some artistic shit.
You got talent, girl.

Ray, it's do or die right now!
Bring it home, Ray! Bring it home, Ray!

Yeah, baby!

Pay up! Pay up! Pay up!

Pay up, everybody.

That's how they do it out here, man?

- Every day.
- That's crazy.

Right here. Right now.
What's up, man? You don't look too happy.

Expeditiously, man. I need it quick.
What's up? Thank you. Thank you.

How you feeling, man? You all right?
Thank you.

Not too bad.

I see you're about your money, homey.
You race, too?

No, man. I hit a wall doing
like a buck 20 a couple years ago.

Ever since then, I've just been
organizing and collecting, man.

Hey, Tej, check it out.
He's gonna be in town for a while.

Is there any way he could use that cot?

- What's wrong with your place, man?
- No.

I don't want to stay with him.
He got bad habits.

All right, man, whatever. Show him around.
I'll be up there in a minute.

- Thanks.
- Sure.

All right, who wants a chance
to win their money back?

So, Jimmy? So, what's up,
you ever seen anything like this before?

No. Both of them
are wired like I never seen before.

What?

Yeah, man, they got us wired with GPS.

That's why Markham knew
we were gonna be at that impound lot.

Yo, you the master mechanic.
Why don't you just yank that shit out?

I'll try, but this ain't LoJack.

The DIS box, the engine management
system, hell, the main harness,

the GPS is spidered into all of that.

Hey, tell me something, man.

Do I even want to know
where the Skyline is, dawg?

Or where you've been
the past couple of days

or where the hell you got these rides from?

- They're hot.
- Yeah, they hot.

They wired so hot that
whoever's tracking these things

would know every time
you don't wear your seat belt.

All right, Jimmy.

- Just do what you can do, bro.
- I got you.

Thanks, man.

Man, we need to get these
on the street ASAP.

Hey, bro, check it out.

See that Cadillac across the street
over there?

Yeah.

Yeah, well, they've been on us
ever since we left Verone's house.

(SPEAKING SPANISH)

Elian and Fidel!

Hey, man,
can I clean your windshield, buddy?

What are you doing, man?

(SPEAKING SPANISH)

ROME: Is everything copastetic, homey?

(SPEAKING SPANISH)

Kiss my ass.

Shit.

ROME: Let's go! Let's go! Let's go!

(CURSING IN SPANISH)

He's gonna blow our cover
before we even get started.

- Bilkins, tell me what went wrong?
- That's what I want to know.

Show me your hands.
Come on, keep them up!

- What's this about, man?
- What's going on?

Hold this. You think you can shoot at me?
I'm a goddamn federal agent.

What are you talking about?

Get your damn hands off me!
Get him away from me, dawg!

Just 'cause you wear a badge doesn't mean
you can mess shit up for us, homeboy!

Get your hands off me!

- You're lucky I didn't shoot you!
- Shut up!

Don't tell me to shut up, Brian!

- You almost blew our cover, old man!
- MARKHAM: I'm right here.

You shouldn't have shown up like you did.

You didn't know Verone was testing us?

- No, I thought you punks were running!
- Running?

That's great. That's real great!

And if Rome wanted to shoot you?
You wouldn't be here right now.

All right, we got to get this under control.

That's mine!

So?

- Tell me what you know.
- Rome and I will be making a run for Verone.

I'm not sure when or where,

but he did say that he bought us a window,
I'm assuming from the local cops.

I can talk to some of the guys
at the local P.D.

No. No good. If Verone's got some of them
on the payroll,

then we can't let them know our operation.

Exactly.

In addition, Verone told us that
he himself would be waiting at the drop.

That's good news.

If you're gonna be delivering drug money
to him, then we can get him for laundering.

- Now, there's only one problem.
- What's that?

Fuentes.

- Verone's tapping her.
- Tapping her?

- Tapping her how?
- That is crap.

Now what you talking about, homeboy?
We know what we seen.

So what do you think, O'Conner? You think
she's compromised? You should know.

- What's that supposed to mean?
- Your old pal O'Conner didn't tell you?

He flipped on Bilkins in L.A.

He gave his mark his car keys
and let him disappear.

That's why he's not a cop anymore.

So what do you think, expert?

Man, I don't know.

All right. We'll keep an eye on her.

We're out of here.

Let your man go?

Drop it. I don't wanna talk about it.

Drop it, hell.
I want to hear about this, homey.

I said, forget about it, cuz.

We got Fuentes in with Verone,

Markham trying to blow our cover,

and we got two wired cars that are no better
than that damn ankle bracelet of mine.

I'm gonna tell you, bruh, you let Markham
do that shit again in front of Verone,

that's gonna be our ass!

I know, man. I know.
It's just getting thick real quick.

We may need a way out, we got to come up
with some kind of an exit strategy.

- Exit strategy?
- Yeah.

I like the way that sounds.
What you got in mind?

I don't know, man.
But we need two more cars.

Yeah. Here they come.

Fonzie and Fabio. Glad you can join us.

We heard you boys wanted to get rid
of those Cracker Jack toys.

No, actually we just figured
those cars you got

deserve better drivers, which is why
we're gonna take them off your hands.

You know, why don't we settle this now?

Wait, wait, wait. How about we settle
this on the blacktop?

Each car does a down-and-back,
tag-team style. For slips.

Loser walks home.

- We came to race.
- Load them up then.

Come on, bro, let's get these cars.

All right, check it out. There's no way
we're gonna beat these guys straight up.

That Hemi's putting out about 425

and that Yenko will snap
a speedo in about five seconds flat.

We're gonna have to pull something
out of our ass.

The only thing I can think of is save
the spray for the way back.

The return trip.

- Done deal.
- All right, let's do this, bro.

I'm getting that orange one.

(ROME LAUGHS)

You ain't ready, Fabio!

TEJ: All right.

You each got a barrel to go around
down at the end of the road here.

Second wave's got to sit tight till
your partner crosses this line right here.

First team to go down and back twice
wins the race.

At which point,

the losers will hand over them keys.

Otherwise you'll be eating breakfast
through straws from now on.

(SPEAKING SPANISH)

I get it.

This means you, too.

I got it.

All right. Let's race.

(ENGINES REVVING)

Come on, baby, you got this, Rome!
This dude ain't serious.

Yeah, you gone, homey.
I got this. This is done.

You about to lose your car.

- Do it, Rome!
- Come on, bitch, you got it, man.

You think I'm worried about this fool, man?
This is nothing!

(ENGINE REVVING)

(ENGINE ROARING)

- Oh, no.
- American muscle.

Your engine ain't as big as your mouth.

Got to smoke him.
Got to smoke him, got to smoke him.

All right, here we go!

- It's all right, baby, I'm gonna handle this.
- Handle it.

Ready, and go!

(TIRES SCREECHING)

You ain't ready! I run these streets!

(WHOOPING)

Romey Rome! You ain't heard of me?

Oh, shit.

(CHEERING)

I'm gonna get you. I'm gonna get you.

Where's your big mouth now?

That car's going home with me, homey.

(NITROUS OXIDE HISSES)

Shit. Eat this, sucker!

Shit!

(ENGINE REVVING)

Yeah, boy! Go, Korpi!

Sorry, blondie, how does that dust taste?

I don't know.

Come on, Rome.

What the...

Good move, kid.
Let's see if you got the balls. Come on.

(WHOOPING)

Come on, Brian, bring it home, man!

We got two new cars!

Damn!

Y'all ain't ready, homeboy!
Get to walking, Fabio!

ROME: Use them bus tokens, partner!

- BRIAN: Hey, how you doing?
- Good. What's your name?

We're guests of Mr. Verone's.

(RAP MUSIC PLAYING)

It's a hoasis in here, bruh.

Yeah, lots of potential.

Damn. You got a pen?

It's about to get serious, bruh.

Look at that girl on the swing right there.

Hey, you guys did something right.
Verone never socializes with hired help.

Now what's that make you?

- Where's he at?
- He's on his way.

You and Verone
don't go everywhere together?

- What's that supposed to mean?
- Nothing.

- I'm gonna go take a piss.
- You go do that.

What is his deal?

He doesn't trust people who carry badges.

So you talk like you know.

I'd been a cop about two months
when Roman was busted in a garage raid.

He had eight sets of wheels
in his possession, each one of them hot.

So you busted him?

No, I didn't even know it was going down.
But that doesn't really matter to him.

Basically, once I became a cop, Roman saw
me as a friend who became the enemy.

Is there anything I can get for you,
Mr. Verone?

VERONE: Just tell them to come join me.

Oh, yeah. I was admiring this.

Damn.

- I wasn't about to give it to you.
- Good.

- What's up?
- He's here, man.

Where's he at?

He's over there. Don't look.

Excuse me, Mr. Verone
would like for you to join him.

Let's do it.

See what I'm talking about?

VERONE: It's all right, let them in.

Go sit down, I'll talk to you in a second.

- BRIAN: How you doing?
- Good. Enjoying your night?

- Yeah, I'm having a good time.
- Good, good.

She's beautiful, isn't she?

Yeah.

She's gorgeous.

You got balls, kid.

I can appreciate that.

Women are a very powerful force.

You see the blonde sitting
with the gentleman right here?

Five minutes of her time, and she
can get anything she wants from him.

I love your hair.

Watch.

I wonder where they're going? Sit down.

So you lit my man's car on fire.
Is that right?

Yeah.

I did.

You see, I got a problem with authority.

I have that same problem.

For me, it's cops in particular.

(CHUCKLING)

Let's take a walk. Come on.

- We just got here.
- And now we're leaving.

Let's go.

Come on.

What's all that?

We're going to have a little fun.

(CHAMPAGNE FIZZLING)

(GLASS CLINKING)

Thank you.

- It'll be fun. Let's stay longer.
- Let's get out of here.

Hey, Carter.

Meet Detective Whitworth.

One of Miami's finest.

Thank you, sweetheart.

You enjoying yourself, Detective?

Yeah, I was.

I mean, you know me.

Yeah.

I do know you.

You've been on my payroll a long time.

- Verone, that ain't right.
- Shut up.

I've got one last job for you, Detective.
You hear me?

- Look, we've been all through this.
- Yeah?

Yeah, and I said I can't do it.

That's the wrong answer. The table.

(WHITWORTH GROANS)

I'm a detective, Verone!

You do anything to me, the whole
force is gonna be on your ass in a minute.

Shut your mouth, you fat piece of shit.

Stop right now.

(RAT SQUEAKING)

What the hell? What the hell is that?

Sit down.

You're going to regret this. Stop right now!

Once the bucket
gets hot enough, Detective,

the rat is gonna want out.

And the only direction it can go, is south.

Hold that.

Get it off me!

Shut up.

Did you know that your average rat
can chew through a steel drainpipe?

You see, you have nothing to worry about
when he's screaming, Detective.

It's when he goes quiet
that he goes to work.

WHITWORTH: Stop it! Stop it! Stop it!

You can't be this stupid! Stop it now!

You're in charge of the units
that are watching my properties.

What I want is, I want a 15-minute window

where everybody, and I mean everybody,
disappears. You hear me?

- I can't do it!
- You can't?

(WHITWORTH SOBBING)

WHITWORTH: Stop it.

Okay. Monica, come here.

WHITWORTH: Help! Help!

Shut him up. Shut him up.

Help!

(SQUEALING)

(SCREAMING)

It's biting me!

(MUFFLED SHOUTING)

What?

Got something you want to say?

It bit me. Jesus.

- WHITWORTH: I'll do it!
- Do what? Say it.

I'll do it. I'll give you your window.

Just get it off me.

Get it off!

You betray me,

and my rat here

is gonna visit your wife, Lynn,

your son, Clay, and your daughter, Lexi.

Do you hear me? Do you understand me?

- You hear me?
- Get it off.

I'll burn your fucking eyes out!
I'll burn them out.

Now, you can go.

- Get rid of him. Let's go.
- Get it off.

You boys enjoy the show?

Fifteen minutes, and then every cop
in Florida's gonna be on you.

Be at Versailles Cafe at 6:00 a.m.,
day after tomorrow, ready to drive.

- You understand?
- Yeah.

Don't play games with me

or you'll be next. All right?

Help yourself to a little champagne.
Let's go.

That was a damn rat, man.

You ever touch another man again,
and I'll kill you.

You hear me?

Look at me. You hear me?

ROME: She was into it, man.
What's that about?

You seen the way she grabbed
the dude's head.

She had to, man. He was testing her.

You got to remember,
her ass is on the line, just like ours.

You're feeling this girl way too much.

She's like that crazy-ass trailer rat
from back in the day, Tanya.

Tanya? Man, you went out with her
after I did.

I mean, I couldn't let it go to waste.

JIMMY: I got you. I got you. I got you.

Is that right?

We go race for cash,
but when I step on the gas,

my nitrous go blast,
leave your ass in the past.

Tej, you about to lose your garage.

Whatever, man.

I'm a low-budget mechanic,
but I overcharge.

Pay me! Let's go, man.

Pay me my money. I told you, man.

I'm glad you're happy man. I'm so glad.
This is my garage, boy.

Royal flush. Give me this, man.

You got to talk to him, talk to him.

Damn, you can't play and play it for long.

Put that money back on the table.
You know it's mine next hand.

Jimmy, how are you gonna pay me back
if you keep losing to Tej like that?

- How you doing, bro?
- Real good.

I'm going to crash, Tej.
I'll catch you tomorrow.

What are you doing here?

Brian, they're gonna kill you.
I heard him telling Enrique and Roberto.

Once you finish the run,
they're putting a bullet in your head.

You sure you heard him right?

I'm sure. I'm sure.

(KNOCK AT DOOR)

Verone's boys is outside...

I see what they're looking for.
Your little girlfriend here.

- They don't know I'm here. I snuck out.
- What the hell are they doing here then?

I don't know. Maybe they're guessing.

Go stall them.
Go stall them for, like, two minutes.

Check her, homey. Check her.

Found what you're looking for?

Hey, buddy. Hi, guys. How you doing?

Y'all still mad about y'all car?

Don't even trip, homey.
Come on, man, can't you take a joke?

All right, this isn't about being a good cop
any more or doing your job.

They're gonna kill you.
You guys gotta pull out.

Verone pay y'all
to keep a straight face like that?

'Cause if I was making money, shit,
I'd get that mole removed off my damn nose.

- Okay?
- Yeah.

How much he pay y'all anyway?

Every time I see y'all, man,
y'all got the silk shirts on,

jewelry, you know, looking real Miami.

I caught you walking up in the club,
you got the hamburger meat all hanging out.

Don't make that run, Brian.
Don't make that run.

Be careful.

(ROBERTO SPEAKING SPANISH)

(SPEAKING SPANISH)

Where are you going?
You stay right here with us, buddy.

Don't even think about it.

Stay your ass off my homeboy's boat.

(ENRIQUE GROANS)

Put the gun down! Put the gun down now!

You first, asshole! You first!

I'll shoot the shit out of him!
Now, put the gun down!

(YELLING IN SPANISH)

Put down the gun now!

Put down the gun!

Enough. Enough.

Shut up. Shut up.

It's over. Come on.

It's over. Let's go.

It's our gun. Come on, let's go. Let's go.

I'm glad to see you boys
are getting along so well

because tomorrow, Roberto and Enrique
are gonna be riding along with you.

Just so we don't have any problems.

I'll see you guys in a bit.

What the hell was she doing in there, man?

Where'd you go this morning?

I went to breakfast with some friends.

With friends?

(CHUCKLES)

I do have friends, Carter.

(CHUCKLES)

Okay.

I'll see you later.

Nice shirt, Bilkins.

- It's my day off.
- Yeah.

Well, anyhow, this is the deal.

Last night, Verone threatened a cop
into giving us a window.

We're driving to an airstrip
in the Keys, off Nallwood Avenue.

Verone has a plane there
and he's taking off for good.

Wait a minute. How do you know this?

Monica.

She's doing her job. She warned us.

She warned you about what?

Verone plans to kill us
after we give him the money.

Driving into an ambush was never
part of the deal. I'm calling this off.

Like hell you are.
This is a Customs case, Bilkins.

No one's calling this off unless I do.

Look, this is real simple.

You make the run, you get Verone and his
cash together so I can move in for the bust.

You don't, I'll file enough charges
on both of you to make you disappear.

Take these.

We're gonna have GPS on you the
whole time so you don't get any cute ideas.

And to make sure
nothing happens to them, right?

Yeah, right.

ROME: That guy's a dick, man.

BRIAN: Yeah.

Let me get this right.

If we don't do this, then we go to jail.

But if we do it,
then Verone's going to kill us.

- It's a hell of a deal, huh?
- Yeah.

Maybe it is.

I know this guy's got an ass full of loot
that he's ready to dump in our cars.

And I can think of two reasons why
Verone doesn't need that money any more.

Here we go.

You and me.

Just like the old days.

What do you think?

I think they messed with
the wrong two guys, that's what I think.

- Yo, Tej, what's up, bro?
- What up?

Hey, man, how quickly can you organize?

TEJ: Look, if y'all really want
to carry out this plan,

this is definitely the best place to do it.
So what do y'all think, man?

I think it's perfect.
So, what do they store here?

Man, this thing is clean.

Distributor cap.

Jimmy, do we have any half-empty
bottles of nitrous lying around?

Sure, but I've already loaded you for spray.

No, I'm thinking we may need it
for something else

'cause our cars may get
a little crowded, you know?

Man, when did you start eating so much?

I was in jail, bruh.

I know how shitty the grub is on the inside.

With the way things are shaping up
out here right now,

it'll be a matter of time
before I'm back in there, or dead.

So I'm trying to eat all I can while I can.

Plus, the doctor tells me
I got a high metabolism.

Man, you remember us growing up?

You know, playing football in the dirt?

You know, getting into trouble.
All the stupid things we did?

When you got busted, you know,
whether I was a cop or not,

you know, if there was anything
I could have done,

you know, I would have done it.

I just want you to know that.

Is that why you let that dude go in L.A.?

Yeah, I think that had a lot to do with it.

When I got busted

it wasn't your fault.

It was all on me, Mr. Roman Pearce.

Wild and out. Crazy man.

No one could tell me nothing.

Riding solo.

Yeah, well, not anymore.

Not anymore, bro.

I've got Verone's Navigator
leaving the residence.

Copy.

Sir, we've got Verone on the move
to the airstrip.

Good. Let's get a bird in the air.
Tell him to keep his distance.

AGENT 1: Ready to go.
AGENT 2: Thanks.

(INDISTINCT CHATTERING)

- You're all set.
- Thanks.

- All set?
- Yeah. Let's do it.

Report.

What's going on out there?

Team One, checking in.

- Team Two, checking in.
- Team Three, checking in.

AGENT: Team Four, all clear here, too.

AGENT 1: Team Five, checking in.

AGENT 3: Team Six, all clear.

ROME: Here we go.
BRIAN: Yeah, so you know what to do.

BRIAN: Stay cool. Keep focused.

Remember the airstrip's
off Nallwood Avenue.

It's the third exit after the bridge.

Got it.

So, what up, man, you ready for this?

Come on, man.
Guns, murderers, and crooked cops?

I was made for this, bruh!

ROBERTO: Come on.

(TAPPING ON DOOR)

(SPEAKING SPANISH)

I got activity at Verone's trailer property.

Do not move an inch until I tell you to!

(SPEAKING SPANISH)

Load up.

All units,

move on the trailer property.
Right now! Move!

(POLICE SIRENS WAILING)

Shit. Local P.D. is moving in on our guys.

- Three bags in one car?
- Guess so.

(POLICE SIRENS WAILING)

(HELICOPTER APPROACHING)

The cops.

I'm not going back to jail.

Where are you going, man?
Let's go! Let's go!

What is he doing?

Okay, now let's get the chopper over them.
I want eyes right on top.

You got it.

Lima 2-5,

follow GPS.

Do you know what you're doing, man?

Stay with me, Rome. Stay with me.
Come on, man.

FEMALE PILOT: I've got them
heading south on I-95.

Bring in the aerial ESDs.

(SIRENS WAILING)

Oh, shit!

- They're catching up, man!
- Shut up, man!

(TIRES SCREECHING)

Nice driving, Rome, nice driving.

I got you, Brian.

Check it out!

What was that?

(TIRES SCREECHING)

Oh, shit!

- Come on, man. Take the wheel.
- No, no, no, no. I can't drive.

- Just hold the wheel! Put your hands on it.
- I can't drive!

Just hold it steady. Just like that.

What are you doing, man?

(SPEAKING SPANISH)

(GRUNTING)

(TIRES SCREECHING)

(YELLING IN SPANISH)

Yeah, man!

Hold.

Bilkins, the bird's in place.

Yeah.

We've got Verone's Navigator.

All right. Money's in transit. Sit tight.

You're a good driver, man.

Thanks, bro.

We've got the area blocked ahead.
They've got nowhere to go.

What was that?

MALE PILOT: I've got a visual.

Video should be coming through.

I got it. Looks good.

Where are they going?

Shit.

All right, Miami's finest,
let's see what you got.

Come on. Stay with me, boys.

Hey, man, everyone's here.
Time for the show.

Let's give it to them.

All right, let the party begin. Let's go!

This is unit 25-99.
We have the suspects surrounded.

(INDISTINCT CHATTERING ON POLICE RADIO)

(ENGINES REVVING)

(WHOOPING)

(MAN YELLING IN SPANISH)

Holy shit!

It's a scramble, baby! A big one!

Yeah! Let's do this!

Check this out.

We're not tracking them on video.

We must have lost them in the scramble.

Yo, let's break.

Yeah!

(YELLING IN SPANISH)

All right, we got them going west on Beach.

Roger that! I've got them!

Customs has a fix on two cars
going west on Beach.

OFFICER: Roger. Follow those cars.

Roger that.

Shit.

They're cornered.

OFFICER: Keep your hands
where I can see them!

Hands up!

Whoa, fellas, fellas, I know my tags
are out of date, but damn.

What the hell?

Where are they?

(WHOOPING)

(SPEAKING SPANISH)

How about them apples, man?

Yeah! That's some driving
for your ass, baby!

Ain't that some driving for your ass?

Good job, man.

- What are you talking about, man?
- Whatever, man.

You're supposed to be a stone-faced killer!

You over there were grabbing your seat belt!

Hey, Tej, thanks a lot, bro.
Man, you're clutch. I owe you one big time.

Yeah, Brian, you really do owe me, man.
You really do...

Us.

Suki says you owe us, all right?

- Yo, Rome, you there, man? Come in.
- What's up, man?

It looks like we got just one more trick left.

My pleasure, buddy! Let's do it, baby!

Maybe we should grab Verone
while we still can.

No! Not yet!

What?

You lost them?

Shit!

Those little pricks are running!

It's your call. What do you want to do?

We're gonna take him down.
He is not leaving here.

Enjoying the ride?

Man, it's a fast car, huh?

It's a classic. Old school.

American muscle.

Man, this car can do all kinds of things.
Want to see?

(ROME LAUGHING)

Check this out right here, homey.

Hey, what are you doing, man?

(ROBERTO GROANING)

(NITROUS OXIDE HISSING)

(WHOOPING)

(YELLING)

Ejecto seato, cuz!

It worked! I love this button!

ROME: Stay on your toes!

Mr. O'Conner, it worked, baby!
Blow and go. I'm all clear.

Meet me at the point!
Hurry up, man! It's on, baby!

All right. 10-4, man.

Are you ready? Let's go!

Let me see your hands!
Let me see your hands!

AGENT: Freeze!

Clear!

(AGENTS CHATTERING)

MARKHAM: It's not Verone and Fuentes.

What do you mean,
not Verone and Fuentes?

Then where the hell are they?

Get off at Tarpon Point.

Tarpon Point?
There's no airstrip at Tarpon Point.

Who said anything about an airstrip?

Brian?

Brian, man, what's the hold-up, bro?

- Yo, bro. There's a new plan.
- What the hell?

We're meeting him at the Tarpon Point exit,
not the airstrip.

- So, what are you saying?
- Like I said, there's a new plan.

Brian?

Brian? Hello, you there?

Damn!

- Yo, what the hell is he doing?
- The feds are in the wrong place.

Brian's woman is on her own with Verone.

So...

So Brian's not coming!

- It's all right, let him out.
- Get out.

Pop the trunk.

(SPEAKING SPANISH)

Hurry up.

Where's the rest of it?

- The other car.
- Another car?

- Where's the other car?
- On its way.

- On the way?
- Yeah.

Here's your money.

So you know nothing about the agents
that stormed my jet?

The funny thing is,
I only told one person about the airstrip.

Customs agents sure
are getting pretty, aren't they?

Put her on the boat.

- Let's go.
- Get on the boat.

Hide the cars and get rid of him.

ENRIQUE: Back in the car.

End of the road.

You know, I like you.

But I still got to kill you. It's my job.

(CLICKING)

What's that?

ROME: It's Barstow, baby!

It's about to get ugly!

(BOTH GRUNTING)

Let's go. Let's go.

(GRUNTING)

(SCREAMING)

(GROANING)

Come on.

You had me.

You slipped.

Eleven and a half months,
and you slipped once.

Put her downstairs.

See you in a second.

I thought you was dead, man.

Yeah, me, too.
Thanks for saving my ass, bro.

What are you doing, Brian?

I don't know, but if Verone sees
a helicopter or Customs boat, she's dead!

ROME: Boat.

Car. Boat.

You're not gonna do
what I think you're gonna do?

- Yeah, I think so. You got my back, bro?
- Yeah.

All right, put on the seat belt.

Show him some Dukes of Hazzard shit!

We're gonna do this big!
Hold on, Rome! Hold on!

(ROME SCREAMING)

Brian, you're crazy, man!

What the hell are you doing?

(SCREAMING)

(SCREAMING)

(GROANING)

I think I broke my arm, man.

(FOOTSTEPS APPROACHING)

(GUN COCKING)

Get the gun.

(GROANS)

It's over, Carter.

You okay?

Yeah!

I'm great.

We got him, man.

We got him. Let's get out of here.

That ought to do it.

So, there were three bags total?
The three from the boat?

So we're good, right?

Our records are clean?

You held up your end.

Your records are clean.

So maybe there were six bags.

I guess we can call it even.

- Agent Dunn?
- Sir.

We found some more evidence.

Come on, let's take it to the truck.

Don't drop the soap, big homey.

I hope you know that when he gets out,
he's going to kill your ass.

He ain't getting out.

I'll see you soon.

- You think he's going to get out?
- He'll be out.

Not for real.
You think he's getting out, dawg?

We took care of your decoys.
They're free and clear.

There's a sedan out on the road for you.

Try to bring it back in one piece.

Thanks a lot, Bilkins. You're all right.

- Thanks.
- Thanks for looking out, man.

Do you trust me now?

You're all right.

(GROANS)

Sorry.

Nice working with you, O'Conner.

Same here.

I might have to stay here in Miami,
and keep you out of trouble, bruh.

You know what I'm talking about.

You're going to kick it in Miami, bro?

Oh, man, I love Miami. Miami is off the hook!

Open a garage together.

A garage?
How are we going to do that, bruh?

Pockets ain't empty, cuz.

And we ain't hungry no more either, right?

(RAP THEME SONG PLAYING)

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
