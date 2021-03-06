describe('JIRA issue parser', function () {
    'use strict';

    let base = '../../../',
        parser = require(base + 'src/jira/issue'),
        response = require(base + 'tests/responses/jira/event');

    it('should be able to parse a JIRA issue response', function () {
        let issue = parser(response.issue);

        expect(issue.id).toBe('10002');
        expect(issue.key).toBe('EX-1');
        expect(issue.url).toBe('https://jira.com/browse/EX-1');
    });

    it('should be able to access project properties', function () {
        let issue = parser(response.issue),
            project = issue.project;

        expect(project).not.toBeUndefined();
        expect(project.id).toBe('10000');
        expect(project.key).toBe('EX');
        expect(project.url).toBe('https://jira.com/browse/EX');
    });

});