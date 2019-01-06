import React, { Component } from 'react';

class DrumPads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bank1: [
                {
                pad: "Q",
                id: "808",
                audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20audi%20808%20(1).wav?1545136554230"
                },
                {
                    pad: "W",
                    id: "Hihat",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20star%20hh.wav?1545136689905"
                },
                {
                    pad: "E",
                    id: "Open Hat",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20shortstop%20oh.wav?1545136744883"
                },
                {
                    pad: "A",
                    id: "Dead FX",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20dead%20fx.wav?1545136788245",
                },
                {
                    pad: "S",
                    id: "Rainshake",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20rainshake%20perc.wav?1545136884839"
                },
                {
                    pad: "D",
                    id: "Kick",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20deadline%20kick.wav?1545136930394"
                },
                {
                    pad: "Z",
                    id: "Snare",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20rashad%20snare(1).wav?1545219818698"
                },
                {
                    pad: "X",
                    id: "Perc",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20feenin%20vox.wav?1545137064819"
            
                },
                {
                    pad: "C",
                    id: "Visine",
                    audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2Fnm%20-%20visine%20perc%20(1).wav?1545137181630"
                }
                ],
            bank2: [
                    {
                      pad: "Q",
                      id: "Grunt",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FGRUNT_PAIN.wav?1545184632543"
                  },
                  {
                      pad: "W",
                      id: "Hihat",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FHIHAT_CASUALCAN.wav?1545184671732"
                  },
                  {
                      pad: "E",
                      id: "Kalimba",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FKALIMBA_6.wav?1545184698685"
                  },
                  {
                      pad: "A",
                      id: "Kick",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FKICK_KRAYON.wav?1545184733910"
                  },
                  {
                      pad: "S",
                      id: "Shaker",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FSHAKER_BEN.wav?1545184778118"
                  },
                  {
                      pad: "D",
                      id: "Snare",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FSNARE_JANNYJAN_2.wav?1545184839950"
                  },
                  {
                      pad: "Z",
                      id: "Tambo",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FTAMBO_BESTONE.wav?1545184872364"
                  },
                  {
                      pad: "X",
                      id: "Tom",
                      audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FTOM_HEM.wav?1545184893845"
                  },
                  {
                  pad: "C",
                  id: "Clap",
                  audio: "https://cdn.glitch.com/fdd8d0d1-b784-46c4-b831-40e88c6e870d%2FCLAP_EVENHEDID.wav?1545184976292"
                  }
                  ],
            currentAudio: "",
        }
    }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

    render() {
   
        let pads = this.props.pads.map((e, i) => {
            return (
                <div 
                className="drum-pad pads"
                onClick={this.props.click}
                id={this.state[this.props.bank][i].id}>
                <audio className="clip" src={this.state[this.props.bank][i].audio}
                id={e}/>
                {e}
                </div>
            )
        })
        return (
            <div className="innerColumns innerColumn-1">{pads}</div>
        )
    }
}

export default DrumPads;