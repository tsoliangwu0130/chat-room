/* eslint-env mocha */

const expect = require('expect');

var { Users } = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Room 1'
        }, {
            id: '2',
            name: 'Leon',
            room: 'Room 2'
        }, {
            id: '3',
            name: 'Mellie',
            room: 'Room 1'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Leon',
            room: 'The Office Fans'
        };

        users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should return names for Room 1', () => {
        var userList = users.getUserList('Room 1');
        expect(userList).toEqual(['Mike', 'Mellie']);
    });
});
