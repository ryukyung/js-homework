class AudioPlayer {
  #audio = null;

  constructor(source) {
    this.#audio = document.createElement('audio');
    this.#audio.src = source;
  }

  play() {
    this.#audio.play();
  }

  loopPlay() {
    this.play();
    on(this.#audio, 'ended', this.play.bind(this));
  }

  pause() {
    this.#audio.pause();
  }

  stop() {
    this.pause();
    this.#audio.currentTime = 0;
  }

  isPlaying() {
    return !this.#audio.paused;
  }

  get time() {
    return this.#audio.currentTime;
  }
}

export default AudioPlayer;
