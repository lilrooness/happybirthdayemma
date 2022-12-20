var storyContent = ﻿{"inkVersion":20,"root":[[{"->":"choose_house"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"choose_house":[["^Choose your house","\n","ev","str","^Griffindor","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Hufflepuff","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Ravenclaw","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Slytherin","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["\n","ev","str","^Griffindor","/str","/ev",{"VAR=":"HOUSE","re":true},{"->":"start"},{"#f":5}],"c-1":["\n","ev","str","^Hufflepuff","/str","/ev",{"VAR=":"HOUSE","re":true},{"->":"start"},{"#f":5}],"c-2":["\n","ev","str","^Ravenclaw","/str","/ev",{"VAR=":"HOUSE","re":true},{"->":"start"},{"#f":5}],"c-3":["^  ","\n","ev","str","^Slytherin","/str","/ev",{"VAR=":"HOUSE","re":true},{"->":"start"},{"->":"start"},{"#f":5}]}],{"#f":1}],"start":[["^You're sitting in Professor Slughorn's Potions class, it's winter and the dungeons are especially cold this time of year.","\n","ev","str","^put on your scalf","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"putonscalf"},"\n",{"#f":5}]}],{"#f":1}],"putonscalf":[["^You wrap your scalf around your neck and chin (which has become quite numb) being carefull that the ","ev",{"VAR?":"HOUSE"},"out","/ev","^ crest is","\n","^showing at the front.","\n","^The room is lively, and your classmates are chattering amongst themselves.","\n","^Professor Slughorn cheerfully waddles in through the door at the back of the classroom and the converstaion turns to a low mutter.","\n","ev","str","^turn to the front of the class","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"first_question"},"\n",{"#f":5}]}],{"#f":1}],"first_question":[["^\"Right!\" Slughorn bellows in commanding but happy voice \"Today, we will be making Birthday Cake!","\n","^Now just in case this goes horribly wrong, which one of you can tell me what you would use to cure someone if they had been poisoned by some poorly made cake?\"","\n","^. . . You know this one! But which is it?","\n","ev","str","^A Blowflie","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^African Sea Salt","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Bezoar","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^\"A blowflie sir?\"","\n",{"->":".^.^.^.blowflie"},{"#f":5}],"c-1":["\n","^\"African Sea Salt sir?\"","\n",{"->":".^.^.^.african_seasalt"},{"#f":5}],"c-2":["\n","^\"Sir, a Bezoar?\"","\n",{"->":".^.^.^.bezoar"},{"#f":5}]}],{"blowflie":["^\"Incorrect!, No matter though\"","\n","^Damn! Better luck next time I guess ",{"->":"begin_making_potion"},"\n",{"#f":1}],"african_seasalt":["^\"Salt is not useful in this instance\"","\n","^Gah! oh well ",{"->":"begin_making_potion"},"\n",{"#f":1}],"bezoar":["^\"That's correct Hildesley! Ten points to ","ev",{"VAR?":"HOUSE"},"out","/ev","^!\"","\n","ev",{"VAR?":"POINTS"},10,"+","/ev",{"VAR=":"POINTS","re":true},{"->":"begin_making_potion"},{"#f":1}],"#f":1}],"begin_making_potion":[["^\"Now! It's time for us to start so please everyone at your stations! each one of you will find a large box.","\n","^In there are your ingredients, some of which are helpful and some of which are not. It is your job to follow the instructions, choosing the correct ingredients each step of the way!\"","\n","ev","str","^Open your book","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":".^.^.^.open_book"},"\n",{"#f":5}]}],{"open_book":[["^Chapter 21 - Birthday Cake","\n","^Birthday Cake is a tricky concoction first developed by Fumple Beezlethorp in the year 1292.","\n","^ingredients:","\n","^(the ingredients have been inked over for the sake of the lesson)","\n","^Step 1: Take your (blank) and and mix  together with sugar in a bowl","\n","^\"Deffinitely a dry ingredient\", you look inside your box ...","\n",["ev",{"^->":"begin_making_potion.open_book.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Root of Asphodel",{"->":"$r","var":true},null]}],["ev",{"^->":"begin_making_potion.open_book.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Dried Banana pieces",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"begin_making_potion.open_book.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n","^Hmmmm, it's a bit dark for Birthday cake, but I guess this will do","\n","ev",true,"/ev",{"VAR=":"rootofasphodel","re":true},{"->":".^.^.^.^.step_2"},{"#f":5}],"c-1":["ev",{"^->":"begin_making_potion.open_book.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],"\n","^Well this deffinitely isn't going to poison anyone.","\n","ev",true,"/ev",{"VAR=":"banana","re":true},{"->":".^.^.^.^.step_2"},{"#f":5}]}],{"#f":1}],"step_2":[["^Step 2: Create an infusion of (blank) by adding water to (blank), then pour into your dry mixture.","\n",["ev",{"^->":"begin_making_potion.step_2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Wormwood ",{"->":"$r","var":true},null]}],["ev",{"^->":"begin_making_potion.step_2.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Powdered gravity resistantant Egg Shell",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"begin_making_potion.step_2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^mmm what a strong woody smell!","\n","ev",true,"/ev",{"VAR=":"wormwood","re":true},{"->":".^.^.^.^.step_3"},{"#f":5}],"c-1":["ev",{"^->":"begin_making_potion.step_2.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^The bag is weighed down with a rock at the bottom of the box.","\n","ev",true,"/ev",{"VAR=":"eggshell","re":true},{"->":".^.^.^.^.step_3"},{"#f":5}]}],{"#f":1}],"step_3":[["^Step 3: For the topping, squeeze the juice of 4 (blank) in a circular pattern over the top of the mixter before heating to one ninth of dragon-egg for ten minutes","\n",["ev",{"^->":"begin_making_potion.step_3.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Soposphorus Beans",{"->":"$r","var":true},null]}],["ev",{"^->":"begin_making_potion.step_3.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Black Cat Berries",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"begin_making_potion.step_3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^These are devilishly difficult to cut! Better crush them instead","\n","ev",true,"/ev",{"VAR=":"sopophorusbeans","re":true},{"->":"finish"},{"#f":5}],"c-1":["ev",{"^->":"begin_making_potion.step_3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","ev",true,"/ev",{"VAR=":"raisins","re":true},"^Looks a little suspisios, but they smell like marmitey caremel!","\n",{"->":"finish"},{"#f":5}]}],{"#f":1}],"#f":1}],"finish":[["^You place the mixture carefully over a cauldron burner, and wait...","\n","ev","str","^wait","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"final"},"\n",{"#f":5}]}],{"#f":1}],"final":[["^\"Everybody lower their utensils! By now your cakes should be done cooking and it's time for inspection!\"","\n","^Professor Slughorn wades through rows of desks. Passing some of your classmates' less than enticing creations and prodding them nervously with his wand, if he finds one he's more confident about he cautiously tries a few crumbs.","\n","^He comes up to your desk","\n","ev","str","^present your cake","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"final.present_cake"},"\n",{"#f":5}]}],{"present_cake":[["^\"Now then Hildesley, let's see how you've done ...","\n","ev",{"VAR?":"banana"},"/ev",[{"->":".^.b","c":true},{"b":["^ Nice and yellowy in colour ...",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"VAR?":"rootofasphodel"},"/ev",[{"->":".^.b","c":true},{"b":["^ curiously dark for a cake...",{"->":".^.^.^.12"},null]}],"nop","\n","ev",{"VAR?":"wormwood"},"/ev",[{"->":".^.b","c":true},{"b":["^ smells rather bitter, something's overpowering the sugar...",{"->":".^.^.^.18"},null]}],"nop","\n","ev",{"VAR?":"eggshell"},"/ev",[{"->":".^.b","c":true},{"b":["^ Very good texture, Look everyone! How nice fluffy Emma's cake is!",{"->":".^.^.^.24"},null]}],"nop","\n","ev",{"VAR?":"sopophorusbeans"},"/ev",[{"->":".^.b","c":true},{"b":["^ Why is your cake topping moving?",{"->":".^.^.^.30"},null]}],"nop","\n","ev",{"VAR?":"raisins"},"/ev",[{"->":".^.b","c":true},{"b":["^ A very nice dark verry topping. Well done!",{"->":".^.^.^.36"},null]}],"nop","\n",["ev",{"VAR?":"banana"},{"VAR?":"eggshell"},"&&",{"VAR?":"raisins"},"&&","/ev",{"->":".^.b","c":true},{"b":["\n","^A perfect cake! I'd like to order one for myself on my Birthday! Keep this up and you'll make the shelf! Ten Points to ","ev",{"VAR?":"HOUSE"},"out","/ev","^!","\n","ev",{"VAR?":"POINTS"},10,"+","/ev",{"VAR=":"POINTS","re":true},{"->":".^.^.^.41"},null]}],["ev",{"VAR?":"rootofasphodel"},{"VAR?":"wormwood"},"&&",{"VAR?":"sopophorusbeans"},"&&","/ev",{"->":".^.b","c":true},{"b":["\n","^I simply can't explain it, but instead of a cake, you've managed to produce a near perfect draft of Living Death! So perfect I dare say one drop might kill us all! This is very out of the ordinary, but I feel I must reward you somehow. . . fifteen points to ","ev",{"VAR?":"HOUSE"},"out","/ev","^!","\n","ev",{"VAR?":"POINTS"},15,"+","/ev",{"VAR=":"POINTS","re":true},{"->":".^.^.^.41"},null]}],[{"->":".^.b"},{"b":["\n","^Hmm well yes urm. well uuh, Good job. Urrm, five points to urm ","ev",{"VAR?":"HOUSE"},"out","/ev","^.","\n","ev",{"VAR?":"POINTS"},5,"+","/ev",{"VAR=":"POINTS","re":true},{"->":".^.^.^.41"},null]}],"nop","\n","ev","str","^see your score","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"score"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"score":["^You Have made your cake and scored ","ev",{"VAR?":"POINTS"},"out","/ev","^ points for ","ev",{"VAR?":"HOUSE"},"out","/ev","^!","\n",["ev",{"VAR?":"POINTS"},24,">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ This is the maximum number of points! well done!","\n",{"->":"score.13"},null]}],"nop","\n","^There are three endings to this story, if you'd like to play again, simply refresh the page","\n","^Miss you loads and cant wait to see you in February!","\n","^Happy Birthday Em x","\n","end",{"#f":1}],"global decl":["ev","str","^","/str",{"VAR=":"HOUSE"},0,{"VAR=":"POINTS"},false,{"VAR=":"rootofasphodel"},false,{"VAR=":"sopophorusbeans"},false,{"VAR=":"wormwood"},false,{"VAR=":"banana"},false,{"VAR=":"eggshell"},false,{"VAR=":"raisins"},"/ev","end",null],"#f":1}],"listDefs":{}};