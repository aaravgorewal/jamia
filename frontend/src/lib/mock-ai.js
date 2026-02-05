export const MockAI = {
    ideate: async ({ niche, audience, goal, platform }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const topics = [
                    `5 ${niche} myths ${audience} still believe`,
                    `Why your ${goal} strategy isn't working (and it's not your fault)`,
                    `${niche} for ${audience}: A complete guide`,
                    `The secret to ${goal} on ${platform}`,
                    `How to master ${niche} in 30 days`,
                    `Top 10 ${platform} trends for ${niche} creators`,
                    `Stop doing this if you want to achieve ${goal}`,
                ];
                resolve(topics.sort(() => 0.5 - Math.random()).slice(0, 4));
            }, 1500);
        });
    },

    draft: async ({ topic, tone, length, style }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    title: topic,
                    content: `
## ${topic}

**Hook:**
Ever wondered why some people succeed at ${topic} while others struggle? It usually comes down to one thing...

**Core Insight:**
When it comes to ${topic}, the biggest mistake is ignoring the basics. We often get caught up in complex strategies, but the answer is usually simple.

**Key Points:**
1. **Consistency is Key:** You can't expect results overnight.
2. **Know Your Audience:** Tailor your message to what they actually need.
3. **Quality over Quantity:** It's better to do one thing well than ten things poorly.

**Call to Action:**
If you found this helpful, share it with someone who needs to hear it! #ContentGenie #${style}
          `.trim(),
                });
            }, 2000);
        });
    },

    refine: async ({ content, option }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let refined = content;
                if (option === 'grammar') refined = "Content has been polished for grammar and clarity. (Simulated)";
                if (option === 'tone') refined = "Content tone has been adjusted to be more professional/engaging. (Simulated)";
                if (option === 'simplify') refined = "Content has been simplified for better readability. (Simulated)";

                resolve(`[${option.toUpperCase()} APPLIED]\n\n${refined}\n\n(Original length: ${content.length} chars -> New length: ${refined.length} chars)`);
            }, 1500);
        });
    },

    repurpose: async ({ content, formats }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const results = {};
                if (formats.includes('linkedin')) results.linkedin = "LinkedIn Post:\n\n🚀 Big insight explicitly for my network...\n\n" + content.substring(0, 100) + "...";
                if (formats.includes('twitter')) results.twitter = "🧵 Thread:\n\n1/5 " + content.substring(0, 50) + "...\n\n2/5 Key point...\n\n#thread";
                if (formats.includes('instagram')) results.instagram = "IG Caption:\n\n✨ " + content.substring(0, 80) + "...\n\nLink in bio! 🔗";

                resolve(results);
            }, 2500);
        });
    }
};
