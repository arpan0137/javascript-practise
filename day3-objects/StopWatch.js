function StopWatch (){
    let startTime, endTime, duration = 0;
    let running = false

    this.start = function(){
        if(running)
            throw new Error("StopWatch already running!!")

        running = true
        startTime = new Date()
    }
    this.stop = function(){
        if(!running)
            throw new Error("StopWatch is not running!!")

        running = false
        endTime = new Date()
        const seconds = Math.round( (endTime.getTime() - startTime.getTime()) / 1000 )
        duration += seconds
    }
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function() { return duration } // getter
    })
}

const sw = new StopWatch()
sw.start()
setTimeout(() => {
    sw.stop()
    console.log(sw.duration)
}, 5000)

