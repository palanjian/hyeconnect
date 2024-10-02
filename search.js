function linearsearch(keyword) {    
    if(keyword === "") return ""
    let lower = keyword.toLowerCase();
    const people = [
        {
            name: "Peter Palanjian",
            username: "@ppalanji",
            email: "ppalanji@usc.edu",
            active: true,
            role: "Software Developer",
            tags: ["USC", "Viterbi", "Java"],
            pictureURL: "https://media.licdn.com/dms/image/v2/D5603AQHjxSFXUthGUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684409529914?e=1733356800&v=beta&t=jeudCj-HOdhzfisnwEUKaOu-F_9tjoL_k1bygz_gMo8"
        }
    ];

    let results = people.filter(person => {
        return person.name.toLowerCase().indexOf(lower) === 0 || person.tags.some(tag => tag.toLowerCase() === lower);
    });

    return results.map(result => {
        return `
            <tr>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div class="inline-flex items-center gap-x-3">
                        <div class="flex items-center gap-x-2">
                            <img class="object-cover w-10 h-10 rounded-full" src="${result.pictureURL}" alt="">
                            <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">${result.name}</h2>
                                <p class="text-sm font-normal text-gray-600 dark:text-gray-400">${result.username}</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${result.active ? "bg-emerald-100/60" : "bg-red-100/60"} dark:bg-gray-800">
                        <span class="h-1.5 w-1.5 rounded-full ${result.active ? "bg-emerald-500" : "bg-red-500"}"></span>
                        <h2 class="text-sm font-normal ${result.active ? "text-emerald-500" : "text-gray-500"}">${result.active ? "Active" : "Inactive"}</h2>
                    </div>
                </td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">${result.role}</td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">${result.email}</td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <div class="flex items-center gap-x-2">
                        <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">${result.tags[0]}</p>
                        <p class="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">${result.tags[1]}</p>
                        <p class="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">${result.tags[2]}</p>
                    </div>
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                    <div class="flex items-center gap-x-6">
                        <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join(''); 
}

module.exports = linearsearch;
