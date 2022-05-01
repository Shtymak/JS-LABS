let room = {
    number: 23,
};
let meetup = {
    title: 'Засідання',
    occupiedBy: [{ name: 'Іванов' }, { name: 'Петров' }],
    place: room,
};
// циклічні посилання
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
    JSON.stringify(meetup, (key, value) =>
        key && value === meetup ? undefined : value
    )
);
