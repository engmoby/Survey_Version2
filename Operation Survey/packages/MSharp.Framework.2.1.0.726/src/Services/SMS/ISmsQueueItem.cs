﻿namespace MSharp.Framework.Services
{
    using System;

    /// <summary>
    /// Represents a sendable SMS item generated by the application.
    /// </summary>
    [LogEvents(false)]
    [CacheObjects(false)]
    public interface ISmsQueueItem : IEntity
    {
        /// <summary>
        /// Gets or sets the date this SMS should be sent.
        /// </summary>
        DateTime Date { get; set; }

        /// <summary>
        /// Gets or sets the date when this SMS was successfully sent.
        /// </summary>
        DateTime? DateSent { get; set; }

        /// <summary>
        /// Gets or sets the Sender Name.
        /// </summary>
        string SenderName { get; set; }

        /// <summary>
        /// Gets or sets the SMS text.
        /// </summary>
        string Text { get; set; }

        /// <summary>
        /// Gets or sets the SMS recipient number.
        /// </summary>
        string To { get; set; }

        /// <summary>
        /// Gets or sets the number of times sending this email has been tried.
        /// </summary>
        int Retries { get; set; }

    }
}
