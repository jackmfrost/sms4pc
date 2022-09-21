import React, {useState} from 'react';
import './Stylesheets/contact.css'
import '../index.css'

export function AddContact() {

    function validityCheck(name, number) {        
    //List of area codes that result in a number being valid
    const validAreaCodes = [205, 251, 256, 334, 938, 907, 480, 520, 602, 623, 928, 480, 520, 602, 623, 928, 479, 501, 870, 209, 213, 279, 310, 323, 408, 415, 424, 442, 510, 530, 559, 562, 619, 626, 628, 650, 657, 661, 669, 707, 714, 747, 760, 805, 818, 820, 831, 858, 909, 916, 925, 949, 951, 303, 719, 720, 970,203, 475, 860, 959, 302, 239, 305, 321, 352, 386, 407, 561, 727, 754, 772, 786, 813, 850, 863, 904, 941, 954, 	229, 404, 470, 478, 678, 706, 762, 770, 912, 808, 208, 986, 	217, 224, 309, 312, 331, 618, 630, 708, 773, 779, 815, 847, 872, 219, 260, 317, 463, 574, 765, 812, 930, 319, 515, 563, 641, 712, 316, 620, 785, 913, 270, 364, 502, 606, 859, 225, 318, 337, 504, 985, 207, 240, 301, 410, 443, 667, 339, 351, 413, 508, 617, 774, 781, 857, 978, 231, 248, 269, 313, 517, 586, 616, 734, 810, 906, 947, 989, 218, 320, 507, 612, 651, 763, 952, 228, 601, 662, 769, 314, 417, 573, 636, 660, 816, 406, 308, 402, 531, 702, 725, 775, 603, 201, 551, 609, 640, 732, 848, 856, 862, 908, 973, 505, 575, 212, 315, 332, 347, 516, 518, 585, 607, 631, 646, 680, 716, 718, 838, 845, 914, 917, 929, 934, 	252, 336, 704, 743, 828, 910, 919, 980, 984, 701, 	216, 220, 234, 330, 380, 419, 440, 513, 567, 614, 740, 937, 405, 539, 580, 918, 458, 503, 541, 971, 	215, 223, 267, 272, 412, 445, 484, 570, 610, 717, 724, 814, 878, 401, 803, 843, 854, 864, 605, 423, 615, 629, 731, 865, 901, 931, 	210, 214, 254, 281, 325, 346, 361, 409, 430, 432, 469, 512, 682, 713, 726, 737, 806, 817, 830, 832, 903, 915, 936, 940, 956, 972, 979, 385, 435, 801, 802, 276, 434, 540, 571, 703, 757, 804, 206, 253, 360, 425, 509, 564, 202, 304, 681, 262, 414, 534, 608, 715, 920, 307];
        //First 3 characters in number input will equate to the area code
        let areaCode = parseInt(`${number[0]}${number[1]}${number[2]}`);

        //If name and number exist, continue
        if (name && number) {
            //If number is actually a number, continue
            if (!isNaN(number)) {            
                //If number is the correct length for a phone number, continue
                if (number.length == 10) {
                    //If areaCode exists in list of valid area codes, number is valid
                    if (validAreaCodes.indexOf(areaCode) != -1) {
                        return(true);
                    }
                    else {
                        console.log("Number invalid");
                    }
                }
                else {
                    console.log("Number is incorrect length");
                }
            }
            else {
                console.log("Invalid input");
            }
        }
        else {
            console.log("Either name or number is don't exist");
        }
        return (false);
    }

    function handleClick() {
        let val = {
            [name]: {
                number: number,
                lastMessageSent: null
            }
        }

        //If validityCheck returns true, continue; if not, exit function
        if (validityCheck(name, number)) {                    

            //Copies the current contact list to a var
            let contacts = localStorage.getItem('contacts');

            //If contact list already has contacts, continue; if not, create contact list with val being the value
            if (contacts) {
                console.log("Existing contacts");

                //Copies current contacts and turns it into an object
                let tacts = JSON.parse(contacts);

                //Creates new JSON element in contacts; key=name, val=number
                tacts[name] = {
                    number: number,
                    lastMessageSent: null
                };
                
                //Replaces the current contact item with tacts
                localStorage.setItem("contacts", JSON.stringify(tacts));
            }
            else {
                console.log("No existing contacts");
                localStorage.setItem("contacts", JSON.stringify(val));
            } 
        }
        else {
            console.log("Validity check failed");
        }
    }

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const nameChange = event => {
        setName(event.target.value);
    };

    const numChange = event => {
        setNumber(event.target.value);
    };

    return(
        <div className="addcontact">
            <input type="text" placeholder="Name" value={name} onChange={nameChange}></input>
            <input type="text" placeholder="Number" value={number} onChange={numChange}></input>
            <button type="button" name="Button" onClick={handleClick}>Add Contact</button>
        </div>
    );
}