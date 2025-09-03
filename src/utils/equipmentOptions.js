import sprite from "../../assets/icons/sprite.svg";

export const equipmentOptions = [
  {
    key: "transmission",
    label: "Transmission",
    type: "string",
    values: ["manual", "automatic"],
    iconUrl: `${sprite}#icon-automatic`,
  },
  {
    key: "engine",
    label: "Engine",
    type: "string",
    values: ["diesel", "petrol"],
    iconUrl: `${sprite}#icon-petrol`,
  },
  { key: "AC", label: "AC", iconUrl: `${sprite}#icon-ac`, type: "boolean" },
  {
    key: "bathroom",
    label: "Bathroom",
    iconUrl: `${sprite}#icon-bathroom`,
    type: "boolean",
  },
  {
    key: "kitchen",
    label: "Kitchen",
    iconUrl: `${sprite}#icon-kitchen`,
    type: "boolean",
  },
  { key: "TV", label: "TV", iconUrl: `${sprite}#icon-tv`, type: "boolean" },
  {
    key: "radio",
    label: "Radio",
    iconUrl: `${sprite}#icon-radio`,
    type: "boolean",
  },
  {
    key: "refrigerator",
    label: "refrigerator",
    iconUrl: `${sprite}#icon-refrigerator`,
    type: "boolean",
  },
  {
    key: "microwave",
    label: "Microwave",
    iconUrl: `${sprite}#icon-microwave`,
    type: "boolean",
  },
  { key: "gas", label: "Gas", iconUrl: `${sprite}#icon-gas`, type: "boolean" },
  {
    key: "water",
    label: "Water",
    iconUrl: `${sprite}#icon-water`,
    type: "boolean",
  },
];
