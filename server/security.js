// Clients may insert posts only if a user is logged in
Posts.permit('update').ifLoggedIn().apply();