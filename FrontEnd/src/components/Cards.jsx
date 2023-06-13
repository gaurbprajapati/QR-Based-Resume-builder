import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Link,
} from "@mui/material";

export default function Cards(props) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ boxShadow: "-2px 6px 10px rgba(0, 0, 0, 0.48)" }}
    >
      {/* // <Card sx={{ maxWidth: 345 }} style={{boxShadow:"0 0 13px #cbf1ff"}} > */}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.discription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
