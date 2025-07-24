import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

function MUICard() {
	return (
		<Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
			<CardMedia
				component="img"
				height="194"
				image="https://images.unsplash.com/photo-1673663096500-a0ec4a43929b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Modern running shoe"
				className="object-cover aspect-3/2"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					AeroStride Pro
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Experience unparalleled comfort and performance. Perfect for both road and trail.
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: 2 }}>
				<Button variant="contained" size="small">
					Add to Cart
				</Button>
			</CardActions>
		</Card>
	);
}

export default MUICard;
