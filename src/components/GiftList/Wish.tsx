import { Typography, Card, Grid, CardContent, Link } from "@mui/material";
import { default as WishType } from "src/types/wish";

interface WishProps {
  wish: WishType;
  onClick: (id: string) => void;
}

const sharedStyle = {
  textAlign: "start",
};

function Wish(props: WishProps) {
  const { wish, onClick } = props;
  const { title, description, url, _id } = wish;

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };
  return (
    <Card
      onClick={() => onClick(_id)}
      sx={{
        width: "100%",
        backgroundColor: ({ palette }) => palette.background.default,
        border: ({ palette }) => `1px solid ${palette.divider}`,
        borderRadius: 3,
        cursor: "pointer",
      }}
    >
      <CardContent>
        <Grid container gap={5}>
          <Grid item xs={3} sx={sharedStyle}>
            <Typography variant="body1">Name</Typography>
            <Typography variant="body2">{title}</Typography>
          </Grid>
          <Grid item xs={3} sx={sharedStyle}>
            <Typography variant="body1">Description</Typography>
            <Typography variant="body2">{description}</Typography>
          </Grid>
          <Grid item xs={3} sx={sharedStyle}>
            <Typography variant="body1">Url</Typography>
            <Link
              target="_blank"
              variant="body2"
              href={url}
              onClick={handleLinkClick}
            >
              Link to gift
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Wish;
