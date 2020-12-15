import {nextRepoName} from './index';

const reposList = [{name: 'pippo'}, {name: 'franco'}, {name: 'matze'}, {name: 'james'}]

test("If the current repos has a next one and get the correct name", () => {
    expect(nextRepoName(reposList, 'franco')).toBe('matze');
    expect(nextRepoName(reposList, 'pippo')).toBe('franco');
});

test("If Current Repo has no next one", () => {
    expect(nextRepoName(reposList, 'james')).toBe(null);
});