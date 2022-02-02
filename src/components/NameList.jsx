import { List, ListItem, IconButton, ListItemText } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function NameList({ names, onItemDelete }) {
	const handleDelete = index => {
		onItemDelete(index);
	};
	return (
		<List className="name-list">
			{names.map((name, i) => {
				return (
					<ListItem
						key={i}
						secondaryAction={
							<IconButton
								edge="end"
								aria-label="delete"
								onClick={() => handleDelete(i)}
							>
								<HighlightOffIcon />
							</IconButton>
						}
					>
						<ListItemText primary={name} />
					</ListItem>
				);
			})}
		</List>
	);
}

export default NameList;
