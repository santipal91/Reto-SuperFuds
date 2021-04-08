import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    action: {
        marginTop: "1rem",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", //16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
            >
                {accounting.formatMoney(22451)}
            </Typography>
        }
        title="Té Verde Pureza"
        subheader="Kundali"
      />
      <CardMedia
        className={classes.media}
        image="https://superfuds-file.s3.us-west-2.amazonaws.com/product/7709683463753_5e552d1f49f3a.png"
        title="te-verde-pureza"
        maxWidth="300"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Té Verde Pureza
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
            <AddShoppingCart fontSize='large' />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Superfüds</Typography>
          <Typography>
          Tés e infusiones 100% natural alineado con los chakras. Combinamos experiencia gastronómica con afinidad bioenergética resultando en la combinación perfecta de suavidad + profundidad + sabor. Desintoxicación y limpieza a través de la esencia del cuatro chakra
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}