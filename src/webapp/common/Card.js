import Pfp from './Pfp.js';
import Save from "./Save.js";

export default function Card(props) {

    return (
        <div class="card" key={props.user.id}>
            <div class="cardlayout">
                <Pfp image={props.user.profilepicture} />
                <h5>{props.user.firstname} {props.user.lastname}</h5>
            </div>
            <h6>{props.user.bio}</h6>
            {/* <div class="cardlayout">
                            <div class="label">{props.label1}</div>
                            <div class="label">{props.label2}</div>
                            <div class="label">{props.label3}</div>
                        </div> */}
            <div class="cardlayout">
                <Save user={props.user} />
                {/* displays the list of mutuals (friends of the user who are also friends with the viewer)
                            <div>
                                <div class="cardlayout">
                                    {props.mutuals.map(mutual => (
                                        <Pfp image={mutual} size="small" />
                                    ))}
                                </div>
                                /* but if there's no mutual friend, display nothing
                                <h6>{props.mutuals.length === 0 ? "" : "mutual"}</h6>
                            </div> */}
            </div>
        </div>

    )
}