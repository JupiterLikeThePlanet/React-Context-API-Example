import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import {Consumer} from "./Context"

const PlayerList = () => {
  return (
    <Consumer>
      { ({players}) => {

        return(

          <React.Fragment>
            {players.map( (player, index) =>
              <Player 
                {...player}
                key={player.id.toString()} 
                index={index}
              />
            )}
        </React.Fragment>

        )

      }}
    </Consumer>

  );
}

PlayerList.propTypes ={
  removePlayer: PropTypes.func.isRequired
}

export default PlayerList;