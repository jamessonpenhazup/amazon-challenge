jest.mock( '../pages/login/index')

import auth from '../pages/login/index'


describe('auth', () => {
    it('should  auth called', function()  {
        auth();
    expect(auth).toHaveBeenCalled();
});


});