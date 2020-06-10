import {Button, Card, Divider, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CardActions from '@material-ui/core/CardActions';
import React, {useState, useEffect, useCallback} from 'react';

import PropTypes from 'prop-types';

import {generateNumbers} from '../../utils/excercise_utils';
import {useSpeechSynthesisUtterance} from '../../hooks/speak_actions';
import ExerciseNumber from './exercise_number';
import PlayStopButton from '../buttons/play_stop_button';

const useStyles = makeStyles((theme) => ({
  numberContainer: {
    padding: theme.spacing(3),
  },
  cardActions: {
    backgroundColor: 'lightsteelblue',
  },
}));

const SummatoryExercise = ({
  numberOfDigits,
  numberOfNumbers,
}) => {
  const classes = useStyles();
  const [numbers, setNumbers] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startPlaying, setStartPlaying] = useState(false);

  const onUtteranceQueueChange = (pending) => {
    setIsPlaying(pending > 1);
  };

  const [speak, stop] = useSpeechSynthesisUtterance({
    onUtteranceQueueChange,
  });

  const play = useCallback(() => {
    numbers.forEach((number) => speak(number, false));
  }, [numbers]);

  const regenerateNumbers = useCallback(() => {
    setNumbers(
        generateNumbers(numberOfNumbers, numberOfDigits),
    );
  }, [numberOfDigits, numberOfNumbers]);

  useEffect(() => {
    regenerateNumbers();
  }, [regenerateNumbers]);

  useEffect(() => {
    if (!startPlaying) return;
    play();
    setStartPlaying(false);
  }, [startPlaying, play]);

  const handlePlayButton = () => {
    play();
  };

  const handleReload = () => {
    stop();
    regenerateNumbers();
    setStartPlaying(true);
  };

  const handleStopButton = () => {
    stop();
  };

  const getTotal = () => {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  };

  return (
    <Grid container>
      <Card>
        <Grid
          container
          direction="column"
          className={classes.numberContainer}
        >
          {numbers.map((number, i) => (
            <ExerciseNumber
              key={i}
              number={number}
            />
          ),
          )}
          <Divider />
          <ExerciseNumber number={getTotal()} />
        </Grid>
        <CardActions
          className={classes.cardActions}
        >
          <PlayStopButton
            isPlaying={isPlaying}
            play={handlePlayButton}
            stop={handleStopButton}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AutorenewIcon />}
            onClick={handleReload}
            fullWidth
            disableElevation
          >
            Reload
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

SummatoryExercise.propTypes = {
  numberOfDigits: PropTypes.number,
  numberOfNumbers: PropTypes.number,
};

export default SummatoryExercise;
