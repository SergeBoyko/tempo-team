Hi,
I’m tried my best by using your conditions for this task.

See on line:

https://tempo-team-demo.herokuapp.com/team



Technologies are used:
1)	Bootstrap (for minimum responisve design)
2)	PropTypes
3)	Check-prop-types ( allows used PropTypes test with unit test together)
4)	Enzyme (unit test)
5)	Axios (http service)
6)  Tried not to forget about performance (axios call, for example)
7)	Loading Spinner for bonus (joke !  😉 )

Description:

Page by default: 
1)	‘team’, you are seeing NavBar with SearchBox for looking users by name (it is visible only for list of All Users)
2)	You are seeing left panel for chose name of team, by default is “All Teams” selected
3)	In Header text with numbers of users
4)	In List of Users you seeing serial number, Name and Username

After choosing some team by click:
1)	Header text changed with name of team and number of members.
2)	Link are changed by “team/IDofTeam”
3)	Click by “All Teams” change link to “team/0”
4)	List of members showing all members of team include new column “Role” with “Team Lead” 
5)	SearchBox are hidden

After choosing some team by click:
1)	Link are changed to “user/id”. Also you can navigate right by link by past it in browser.
2)	You are seeing full description of details of user: 
i)	Name
ii)	Username
iii)	Id
iv)	Member of team (this text changes depending of context: one member, two and more, or no member)
v)	If member is Team Lead.
vi)	There are button “List of Teams” to going to page “team”. I’m using there  props.history in click just for showing my skills with router.

Unit Test:
1)	I’ve used Enzyme for shallow test of component by passing props
2)	I’ve used Router unit test in App.test.jsx
