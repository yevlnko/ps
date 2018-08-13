import { postsActions } from "../actions";

// GLOBAL VARIABLE
// __.credentials  from setup JEST FILE
// __.error from setup JEST FILE

const posts =  [
    {
        id:      '5b163e507e057d6e2cecf203',
        comment: 'Nothing',
        likes:   [
            {
                id:        '5b140df97e057d69eaecf021',
                firstName: 'Александр',
                lastName:  'Коник',
            }
        ],
        created: 1528184400,
        author:  {
            id:        '5b16369b7e057d0d90ecf1fe',
            firstName: 'Jubei',
            lastName:  'Kibagami',
            avatar:    'https://lab.lectrum.io/redux/api/image/zgthxt3betpy/LX9h3dCJ7W.jpg',
        },
    }];


describe('Posts actions:', () => {

    test('FETCH_POSTS', () => {
        expect(postsActions.fetchPosts()).toMatchSnapshot();
    });
    test('FETCH_POSTS_FAIL', () => {
        expect(postsActions.fetchPostsFail()).toMatchSnapshot();
    });
    test('FETCH_POSTS_SUCCESS', () => {
        expect(postsActions.fetchPostsSuccess(posts)).toMatchSnapshot();
    });
    test('CREATE_POSTS', () => {
        expect(postsActions.createPost()).toMatchSnapshot();
    });
    test('REMOVE_POSTS', () => {
        expect(postsActions.removePost()).toMatchSnapshot();
    });
    test('LIKE_POST', () => {
        expect(postsActions.likePost()).toMatchSnapshot();
    });
    test('UNLIKE_POST', () => {
        expect(postsActions.unlikePost()).toMatchSnapshot();
    });

});
