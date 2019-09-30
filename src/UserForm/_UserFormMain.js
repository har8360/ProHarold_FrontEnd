import React, {useState} from 'react';
import UserFormWrapper from "./UserFormWrapper";
import UserFormContainer from "./UserFormContainer";
import UserFormMessageDisplay from "./UserFormMessageDisplay";
import UserForm from "./UserForm";
import UserFirstNameInput from "./UserFirstNameInput";
import UserLastNameInput from "./UserLastNameInput";
import UserSubmitButton from "./UserSubmitButton";

const UserFormMain = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }
    console.log(firstName);
    console.log(lastName);

    return (
        
        <UserFormWrapper>
            <UserFormContainer>
                <UserFormMessageDisplay>Add a new user</UserFormMessageDisplay>
                <UserForm>
                    <UserFirstNameInput placeholder="First Name" type="text" onChange={onFirstNameChange}></UserFirstNameInput>
                    <UserLastNameInput placeholder="Last Name" type="text" onChange={onLastNameChange}></UserLastNameInput>
                    <UserSubmitButton>Submit</UserSubmitButton>
                </UserForm>
            </UserFormContainer>
        </UserFormWrapper>
    );
}

export default UserFormMain;