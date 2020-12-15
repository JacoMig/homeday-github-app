import {getTopStarsRepos} from './index';

const reposList = [{stargazers_count: 2}, {stargazers_count: 5}, {stargazers_count: 3}, {stargazers_count: 1}, {stargazers_count: 8}]

test("If the sort and splice function work correctly", () => {
    expect(getTopStarsRepos(reposList)).toEqual([{stargazers_count: 8},{stargazers_count: 5}, {stargazers_count: 3}]);
});
