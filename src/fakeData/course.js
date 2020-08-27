var course = [
	{
		title: "Programming for Everybody (Getting Started with Python)",
		trainer: "Charles Russell Severance",
		price: 130,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/edf8690432469fb182e4313a3ee7ef/Charles-Severance.jpeg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Machine Learning",
		trainer: "Andrew Ng",
		price: 119.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/2a/6192a04f1311e7ba12057425631cbc/AndrewNg-Headshot.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Introduction to Research for Essay Writing",
		trainer: "Helen Nam",
		
		price: 49.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/15/d5bd904ec211e6aefaf5c1cc7db0fd/helen.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Introduction to Programming with MATLAB by Vanderbilt University",
		trainer: "Mike Fitzpatrick",
		price: 149.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/20/5428a0c2ab11e4aea44da914099906/LedecziAkos.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Data Science Math Skills",
		trainer: "Paul Bendich",
		price: 199.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/3a/75fb50c7fe11e6b9d337f014bdec7e/Paulpic.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Getting Started with AWS Machine Learning",
		trainer: "Blaine Sundrod",
		price: 199.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/58/b6b120e20211e89841833178927cb6/BlaineMugContrast.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Hadoop Platform and Application Framework",
		trainer: "Natasha Balac",
		price: 129.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/11/f4dc504dd911e58ddc8ff4d6e0523a/balac.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "End-to-End Machine Learning with TensorFlow on GCP",
		trainer: "Google Cloud Training",
		price: 139.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/c9/b2a070c36c11e68cc141fab179b5aa/Google-Cloud-logo-color-850.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "How Google does Machine Learning",
		trainer: "Google Cloud Training",
		price: 149.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/c9/b2a070c36c11e68cc141fab179b5aa/Google-Cloud-logo-color-850.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Introduction to Virtual Reality",
		trainer: "Marco Gillus",
		price: 199.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/85/3cd1cc68d63e8624f1f5de9f79395c/MarcoGillies-241x300.jpeg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Mathematical Thinking in Computer Science",
		trainer: "Michael Levin",
		price: 90,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/b1/c07b809da311e58313a37513c55370/mlevin-prague.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Algorithmic Toolbox",
		trainer: "Michael Levin",
		price: 69.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/b1/c07b809da311e58313a37513c55370/mlevin-prague.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Machine Learning Foundations: A Case Study Approach",
		trainer: "Emily Fox",
		price: 119,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/60/fb69a04d0611e5ad1d830708963890/EmilyFox.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Introduction to Deep Learning",
		trainer: "Nikita Kazev",
		price: 179.99,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/b2/3fa4409a3c11e7a507effd5797fdb8/me.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
	{
		title: "Mathematics for Machine Learning: Linear Algebra",
		trainer: "David Dye",
		price: 120,
		thumb: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/34/00db30ecd511e7b38865847815caeb/ICL-Materials-8_13-314-web.jpg?auto=fit&dpr=1&w=40&h=40&fit=crop",
	},
];

export default course;
