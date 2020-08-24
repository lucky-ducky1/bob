let run = false
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    run = true
    while (run) {
        if (!(TobbieII.RBlock(512) || TobbieII.LBlock(512))) {
            TobbieII.forward()
        } else {
            TobbieII.stopWalk()
            if (TobbieII.Read_RBlock() > TobbieII.Read_LBlock()) {
                while (TobbieII.RBlock(512)) {
                    TobbieII.rightWard()
                }
            } else if (TobbieII.Read_RBlock() < TobbieII.Read_LBlock()) {
                while (TobbieII.LBlock(512)) {
                    TobbieII.leftWard()
                }
            } else {
                while (TobbieII.RBlock(512) || TobbieII.LBlock(512)) {
                    TobbieII.backward()
                }
                TobbieII.stopWalk()
                if (Math.randomBoolean()) {
                    while (TobbieII.LBlock(512)) {
                        TobbieII.leftWard()
                    }
                } else {
                    while (TobbieII.RBlock(512)) {
                        TobbieII.rightWard()
                    }
                }
                
            }
            
            TobbieII.stopTurn()
        }
        
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    run = false
    TobbieII.stopWalk()
    TobbieII.stopTurn()
    music.playMelody("C E G C5 G E C - ", 250)
})
