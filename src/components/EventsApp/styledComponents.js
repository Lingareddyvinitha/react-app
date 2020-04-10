import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const Event = styled.div `${tw `flex flex-col justify-start items-center`}`

const Name = styled.input `${tw `border-black border-solid  border-2`}`

const Location = Name.withComponent("input")

const ShowEvents = styled.div `${tw `flex justify-center items-center`}`

const EventName = Name.withComponent("input")

const EventLocation = Name.withComponent("input")
export {
    Event,
    Name,
    Location,
    ShowEvents,
    EventName,
    EventLocation
};
