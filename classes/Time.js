class Time {
    constructor() {
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.stopTime = true;
        this.timer = "0:0:0"
    }

    timerCycle() {
        if(this.stopTime == false) {
            this.sec = parseInt(this.sec);
            this.min = parseInt(this.min);
            this.hr = parseInt(this.hr);

            this.sec = this.sec+1;

            if(this.sec == 60){
                this.min = this.min+1;
                this.sec = 0;
            }
            if(this.min == 60){
                this.hr = this.hr+1;
                this.min = 0;
                this.sec = 0;
            }
            if (this.sec < 10 || this.sec == 0) {
                this.sec = "0" + this.sec;
            }
            if (this.min < 10 || this.min == 0) {
                this.min = "0" + this.min;
            }
            if (this.hr < 10 || this.hr == 0) {
                this.hr = "0" + this.hr;
            }

            this.timer = this.hr + ":" + this.min + ":" + this.sec;

            //setTimeout("timerCycle()", 1000);
        }
    }

    startTimer() {
        if(this.stopTime == true){
            this.stopTime = false;
            this.timerCycle();
        }
    }

    stopTimer() {
        if (this.stopTime == false){
            this.stopTime = true;
        }
    }

    resetTimer() {
        this.timer = "0:0:0";
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
    }
}

export default Time;