/*
 * 论文列表编辑文件
 *
 * 新增论文时：
 * 1. 如果需要提供 PDF 下载，把文件放到 assets/papers/；
 * 2. 复制下面任意一条记录，修改字段后放到数组中；
 * 3. link 没有可用地址时写成空字符串 ""。
 *
 * 仅添加 PDF 文件不会自动显示在网页上，因为 GitHub Pages 是纯静态网站，
 * 浏览器不能自动读取服务器上的文件夹目录。
 */
window.PUBLICATIONS = [
  {
    tag: "ICWS · CCF-B",
    year: "2026",
    title: "Self-Evolving Neural Systems for Heterogeneous Mobile Devices",
    authors: "Zhao Li, Peiqi Zhang, Enze Yu, Haipeng Dai, Qiang He, Shanyun Liu",
    venue: "IEEE International Conference on Web Services (ICWS), 2026",
    link: ""
  },
  {
    tag: "TPDS · CCF-A",
    year: "2026",
    title: "Edge-end Heterogeneous Collaborative Learning by Prototype Selection and Edge Association",
    authors: "Enze Yu, Haipeng Dai, Haihan Zhang, Yuben Qu, Tao Wu, Penghuan Cheng, Sujin Hou, Zhenzhe Zheng, Fan Wu, Guihai Chen",
    venue: "IEEE Transactions on Parallel and Distributed Systems (TPDS), 2026",
    link: ""
  },
  {
    tag: "WWW · CCF-A",
    year: "2026",
    title: "Prototype Augmentation-based Edge-end Heterogeneous Collaborative Learning",
    authors: "Enze Yu, Penghuan Cheng, Haipeng Dai, Haihan Zhang, Sujin Hou, Meng Li, Zhenzhe Zheng, Qiang He, Guihai Chen",
    venue: "The ACM Web Conference (WWW), 2026",
    link: ""
  },
  {
    tag: "LCN · CCF-C",
    year: "2025",
    title: "Prototype-Based Semi-Asynchronous Edge-End Collaborative Learning with Client Clustering",
    authors: "Sujin Hou, Enze Yu, Fang Mei, Yuben Qu, Haihan Zhang, Haipeng Dai",
    venue: "IEEE 50th Conference on Local Computer Networks (LCN), 2025 · 共同第一作者",
    link: ""
  },
  {
    tag: "TMC · CCF-A",
    year: "2025",
    title: "Optimizing Monitoring Utility of Unmanned Aerial Vehicles Considering Adverse Effects",
    authors: "Haihan Zhang, Haipeng Dai, Yu Qiu, Enze Yu, Ruiben Zhou, Weijun Wang, Jingwu Wang, Guihai Chen",
    venue: "IEEE Transactions on Mobile Computing (TMC), 2025",
    link: ""
  },
  {
    tag: "TCE · SCI-2",
    year: "2025",
    title: "Task Offloading and Resource Allocation Based on Reinforcement Learning and Load Balancing in Vehicular Networking",
    authors: "Shujuan Tian, Shuhuan Xiang, Ziqi Zhou, Haipeng Dai, Enze Yu, Qingyong Deng",
    venue: "IEEE Transactions on Consumer Electronics (TCE), 2025",
    link: ""
  },
  {
    tag: "SPE · CCF-B",
    year: "2024",
    title: "Prototype-based collaborative learning in UAV-assisted edge computing networks",
    authors: "Enze Yu, Haipeng Dai, Haihan Zhang, Zhenzhe Zheng, Jun Zhao, Guihai Chen",
    venue: "Software: Practice and Experience (SPE), 2024",
    link: "assets/papers/paper5.pdf"
  },
  {
    tag: "TVT · SCI-2",
    year: "2024",
    title: "R-manager: Consortium Blockchain-based Vehicle Reputation Management for High-quality Reports in Traffic-oriented Crowdsourcing",
    authors: "Enze Yu, Yuwei Xu, Lin Gao, Jie Cao, Qiao Xiang, Liang He",
    venue: "IEEE Transactions on Vehicular Technology (TVT), 2024",
    link: "assets/papers/paper4.pdf"
  },
  {
    tag: "CN · CCF-B",
    year: "2024",
    title: "GateKeeper: An UltraLite malicious traffic identification method with dual-aspect optimization strategies on IoT gateways",
    authors: "Jie Cao, Yuwei Xu, Enze Yu, Qiao Xiang, Kehui Song, Liang He, Guang Cheng",
    venue: "Computer Networks, 2024",
    link: ""
  },
  {
    tag: "TVT · SCI-2",
    year: "2023",
    title: "R-Tracing: Consortium Blockchain-Based Vehicle Reputation Management for Resistance to Malicious Attacks and Selfish Behaviors",
    authors: "Yuwei Xu, Enze Yu, Yuxing Song, Fei Tong, Qiao Xiang, Liang He",
    venue: "IEEE Transactions on Vehicular Technology (TVT), 2023",
    link: "assets/papers/paper2.pdf"
  },
  {
    tag: "CEA · CCF T2",
    year: "2019",
    title: "Phishing website detection method based on integrated learning",
    authors: "Enze Yu, Nurbol, Qing Yu",
    venue: "Computer Engineering and Applications, 2019",
    link: "assets/papers/paper1.pdf"
  }
];
