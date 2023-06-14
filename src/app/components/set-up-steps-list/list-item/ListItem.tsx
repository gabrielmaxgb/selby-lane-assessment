import { Chip, Typography, useTheme } from "@mui/material";
import { ListItemContainer } from "./ListItemStyled";
import { IListItemProps } from "./types";

const ListItem = ({ itemData }: IListItemProps) => {
  const theme = useTheme();

  return (
    <ListItemContainer item={itemData.item}>
      <Chip
        color={itemData.item === 1 ? "primary" : "secondary"}
        className="chip-order"
        size="small"
        label={<span className="chip-label">{itemData.item}</span>}
      />
      <div className="body">
        <Typography color={theme.customThemeColors.lightBlue}>
          {itemData.topic}
        </Typography>
        <Typography variant="caption" color={theme.customThemeColors.lighGray}>
          {itemData.content}
        </Typography>
      </div>
    </ListItemContainer>
  );
};

export default ListItem;
