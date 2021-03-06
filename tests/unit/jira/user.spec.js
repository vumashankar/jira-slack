describe('JIRA user parser', function () {
    'use strict';

    it('should be able to parse a JIRA user', function () {
        let response = require('../../responses/jira/event').user,
            user = require('../../../src/jira/user')(response);

        expect(user.getName()).toBe('John Doe');
        expect(user.getUsername()).toBe('john.doe');
        expect(user.getEmail()).toBe('john.doe@example.com');
    });

    it('should return false when no user response is given', function () {
        let user = require('../../../src/jira/user')();
        expect(user).toBe(false);
    });

});