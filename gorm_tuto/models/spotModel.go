package Models

type Spot struct {
 Id      		uint   	`json:"id"`
 Destination 	string 	`json:"destination"`
 Address 		string 	`json:"address"`
 Photo 			string 	`json:"photo"`
 Season 		string 	`json:"season"`
 Beachstyle 	string 	`json:"beachstyle"`
 Difficulty 	string 	`json:"difficulty"`
 Description 	string 	`json:"description"`
}

func (b *Spot) TableName() string {
 return "spot"
}
