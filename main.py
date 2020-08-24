run = False

def on_button_pressed_a():
    global run
    run = True
    while run:
        if not (TobbieII.rblock(512) or TobbieII.lblock(512)):
            TobbieII.forward()
        else:
            TobbieII.stop_walk()
            if TobbieII.Read_RBlock() > TobbieII.Read_LBlock():
                while TobbieII.rblock(512):
                    TobbieII.right_ward()
            elif TobbieII.Read_RBlock() < TobbieII.Read_LBlock():
                while TobbieII.lblock(512):
                    TobbieII.left_ward()
            else:
                while TobbieII.rblock(512) or TobbieII.lblock(512):
                    TobbieII.backward()
                TobbieII.stop_walk()
                if Math.random_boolean():
                    while TobbieII.lblock(512):
                        TobbieII.left_ward()
                else:
                    while TobbieII.rblock(512):
                        TobbieII.right_ward()
            TobbieII.stop_turn()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global run
    run = False
    TobbieII.stop_walk()
    TobbieII.stop_turn()
    music.play_melody("C E G C5 G E C - ", 250)
input.on_button_pressed(Button.B, on_button_pressed_b)
