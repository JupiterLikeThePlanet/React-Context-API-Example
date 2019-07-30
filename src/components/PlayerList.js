import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import {Consumer} from "./Context"

const PlayerList = () => {
  return (
    <Consumer>
      {context =>{

        return(

          <React.Fragment>
            {context.players.map( (player, index) =>
              <Player 
                {...player}
                key={player.id.toString()} 
                index={index}
                changeScore={context.actions.handleScoreChange}
                removePlayer={context.handleRemovePlayer}           
              />
            )}
        </React.Fragment>

        )

      }}
    </Consumer>

  );
}



export default PlayerList;