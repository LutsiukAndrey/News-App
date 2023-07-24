import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Filter = () => {
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};

export default Filter;
