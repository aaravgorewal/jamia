export const simulateAI = async (type, params) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(generateResponse(type, params));
        }, 1500); // Simulate network delay
    });
};

const generateResponse = (type, params) => {
    switch (type) {
        case 'ideation':
            return generateIdeation(params);
        case 'drafting':
            return generateDraft(params);
        case 'refinement':
            return refineContent(params);
        case 'repurposing':
            return repurposeContent(params);
        default:
            return null;
    }
};

const generateIdeation = ({ industry, audience, goal }) => {
    const topics = [
        `The Future of ${industry} for ${audience}`,
        `5 Common Mistakes ${audience} Make in ${industry}`,
        `How to Achieve ${goal} in the ${industry} Industry`,
        `The Ultimate Guide to ${industry} for Beginners`,
        `Why ${industry} is Changing and What it Means for You`,
        `Top 10 Tools for ${industry} Professionals`,
        `Case Study: How We Achieved ${goal} in 30 Days`
    ];
    return topics.map((title, i) => ({
        id: i,
        title,
        description: `A focused piece on ${title.toLowerCase()} tailored for ${audience}.`,
        score: Math.floor(Math.random() * 20) + 80 // 80-99 score
    }));
};

const generateDraft = ({ type, topic, tone }) => {
    return `
# ${topic}

**Draft Type:** ${type} | **Tone:** ${tone}

## Introduction
Start with a strong hook here. We are diving deep into ${topic}. This matters because your audience cares about solving this specific problem.

## Key Point 1: The Foundation
Explain the basics. Why is this important?
- Detail A
- Detail B
- Detail C

## Key Point 2: Advanced Strategy
Here is where we get technical. In a ${tone} voice, explain how to execute.
> "Success isn't about luck; it's about consistency."

## Conclusion
Wrap it up. Remind them why they started reading.

**Call to Action:** Share this if you found it helpful!
  `;
};

const refineContent = ({ content, instruction }) => {
    return `
**[AI Refined Version - Instruction: "${instruction}"]**

${content}

---
*Note: The AI has smoothed out the flow, improved clarity, and adjusted the tone to match your request.*
  `;
};

const repurposeContent = ({ content, formats }) => {
    const results = {};

    if (formats.includes('linkedin')) {
        results.linkedin = `
🚀 **New Post Alert!**

${content.substring(0, 100)}...

Here are 3 takeaways:
1️⃣ Point One
2️⃣ Point Two
3️⃣ Point Three

👇 Let me know what you think in the comments! #ContentCreation #Growth
    `;
    }

    if (formats.includes('twitter')) {
        results.twitter = `
🧵 Thread: ${content.substring(0, 50)}...

1/5
This is the main hook.

2/5
First major insight.

3/5
Second major insight.

4/5
Key takeaway.

5/5
Conclusion & CTA.
    `;
    }

    if (formats.includes('instagram')) {
        results.instagram = `
📸 **Visual Hook**

${content.substring(0, 80)}...

Double tap if you agree! ❤️
.
.
.
#trends #growth #mindset
    `;
    }

    return results;
};
