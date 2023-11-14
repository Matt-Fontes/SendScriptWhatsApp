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
The Human Centipede (First Sequence) (2009)

By Tom Six

Hi!
Yes um, I was wondering if
I could get driving directions...
to a nightclub called Bunker.
Yes, Bunker.
How exactly would I get there?
It's Amy!
Hello, sweetie!
OK.
How are you?
We miss you is strong!
Yes, we wanted to be
here with us.
Yes.
And how far is it?
No we're in Germany.
Then we travel to Italy in a couple days.
Great.
Thanks.
Alveterzane!
I know.
Tell her we got her a present from Holland.
Yeah we got you a present.
No we can't tell you what it
is, it's a surprise.
Oh yeah, the other thing is that
we met this cut German waiter.
Jenny thinks he's pretty cute
Yeah, and he invited us to a party
tonight.
So we're going to go.
But we should go.
Maybe we can talkto you later.
OK.
All right.
We miss you!
Bye, Anie!
Kisses!
OK.
Bye, sweetie!
I think we were suppose to turn
Turn!
I thought you know exactly
where we sere going!
Do we go left or right?
I'm sorry, but I just don't know
where we are.
What was that?
I have no idea.
You must have run over a pot whole or something.
We need to go out
and check it out.
Shit!
Shit!
Shit!
Why?
Oh God!
Okay, okay ...
Okay.
We call the rental car service.
get the papers.
Okay.
Okay.
what...
There's no signal.
What?
There's no signal!
There's always a signal.
Not out here in the middle of nowhere.
Oh my God, Shit!
Oh my God,
get back in the car.
OK ... Now what?
I don't know.
You know how to change a tire?
- No, I don't know how to change a tire.
- Neither do I.
What are we suppose to walk
until we find a house or a person or something?
Lindsay!
Lindsay. I am not getting out and walking.
Okay we're just going to sit here,
until the sun comes up.
I have heels and shorts on!
I'm not going outside!
Are those headlines?
Okay.
role down your window.
Are you kidding?!
I'm not going to just role down the window.
Role down the window.
He can help.
German
Yeah um, we need help.
We have a flat tire.
No, we speak English.
Can you help us?
Do not understand what he says.
Um, can you call someone?
"Ficken".
-Look it up.
Hold on a second.
Fucking!
He said Fucking!
- Okay. Bye.
- role your window up.
Goodbye.
- I'm sorry.
- I told you!
Is your door locked?
Yes, my door is locked.
Why's he still staring at us?
- Just don't look at him, okay?
- i'm not looking at him.
I just want to get out of here.
Okay.
We need to j-just go!
Gotta go from here.
We need to walk and find someplace,
somebody who can help us.
- Okay, but ...
- We have to!
But if we find apalce in 10 minutes,
we are running back to this car.
We came ...
We came from over here, I swear.
How do you know?
All trees look the same.
Leaving the car
is the stupidest idea.
We would have been waiting for hours, Jenny.
Yeah we could have been waitng
and it not be freezing cold.
We need to go fing help, Jenny.
Seriously find help?
How are we going to fing help out here, Lindsay?
You agreed to come along, Jenny.
This not just my fault.
I didn't want to stay in the car by myself.
We just got a little lost, okay?
- A little lost, Lindsay?
- Yes!
We are not a little lost!
We're really lost!
You know what, Lindsay?
I'm no longer walingg.
I'm tired of walking, okay?
- Jenny, trying!
- Trying what?
- Lindsay, we've been down her for like an hour OK!
- Yeah I know!
I'm tired and I'm cold.
I'M NOT MOVING!
- I'M NOT MOVING!
- Stop it.
No!
- fine!
- fine!
fine.
- I'm staying right here.
- Good.
What is it?
My God is that a...
Is it a house?
Jenny!
Jenny, look!
I think it's a house!
I swear!
- It's a light! Let's go.
- What?
Let's go!
OH! FOR SOME REASON I DON'T BELIEVE YOU!
Oh thank God!
Come on!
Hello!
Anybody home?
Let's go to the front door!
Hello!
-Hello?
-Lindsay!
Come here!
- God!
- What?
Look at the dog!
- What about him?
- I don't like dogs.
I know you don't like dogs.
- Hello?
- Is anybody home?
See somebody?
No.
Hi.
- Hi.
- Hi.
We got a flat tire.
Can we come in ?
Can we use your phone so we
can call the car company service?
Are you alone?
Yes.
We're alone.
come in.
Have a seat.
You're tourists.
- We're on a road trip through Europe...
-It's a vacation.
We're from New York.
Can you call the emergency car service?
For us ...
Are you relatives?
- No.
- No, we're friends.
Very well.
I'll make your phone call.
Okay, thanks.
Something to drink?
- A water's fine.
- Yeah, just water.
Hello.
German
Well ...
at least he's calling the car company.
Here you go.
Water ...
Water ...
They will arrive in half an hour.
Maximum.
You have a a really lovely home.
You live herei with your wife?
No.
I don't like human beings.
German
I'm sorry.
I'll get you another one.
- No, it's okay, it's okay.
- We can share.
I'll fetch a towel.
What just happened?
I don't know.
We need to get out of here right now.
Yeah.
It's freaking me out.
You want to? just call a taxi
so we can go back to the hotel.
Let's go back to the Hotel, okay.
- We'll get the car in the morning car.
- Okay. Yeah.
I am really tired.
Listen, If you could just call a taxi service,
we're just going to go back to the hotel.
No. I don't do another phone call.
Can I call you then?
No.
- I'm tired.
- What?
I'm tired.
What's going on?
Look at me.
It's a rape drug.
What?
Rohypnol.
Oh my God! What!
It causes, droziness, dizziness,
disorientation and memory loss.
Are you kidding?!
What have you done?
Jenny!
God!
What is it?
Jenny.
Jenny.
Jenny!
Jenny!
Jenny, wake up!
Jenny!
God!
Jenny.
Lindsay!
Jenny!
What's happening?
What are you doing?
What's this?
What the fuck are you doing to us?
What are you doing?
Jenny!
Let us out!
My friend ...
You don't match.
Have to kill you.
Don't take it personally.
What 's this?
What are you doing to us?
What is this?
Stop!
Jenny!
Japanese
Please ...
It's gonig to be okay.
I'm Dr. Joseph Heiter.
Japanese
Retired but still very well known as
the leading surgeon separating siamese twins.
Japanese
Six months,
I designed a never seen operation,
not separating anymore...
but creating.
I transformed my three Rottweiler
into a beautiful three hound construction.
Good news!
Your tissues match.
So ...
I will explain this spectacular operation
once.
We start ...
with cutting the ligament patelar.
The ligaments of the knee caps.
So knee extension...
is no longer possible.
Pulling from "B" and "C"
The central incisors,
and lateral incisors and Canines.
from the upper and lower jaws...
The lips from"B" and "C"...
and the anus of "A" and "B"...
are cut circular along the boarder
between buttock and rectum.
The mucus retains so.
Two pet acellular grafts
are prepaired
and lifted from the underlining tissue.
The shape incisions.
Below the chins, of "B" to "C"
up to their cheeks.
Connecting the circular skin parts...
of anus and mouth.
From "A" to "B"
and "B" to "C".
Connecting...
the pet acellular grafts
to the chin/cheek incisions .
Creating ...
a siamese triplet...
connected
by the gastrict system.
Ingestion by "A"
past through "B"
and excretion by "C".
A human centipede.
First sequence.
Here's your breakfast.
Japanese
general anesthesia.
Lindsay!
Jenny ...
I want my mom!
German
No!
Open up!
Please!
Stop!
Why do this?
Open!
Need help!
You're a sick man!
I am a sick man.
HAHAHAHAHA!
If you do not open immediately I will....
cut your knees
and pull your teeth out
one by one!
without anesthesia.
It's your choice!
Open the door!
Open the door!
Stop!
No!
Please!
Please!
Why do this?
Let me and Jenny go.
Please.
We'll give you anything.
Anything you want,
just let us go.
Don't worry ...
it's only a tranquilizer
Keep your head very still.
I don't want to loose one of yout precious eyes.
Just kill me!
Ahhhh.
One of my Rottweilers
tried to flee
just before the operation.
After I caught the dog....
He had to take the middle postion.
in this postion...
the healing pains...
are twice as intense.
Do you already regret your little escape.
In fact I'm thankful for it.
Because now I know definitely,
you are...
the middle piece!
Just kill me now.
I'd rather be dead.
Game Over.
Damn.
power is cut of again..
Sorry!
Damn!
I'm so sorry.
Help!
my sweet centipede ...
Looks good.
Heal well.
Suffering will be over soon.
Your in alot of pain, I know.
Nice.
Okay.
better and better.
My Lead ...
My Lead.
Hey, man.
Hey, man.
German
Up
Come up!
Up Up Up
Yes, come up!
He and the, lift your.
Up
Yeah, like that!
Very good!
Yeah!
I DID IT!!
Japanese
Japanese
Take the newspaper and bring it to me.
Yeah, good boy.
Come.
Come!
Bring me the newspaper.
Good boy.
Come!
Come!
Then let's walk a little.
Japanese
Atention!
German
German
You do this once more I graruntee...
I'll pull your teeth out
one by one...
you kamikaze shit hole.
You want me to bite?
Now you can bite me.
Bite my boot.
Bite my boot!
Bite my boots!
Mr. kamikaze is a chicken today.
Japanese
How dare you!
Turn your back on me?
AHAHAHAHAHAH!
Feed her!
FEED HER!
Swallow it bitch!
Swallow!
Feed her!
FEED HER!
I want to sleep.
Have to sleep.
Why didn't I dut your vocal chords?
If you don't shut up...
We will do a follow-up operation.
Finally! You want to move your ass.
That's fine with me.
Maybe you even can escape.
Come!
Come!
After you, Please.
AAAAAAAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!
Teach you to mind me!
Strong.
Good.
Constipated.
Laxatives.
Instant kind,
good stuff.
End section, you are very sick.
I think you're dying.
I will have to replace you.
Japanese
Shut Up!
German
Japanese
German
Japanese
German
I've got two strong and healthy replacements.
So enjoy...
your last moments with the Jen tail...
Because when I'm back,
I'm mercy killing it.
Preparing for a new operation...
A quadruplet.
See you.
German
Japanese
Eye for an eye...
tooth for a tooth.
Japanese
German
(distant weeping)
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)